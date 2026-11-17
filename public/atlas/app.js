/* Point de chute — logique du site.
   Lieux : window.LOCS = [lat, lng, idPanorama, ville, codePays] (voir locations.js). */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const LOCS = window.LOCS || [];
  const ROUNDS = 5;
  const MAX = 5000;
  const FLASH = 15;                   // secondes de vue en mode Éclair
  const RELAY = 'https://ntfy.sh/';   // relais public du classement entre amis
  const RELAY_ALT = 'relais/';        // le même relais, atteint par notre propre adresse quand le navigateur bloque le premier

  /* ---------- Géographie ---------- */
  const CONT = { EU: 'Europe', AS: 'Asie', AF: 'Afrique', NA: 'Amérique du Nord', SA: 'Amérique du Sud', OC: 'Océanie' };
  const CC2CONT = {};
  Object.entries({
    EU: 'AD AL AT BA BE BG CH CZ DE DK EE ES FI FO FR GB GR HR HU IE IS IT LT LU LV ME MK MT NL NO PL PT RO RS SE SI SK UA RU',
    AS: 'TR IL JO LB AE QA OM KZ KG MN BD LK KH VN LA TH MY SG ID PH KR JP TW HK IN NP BT',
    AF: 'ZA LS SZ BW KE RW NG GH SN TN',
    NA: 'US CA MX GT CR PA DO PR GL',
    SA: 'BR AR CL PE CO EC BO UY PY',
    OC: 'AU NZ',
  }).forEach(([k, v]) => v.split(' ').forEach((cc) => { CC2CONT[cc] = k; }));
  const contOf = (l) => (l[4] === 'RU' && l[1] > 60 ? 'AS' : CC2CONT[l[4]] || 'EU');

  // k = distance (km) à laquelle on ne garde plus qu'environ 37 % des points.
  // Les lieux portant une étiquette (6e champ : 'c' capitale, 'l' lieu célèbre) ne servent qu'à leur carte thématique.
  const ZONES = {
    monde: { label: 'Monde', k: 1500, view: [[25, 5], 1.5], has: (l) => !l[5], hints: ['cont', 'pays'] },
    europe: { label: 'Europe', k: 450, view: [[53, 12], 3.5], has: (l) => !l[5] && contOf(l) === 'EU', hints: ['pays'] },
    france: { label: 'France', k: 130, view: [[46.6, 2.4], 5], has: (l) => !l[5] && l[4] === 'FR', hints: ['quart'] },
    ameriques: { label: 'Amériques', k: 1200, view: [[8, -80], 2], has: (l) => !l[5] && (contOf(l) === 'NA' || contOf(l) === 'SA'), hints: ['cont', 'pays'] },
    asie: { label: 'Asie et Océanie', k: 1200, view: [[12, 105], 2], has: (l) => !l[5] && (contOf(l) === 'AS' || contOf(l) === 'OC'), hints: ['cont', 'pays'] },
    afrique: { label: 'Afrique', k: 800, view: [[-2, 20], 2.5], has: (l) => !l[5] && contOf(l) === 'AF', hints: ['pays'] },
    capitales: { label: 'Capitales', k: 1500, view: [[25, 5], 1.5], has: (l) => l[5] === 'c', hints: ['cont', 'pays'] },
    celebres: { label: 'Lieux célèbres', k: 1500, view: [[25, 5], 1.5], has: (l) => l[5] === 'l', hints: ['cont', 'pays'] },
  };
  // Zone d'un seul pays (clé « pays:FR »), fabriquée à la demande pour le passeport.
  const zoneCache = {};
  function Z(key) {
    if (ZONES[key]) return ZONES[key];
    const m = /^pays:([A-Z]{2})$/.exec(key || '');
    if (!m) return ZONES.monde;
    if (!zoneCache[key]) {
      const cc = m[1], ls = LOCS.filter((l) => !l[5] && l[4] === cc);
      const lats = ls.map((l) => l[0]), lngs = ls.map((l) => l[1]);
      const sw = [Math.min(...lats), Math.min(...lngs)], ne = [Math.max(...lats), Math.max(...lngs)];
      zoneCache[key] = { label: countryName(cc), k: clamp(haversine(sw, ne) / 8, 12, 900), bounds: [sw, ne], has: (l) => !l[5] && l[4] === cc, hints: [], country: cc };
    }
    return zoneCache[key];
  }
  const MODES = {
    classique: { label: 'Classique', code: 'c', desc: 'Balade-toi librement, puis place ton point sur la carte.' },
    postale: { label: 'Carte postale', code: 'p', desc: 'Une image fixe : impossible de bouger ni de tourner la tête.' },
    eclair: { label: 'Éclair', code: 'e', desc: `${FLASH} secondes pour regarder, puis la vue disparaît.` },
    serie: { label: 'Série de pays', code: 's', desc: 'Quel pays ? Quatre choix. Une erreur et la série s\'arrête.' },
  };
  const MODE_BY_CODE = { c: 'classique', p: 'postale', e: 'eclair' };

  /* ---------- Utilitaires ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('pdc.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('pdc.' + k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } },
  };
  const fmtInt = (n) => Math.round(n).toLocaleString('fr-FR');
  const regionNames = (() => { try { return new Intl.DisplayNames(['fr'], { type: 'region' }); } catch (e) { return null; } })();
  const countryName = (cc) => { try { return (regionNames && regionNames.of(cc)) || cc; } catch (e) { return cc; } };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compact = window.matchMedia('(max-width: 760px), (hover: none), (pointer: coarse)');
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

  function fmtDist(km) {
    if (km < 1) return Math.max(1, Math.round(km * 1000)) + ' m';
    if (km < 20) return km.toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + ' km';
    return fmtInt(km) + ' km';
  }
  function fmtTime(s) { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  const fmtLimit = (s) => (!s ? 'temps libre' : s === 90 ? '1 min 30 par étape' : s >= 60 ? `${s / 60} min par étape` : `${s} s par étape`);
  const wrapLng = (lng) => ((lng + 180) % 360 + 360) % 360 - 180;

  // Hasard reproductible : une même graine donne les mêmes lieux chez tout le monde.
  function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function mulberry32(a) {
    return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function randId(n) {
    const a = new Uint8Array(n); (window.crypto || window.msCrypto).getRandomValues(a);
    return Array.from(a, (b) => 'abcdefghijkmnpqrstuvwxyz23456789'[b % 32]).join('');
  }

  function haversine(a, b) {
    const R = Math.PI / 180;
    const h = Math.sin((b[0] - a[0]) * R / 2) ** 2 + Math.cos(a[0] * R) * Math.cos(b[0] * R) * Math.sin((b[1] - a[1]) * R / 2) ** 2;
    return 2 * 6371 * Math.asin(Math.min(1, Math.sqrt(h)));
  }
  // Points le long du grand cercle entre a et b, longitudes « déroulées » pour passer l'antiméridien proprement.
  function arc(a, b, n = 72) {
    const R = Math.PI / 180, f1 = a[0] * R, l1 = a[1] * R, f2 = b[0] * R, l2 = b[1] * R;
    const d = 2 * Math.asin(Math.min(1, Math.sqrt(Math.sin((f2 - f1) / 2) ** 2 + Math.cos(f1) * Math.cos(f2) * Math.sin((l2 - l1) / 2) ** 2)));
    if (d < 1e-7 || Math.abs(d - Math.PI) < 1e-7) return [a, b];
    const pts = []; let prev = a[1];
    for (let i = 0; i <= n; i++) {
      const t = i / n, A = Math.sin((1 - t) * d) / Math.sin(d), B = Math.sin(t * d) / Math.sin(d);
      const x = A * Math.cos(f1) * Math.cos(l1) + B * Math.cos(f2) * Math.cos(l2);
      const y = A * Math.cos(f1) * Math.sin(l1) + B * Math.cos(f2) * Math.sin(l2);
      const z = A * Math.sin(f1) + B * Math.sin(f2);
      const lat = Math.atan2(z, Math.sqrt(x * x + y * y)) / R;
      let lng = Math.atan2(y, x) / R;
      while (lng - prev > 180) lng -= 360;
      while (lng - prev < -180) lng += 360;
      prev = lng; pts.push([lat, lng]);
    }
    return pts;
  }
  function points(km, k) { return km <= 0.25 ? MAX : Math.round(MAX * Math.exp(-km / k)); }

  function countUp(el, to, ms = 900) {
    if (reduceMotion || to === 0) { el.textContent = fmtInt(to); return; }
    const t0 = performance.now();
    (function step(now) {
      const t = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - t, 3);
      el.textContent = fmtInt(to * e);
      if (t < 1) requestAnimationFrame(step);
    })(t0);
  }

  async function copyText(text, btn, okLabel) {
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) {
      try {
        const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove();
      } catch (e2) { ok = false; }
    }
    if (btn) {
      if (!btn.dataset.label) btn.dataset.label = btn.textContent;
      btn.textContent = ok ? okLabel : 'Copie impossible';
      clearTimeout(btn._t); btn._t = setTimeout(() => { btn.textContent = btn.dataset.label; }, 1800);
    }
    return ok;
  }

  /* ---------- Son ---------- */
  const Snd = {
    on: store.get('snd', true), ctx: null,
    tone(f, d, t = 0, type = 'triangle', vol = 0.07) {
      if (!this.on) return;
      try {
        const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
        this.ctx = this.ctx || new AC();
        if (this.ctx.state !== 'running') this.ctx.resume();   // « suspended », ou « interrupted » sur iPhone après un passage en arrière-plan
        const o = this.ctx.createOscillator(), g = this.ctx.createGain(), t0 = this.ctx.currentTime + t;
        o.type = type; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(vol, t0 + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
        o.connect(g); g.connect(this.ctx.destination); o.start(t0); o.stop(t0 + d + 0.03);
      } catch (e) { /* pas de son, tant pis */ }
    },
    pin() { this.tone(700, 0.08); },
    tick() { this.tone(980, 0.05, 0, 'square', 0.03); },
    start() { this.tone(392, 0.1); this.tone(587, 0.18, 0.1); },
    good() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.18, i * 0.09)); },
    mid() { [440, 554].forEach((f, i) => this.tone(f, 0.18, i * 0.1)); },
    bad() { [300, 220].forEach((f, i) => this.tone(f, 0.24, i * 0.14, 'sawtooth', 0.04)); },
  };

  // Confettis aux couleurs de la route. Une seule boucle de dessin : deux salves rapprochées (record + niveau) s'additionnent.
  let confParts = [], confOn = false;
  function confetti() {
    if (reduceMotion) return;
    const c = $('confetti'), x = c.getContext('2d'), W = (c.width = window.innerWidth), H = (c.height = window.innerHeight);
    const cols = ['#ffd60a', '#0a7a4b', '#d5202a', '#ffffff', '#0c4da2'], t0 = performance.now();
    for (let i = 0; i < 130; i++) confParts.push({ t0, x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.45, vx: (Math.random() - 0.5) * 15, vy: -Math.random() * 13 - 4, s: 6 + Math.random() * 6, r: Math.random() * 6, round: i % 4 === 0, c: cols[Math.floor(Math.random() * cols.length)] });
    if (confOn) return;
    confOn = true;
    (function frame(now) {
      x.clearRect(0, 0, c.width, c.height);
      confParts = confParts.filter((p) => now - p.t0 < 2300);
      if (!confParts.length) { confOn = false; return; }
      confParts.forEach((p) => {
        p.vy += 0.32; p.x += p.vx; p.y += p.vy; p.r += 0.2;
        x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.globalAlpha = Math.max(0, 1 - (now - p.t0) / 2300);
        if (p.round) { x.beginPath(); x.arc(0, 0, p.s * 0.42, 0, 6.3); x.fill(); } else x.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * 0.66);
        x.restore();
      });
      requestAnimationFrame(frame);
    })(t0);
  }

  /* ---------- Tirage des lieux ---------- */
  function pickOne(zoneKey, usedPanos, usedCountries, rng, avoidRecent) {
    const z = Z(zoneKey);
    let pool = LOCS.filter((l) => z.has(l) && !usedPanos.has(l[2]));
    if (avoidRecent) {
      const recent = new Set(getRecent());
      const fresh = pool.filter((l) => !recent.has(l[2]));
      if (fresh.length >= 30) pool = fresh;
    }
    if (zoneKey !== 'france') {
      // On tire d'abord un pays (pondéré, sans laisser les gros pays tout écraser), puis un lieu dedans.
      const by = {};
      pool.forEach((l) => (by[l[4]] = by[l[4]] || []).push(l));
      let ccs = Object.keys(by).filter((c) => !usedCountries.has(c));
      if (!ccs.length) ccs = Object.keys(by);
      const w = ccs.map((c) => Math.sqrt(Math.min(by[c].length, 60)));
      let r = rng() * w.reduce((a, b) => a + b, 0), i = 0;
      for (; i < w.length - 1; i++) { r -= w[i]; if (r <= 0) break; }
      pool = by[ccs[i]];
    }
    return pool[Math.floor(rng() * pool.length)];
  }
  function pickGame(zoneKey, rng, avoidRecent) {
    const usedP = new Set(), usedC = new Set(), locs = [];
    for (let i = 0; i < ROUNDS; i++) {
      const loc = pickOne(zoneKey, usedP, usedC, rng, avoidRecent);
      usedP.add(loc[2]); usedC.add(loc[4]); locs.push(loc);
    }
    return { locs, usedP, usedC };
  }
  function getRecent() { const r = store.get('recent', []); return Array.isArray(r) ? r.filter((x) => typeof x === 'string') : []; }
  function markRecent(pano) {
    const r = getRecent().filter((p) => p !== pano);
    r.push(pano);
    store.set('recent', r.slice(-600));
  }
  const svUrl = (loc, heading) =>
    `https://www.google.com/maps/embed?pb=!6m8!1m7!1s${loc[2]}!2m2!1d${loc[0]}!2d${loc[1]}!3f${heading}!4f0!5f0.78`;
  const mapsUrl = (loc) => `https://www.google.com/maps/@?api=1&map_action=pano&pano=${encodeURIComponent(loc[2])}&viewpoint=${loc[0]},${loc[1]}`;

  /* ---------- Cartes ---------- */
  // Fond de carte : style maison (mapstyle.js) dessiné par MapLibre à partir des données OpenFreeMap.
  // Si le navigateur ne sait pas l'afficher ou si le service ne répond pas, on retombe sur les tuiles OpenStreetMap.
  const OSM = '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>';
  const rasterTiles = () => {
    const layer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', { subdomains: 'abc', maxZoom: 19, attribution: OSM + ' · OSM France' });
    let fails = 0;
    layer.on('tileerror', () => {
      if (++fails === 4) { layer.options.subdomains = ['']; layer.setUrl('https://tile.openstreetmap.org/{z}/{x}/{y}.png'); }
    });
    return layer;
  };
  const hasGL = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } })();
  function addBase(map) {
    if (!(hasGL && window.maplibregl && L.maplibreGL && window.PDC_STYLE)) { rasterTiles().addTo(map); return; }
    let gl = null, ok = false, swapped = false;
    const swap = () => {
      if (ok || swapped) return;
      swapped = true;
      if (map._pdcDead) return;   // carte déjà détruite (accueil quitté) : rien à remplacer
      if (gl) {
        // Si la couche a planté en cours d'ajout, Leaflet garde ses écouteurs : on retire tout à la main.
        try { map.removeLayer(gl); } catch (e) { /* pas complètement ajoutée */ }
        try { map.off(gl.getEvents(), gl); } catch (e) { /* rien à retirer */ }
        try { delete map._layers[L.stamp(gl)]; } catch (e) { /* idem */ }
      }
      rasterTiles().addTo(map);
    };
    try {
      gl = L.maplibreGL({ style: window.PDC_STYLE, attribution: OSM + ' · <a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> · © OpenMapTiles' });
      gl.addTo(map);
      const m = gl.getMaplibreMap();
      let errs = 0, waited = 0;
      m.on('data', (e) => { if (e.dataType === 'source' && e.tile) ok = true; });
      m.on('error', (e) => { console.warn('carte :', e && e.error ? e.error.message : e); if (++errs >= 4) swap(); });
      // Rien reçu au bout de 12 s d'affichage réel (un onglet en arrière-plan ne compte pas) : on bascule.
      const iv = setInterval(() => {
        if (ok || swapped) { clearInterval(iv); return; }
        if (!document.hidden && (waited += 1000) >= 12000) { clearInterval(iv); swap(); }
      }, 1000);
    } catch (e) { console.warn('carte :', e && e.message); swap(); }
  }
  const iconGuess = L.divIcon({ className: '', html: '<div class="pin-guess"></div>', iconSize: [22, 22], iconAnchor: [11, 11] });
  const iconTrue = (n) => L.divIcon({ className: '', html: `<div class="pin-true">${n ? `<span class="pin-num">${n}</span>` : ''}</div>`, iconSize: [22, 30], iconAnchor: [11, 28] });
  function iconOther(name, color) {
    const d = document.createElement('div');
    d.className = 'pin-other'; d.style.background = color; d.textContent = (name || '?').slice(0, 1);
    return L.divIcon({ className: '', html: d, iconSize: [22, 22], iconAnchor: [11, 11] });
  }

  let homeMap, gmap, gmarker, rmap, rlayer, olayer;

  function initHomeMap() {
    if (homeMap) return;
    homeMap = L.map('homeMap', { zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false, tap: false })
      .setView([34, 8 + Math.random() * 40], 4);
    addBase(homeMap);
    if (!reduceMotion) {
      const map = homeMap;
      const drift = () => { if (homeMap === map && !$('home').hidden && !(map._panAnim && map._panAnim._inProgress)) map.panBy([120, 0], { animate: true, duration: 12, easeLinearity: 1 }); };
      map.on('moveend', drift);
      setTimeout(drift, 600);
    }
  }
  function killHomeMap() {
    if (!homeMap) return;
    const m = homeMap;
    homeMap = null; m._pdcDead = true;
    // On arrête d'abord la dérive en cours : sinon son animation se termine sur une carte déjà détruite.
    try { m.off('moveend'); m.stop(); } catch (e) { /* rien à arrêter */ }
    try { m.remove(); } catch (e) { /* déjà retirée */ }
  }

  function initGuessMap() {
    gmap = L.map('guessMap', { worldCopyJump: true, minZoom: 1, maxZoom: 18, zoomSnap: 0.5, wheelPxPerZoomLevel: 90, doubleClickZoom: false }).setView([25, 5], 1.5);
    addBase(gmap);
    gmap.on('click', (e) => {
      if (!gmarker) gmarker = L.marker(e.latlng, { icon: iconGuess, draggable: true, keyboard: false }).addTo(gmap);
      else gmarker.setLatLng(e.latlng);
      Snd.pin();
      $('guess').classList.add('has-pin');
      const b = $('guessBtn');
      b.disabled = false;
      b.innerHTML = 'Valider <kbd>Espace</kbd>';
    });
    new ResizeObserver(() => gmap.invalidateSize({ animate: false })).observe($('guessMap'));

    // Sur ordinateur, la mini-carte s'agrandit au survol.
    let closeT;
    const g = $('guess');
    g.addEventListener('mouseenter', () => {
      const a = document.activeElement;
      if (a && a.tagName === 'IFRAME') { a.blur(); window.focus(); }
      if (compact.matches) return;
      clearTimeout(closeT); g.classList.add('open');
    });
    g.addEventListener('mouseleave', () => { if (compact.matches) return; closeT = setTimeout(() => g.classList.remove('open'), 500); });

    // Trois tailles et une punaise pour la garder ouverte : préférences d'affichage, gardées d'un trajet à l'autre.
    let size = Math.min(3, Math.max(1, +store.get('ui.gm', 2) || 2)), pinned = store.get('ui.gmPin', false) === true;
    const renderGm = () => {
      g.dataset.size = size; g.classList.toggle('pinned', pinned);
      $('gmLess').disabled = size <= 1; $('gmMore').disabled = size >= 3;
      const pin = $('gmPin'), txt = pinned ? 'Laisser la carte se replier' : 'Garder la carte ouverte';
      pin.setAttribute('aria-pressed', pinned); pin.title = txt; pin.setAttribute('aria-label', txt);
    };
    const gmAct = (id, fn) => $(id).addEventListener('click', (e) => { fn(); store.set('ui.gm', size); store.set('ui.gmPin', pinned); renderGm(); e.currentTarget.blur(); });
    gmAct('gmLess', () => { size = Math.max(1, size - 1); });
    gmAct('gmMore', () => { size = Math.min(3, size + 1); });
    gmAct('gmPin', () => { pinned = !pinned; });
    renderGm();

    // Fenêtre redimensionnée, téléphone tourné : la carte reprend sa place (et son cadrage tant qu'aucun point n'est posé).
    let wide = innerWidth > innerHeight, rsT;
    const refit = () => {
      clearTimeout(rsT);
      rsT = setTimeout(() => {
        const turned = wide !== (innerWidth > innerHeight);
        wide = innerWidth > innerHeight;
        if ($('play').hidden) return;
        gmap.invalidateSize({ animate: false });
        if (turned && S && !Q) { if (gmarker) gmap.panTo(gmarker.getLatLng(), { animate: false }); else fitZone(); }
      }, 200);
    };
    window.addEventListener('resize', refit);
    window.addEventListener('orientationchange', refit);
  }
  function fitZone() {
    const zn = Z(S.zone);
    if (zn.bounds) gmap.fitBounds(zn.bounds, { padding: [8, 8], animate: false });
    else gmap.setView(zn.view[0], zn.view[1], { animate: false });
  }

  function initResultMap() {
    rmap = L.map('resultMap', { minZoom: 0.5, zoomSnap: 0.25, worldCopyJump: false }).setView([25, 5], 2);
    addBase(rmap);
    rlayer = L.layerGroup().addTo(rmap);
    olayer = L.layerGroup().addTo(rmap);
    rmap.on('dragstart zoomstart', () => { if (fitting) return; if (lastFit) lastFit.moved = true; holdAuto(); });
  }

  /* ---------- Trajet entre amis : relais ---------- */
  const myId = (() => { let v = store.get('pid', null); if (typeof v !== 'string' || !/^[a-z0-9]{4,16}$/.test(v)) { v = randId(8); store.set('pid', v); } return v; })();
  const cleanName = (s) => String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f<>]/g, '').trim().slice(0, 16);
  const getName = () => { const n = store.get('name', ''); return typeof n === 'string' ? cleanName(n) : ''; };
  const COLORS = ['#e4572e', '#17bebb', '#7b2cbf', '#f72585', '#2a9d8f', '#ff9f1c', '#3a86ff', '#6c757d'];
  const colorOf = (id) => (id === myId ? '#ffd60a' : COLORS[hashStr(id) % COLORS.length]);
  // Un trajet entre amis tient dans un code de 6 caractères (sans I, O, 0, 1 : trop faciles à confondre).
  // Les 4 premiers sont tirés au hasard ; les 2 derniers portent les réglages (zone, mode, temps), brouillés par les 4 premiers :
  // tout le monde retrouve donc les mêmes lieux à partir du seul code, et un code mal recopié est presque toujours refusé.
  const CODE_ABC = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const CODE_ZONES = ['monde', 'europe', 'france', 'ameriques', 'asie', 'afrique', 'capitales', 'celebres'];
  const CODE_MODES = ['classique', 'postale', 'eclair'], CODE_LIMITS = [0, 180, 90, 30];
  const codeKey = (head) => hashStr('pdc' + head) % 1024;
  const cleanCode = (s) => String(s == null ? '' : s).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  const fmtCode = (c) => (c.length > 3 ? c.slice(0, 3) + ' ' + c.slice(3) : c);
  function parseCode(s) {
    const c = cleanCode(s);
    if (!/^[A-HJ-NP-Z2-9]{6}$/.test(c)) return null;
    const k = (((CODE_ABC.indexOf(c[4]) << 5) | CODE_ABC.indexOf(c[5])) - codeKey(c.slice(0, 4)) + 1024) % 1024;
    if (k >= CODE_ZONES.length * 12) return null;
    return { id: c.toLowerCase(), code: c, zone: CODE_ZONES[Math.floor(k / 12)], mode: CODE_MODES[(k % 12) >> 2], limit: CODE_LIMITS[k % 4] };
  }
  function newRoom(zone, mode, limit) {
    const a = new Uint8Array(4); (window.crypto || window.msCrypto).getRandomValues(a);
    const head = Array.from(a, (b) => CODE_ABC[b % 32]).join('');
    const z = Math.max(0, CODE_ZONES.indexOf(zone)), m = Math.max(0, CODE_MODES.indexOf(mode)), l = Math.max(0, CODE_LIMITS.indexOf(limit));
    const k = (z * 12 + m * 4 + l + codeKey(head)) % 1024;
    return parseCode(head + CODE_ABC[k >> 5] + CODE_ABC[k & 31]);
  }
  const parseLink = parseCode;
  const linkOf = (c) => c.code;
  const pageUrl = () => location.origin + location.pathname;
  const roomUrl = (c) => `${pageUrl()}#p=${linkOf(c)}`;

  const Room = {
    cfg: null, es: null, seen: new Set(), players: new Map(), online: false, next: null, onChange: null,
    open(cfg) {
      this.close();
      this.cfg = cfg; this.players = new Map(); this.seen = new Set(); this.next = null; this.online = false; this.openedAt = 0; this.lastId = '';
      const mine = store.get('room.' + cfg.id, null);   // mes étapes, gardées aussi sur cet appareil
      if (Array.isArray(mine)) this.apply({ t: 'g', id: myId, n: getName(), g: mine }, true, true);
      this.connect();
    },
    connect() {
      const cfg = this.cfg;
      if (!cfg) return;
      if (this.es) this.es.close();
      this.es = null; clearTimeout(this.linkT); this.pollToken = (this.pollToken || 0) + 1;
      if (this.viaProxy) { this.poll(); return; }
      // En direct d'abord. Si le navigateur ne peut pas joindre le relais (réseau filtré), on passe par notre propre adresse.
      let opened = false;
      const fallback = () => {
        clearTimeout(this.linkT);
        if (opened || this.cfg !== cfg || this.viaProxy) return;
        this.viaProxy = true;
        if (this.es) { this.es.close(); this.es = null; }
        this.poll();
      };
      try {
        const es = (this.es = new EventSource(`${RELAY}pdc-${cfg.id}/sse?since=12h`));
        es.onopen = () => { opened = true; clearTimeout(this.linkT); this.online = true; this.openedAt = performance.now(); this.emit(); };   // à chaque (re)connexion, l'historique est renvoyé
        es.onerror = () => { this.online = false; this.emit(); if (!opened) fallback(); };
        es.onmessage = (e) => this.receive(e.data);
        this.linkT = setTimeout(fallback, 6000);
      } catch (e) { fallback(); }
    },
    receive(line) {
      try {
        const m = JSON.parse(line);
        if (m.event !== 'message' || this.seen.has(m.id)) return;
        this.seen.add(m.id); this.lastId = m.id;
        const msg = JSON.parse(m.message);
        this.apply(msg);
        // Plus de 3 s après l'ouverture, ce n'est plus l'historique : c'est un ami en route en ce moment.
        if (this.onLive && this.openedAt && performance.now() - this.openedAt > 3000) this.onLive(msg);
      } catch (err) { /* message illisible : on l'ignore */ }
    },
    // Relais de secours : pas de flux continu, on redemande les nouveautés toutes les 3 secondes.
    async poll() {
      const cfg = this.cfg, token = this.pollToken;
      let fails = 0;
      while (this.cfg === cfg && this.pollToken === token) {
        if (!document.hidden) {
          try {
            const r = await fetch(`${RELAY_ALT}pdc-${cfg.id}/json?poll=1&since=${this.lastId || '12h'}`, { cache: 'no-store' });
            if (!r.ok) throw new Error('relais');
            const txt = await r.text();
            if (this.cfg !== cfg || this.pollToken !== token) return;
            fails = 0;
            if (!this.online) { this.online = true; if (!this.openedAt) this.openedAt = performance.now(); this.emit(); }
            txt.split('\n').forEach((l) => { if (l.trim()) this.receive(l); });
          } catch (e) { if (++fails >= 2 && this.online) { this.online = false; this.emit(); } }
        }
        await sleep(document.hidden ? 1500 : 3000);
      }
    },
    close() { if (this.es) this.es.close(); this.es = null; clearTimeout(this.linkT); this.pollToken = (this.pollToken || 0) + 1; this.cfg = null; },
    emit() { if (this.onChange) this.onChange(); },
    // Tout ce qui arrive du relais est traité comme une donnée non fiable : on valide, on borne, on n'exécute rien.
    apply(m, silent, local) {
      if (!m || typeof m !== 'object' || typeof m.id !== 'string' || !/^[a-z0-9]{4,16}$/.test(m.id)) return;
      let p = this.players.get(m.id);
      if (!p) { p = { id: m.id, name: 'Voyageur', g: [] }; this.players.set(m.id, p); }
      p.name = cleanName(m.n) || p.name;
      // Mes propres étapes ne sont acceptées que si elles viennent de cet appareil : sinon n'importe qui ayant le lien pourrait les écraser.
      if (m.t === 'g' && Array.isArray(m.g) && m.g.length <= ROUNDS && (m.id !== myId || local)) {
        // Une étape : [lat, lng, km, points, nombre de changements de lieu] ou 0 (pas de réponse).
        const g = m.g.map((v) => (Array.isArray(v) && (v.length === 4 || v.length === 5) && v.every(Number.isFinite)
          ? [clamp(v[0], -90, 90), clamp(v[1], -180, 180), Math.max(0, v[2]), clamp(Math.round(v[3]), 0, MAX), clamp(Math.round(v[4] || 0), 0, 50)] : 0));
        if (g.length >= p.g.length) p.g = g;
      }
      if (m.t === 'x' && m.id !== myId && parseLink(m.link)) this.next = { name: p.name, link: m.link };
      if (!silent) this.emit();
    },
    async send(m) {
      if (!this.cfg) return false;
      m.id = myId; m.n = getName();
      this.apply(m, false, true);
      const topic = 'pdc-' + this.cfg.id;
      for (let i = 0; i < 4; i++) {
        // Deux chemins vers le même relais : si l'un est bloqué ou saturé, l'autre prend le relais.
        for (const base of (this.viaProxy ? [RELAY_ALT, RELAY] : [RELAY, RELAY_ALT])) {
          try { const r = await fetch(base + topic, { method: 'POST', body: JSON.stringify(m) }); if (r.ok) return true; } catch (e) { /* on essaie l'autre chemin */ }
        }
        await sleep(1500 * (i + 1));
        if (m.t !== 'x' && (!this.cfg || 'pdc-' + this.cfg.id !== topic)) return false;
      }
      return false;
    },
    total: (p) => p.g.reduce((a, v) => a + (v ? v[3] : 0), 0),
  };

  /* ---------- État ---------- */
  let S = null;          // trajet à 5 étapes en cours
  let Q = null;          // série de pays en cours
  let timerId = null, timerOn = false, timerEnd = 0, flashId = null, quizT = null;
  let loadToken = 0, view = null;
  const cur = () => S.rounds[S.idx];

  let inputLock = 0;
  const locked = () => Date.now() < inputLock;
  function show(id) {
    inputLock = Date.now() + 500;
    ['home', 'friends', 'lobby', 'passport', 'play', 'result'].forEach((s) => { $(s).hidden = s !== id; });
    if (id === 'play' || id === 'result') killHomeMap();
  }
  function stopAll() {
    stopTimer(); stopFlash(); clearTimeout(quizT); stopAuto();
    loadToken++; view = null;
    $('svWrap').innerHTML = '';
  }

  /* ---------- Progression : niveaux, expérience, passeport ---------- */
  const TITLES = [[1, 'Auto-stoppeur'], [3, 'Voyageur du dimanche'], [5, 'Routard'], [8, 'Baroudeur'], [12, 'Globe-trotteur'], [16, 'Explorateur'], [20, 'Cartographe'], [25, 'Légende de la route']];
  const xpNeed = (lv) => Math.round(120 * Math.pow(lv, 1.5));   // expérience totale pour passer du niveau lv au suivant
  function levelOf(xp) {
    let lv = 1;
    while (xp >= xpNeed(lv) && lv < 99) lv++;
    const base = lv > 1 ? xpNeed(lv - 1) : 0;
    return { lv, title: TITLES.filter((t) => lv >= t[0]).pop()[1], into: xp - base, span: xpNeed(lv) - base };
  }
  const getXp = () => { const v = +store.get('xp', 0); return Number.isFinite(v) && v > 0 ? v : 0; };
  function addXp(n) {
    const before = getXp(), after = before + Math.max(0, Math.round(n));
    store.set('xp', after);
    return { gained: after - before, before: levelOf(before), after: levelOf(after) };
  }
  // Badge du voyageur : une petite borne (niveau), le titre, la jauge d'expérience.
  function levelBar(el, L) {
    el.textContent = '';
    const badge = document.createElement('span'); badge.className = 'lvl-badge';
    const bs = document.createElement('small'); bs.textContent = 'Niv.';
    const bn = document.createElement('b'); bn.textContent = L.lv;
    badge.append(bs, ' ', bn);
    const t = document.createElement('span'); t.className = 'lvl-txt';
    const b = document.createElement('b'); b.textContent = L.title;
    t.append(b);
    const bar = document.createElement('span'); bar.className = 'lvl-bar';
    const fill = document.createElement('i'); fill.style.width = clamp(L.into / L.span * 100, 0, 100) + '%';
    bar.appendChild(fill);
    const n = document.createElement('span'); n.className = 'lvl-num'; n.textContent = `${fmtInt(L.into)} / ${fmtInt(L.span)} exp.`;
    el.append(badge, t, n, bar);
  }
  const renderLevel = (el) => levelBar(el, levelOf(getXp()));
  function renderXp(el, x) {
    el.hidden = false;
    levelBar(el, x.after);
    const g = document.createElement('span'); g.className = 'lvl-gain';
    g.textContent = `+${fmtInt(x.gained)} exp.` + (x.after.lv > x.before.lv ? ` · Niveau ${x.after.lv} atteint : ${x.after.title}` : '');
    el.prepend(g);
    if (x.after.lv > x.before.lv) { Snd.good(); confetti(); }
  }

  // Passeport : meilleur total d'une étape dans chaque pays → tampon bronze, argent ou or.
  const TIERS = [[4800, 'or', 'Or'], [4000, 'argent', 'Argent'], [2500, 'bronze', 'Bronze']];
  const tierOf = (pts) => TIERS.find((t) => pts >= t[0]) || null;
  const getPass = () => { const p = store.get('pass', {}); return p && typeof p === 'object' && !Array.isArray(p) ? p : {}; };
  function stamp(cc, pts) {
    const p = getPass(), old = +p[cc] || 0;
    if (pts <= old) return null;
    p[cc] = pts; store.set('pass', p);
    const a = tierOf(old), b = tierOf(pts);
    return b && (!a || a[1] !== b[1]) ? b : null;   // renvoie le nouveau palier s'il vient d'être franchi
  }
  const COUNTRY_MIN = 10;   // nombre de lieux à partir duquel un pays se parcourt seul
  const countryCounts = (() => { const c = {}; LOCS.forEach((l) => { if (!l[5]) c[l[4]] = (c[l[4]] || 0) + 1; }); return c; })();
  function passStats() {
    const p = getPass(), all = Object.keys(countryCounts);
    return { total: all.length, done: all.filter((cc) => tierOf(+p[cc] || 0)).length };
  }
  function openPassport() {
    stopAll();
    show('passport');
    const p = getPass(), ps = passStats();
    renderLevel($('ppLevel'));
    $('ppCount').textContent = ps.done;
    $('ppTotal').textContent = `/ ${ps.total} pays`;
    $('ppIntro').textContent = `Marque au moins ${fmtInt(TIERS[TIERS.length - 1][0])} points sur une étape dans un pays pour gagner son tampon. Touche un pays pour y faire 5 étapes.`;
    // Légende des paliers, du bronze à l'or
    const tiers = $('ppTiers');
    tiers.textContent = '';
    TIERS.slice().reverse().forEach((t) => {
      const li = document.createElement('li'); li.className = t[1];
      const nm = document.createElement('b'); nm.textContent = t[2];
      const th = document.createElement('span'); th.textContent = `dès ${fmtInt(t[0])}`;
      li.append(nm, th);
      tiers.appendChild(li);
    });
    const list = $('ppList');
    list.textContent = '';
    let nGot = 0;   // rang du tampon gagné : ils sont « frappés » l'un après l'autre à l'ouverture
    ['EU', 'NA', 'SA', 'AS', 'AF', 'OC'].forEach((ck) => {
      const ccs = Object.keys(countryCounts).filter((cc) => CC2CONT[cc] === ck).sort((a, b) => countryName(a).localeCompare(countryName(b), 'fr'));
      if (!ccs.length) return;
      const sec = document.createElement('section');
      const h = document.createElement('h3');
      h.textContent = CONT[ck];
      const small = document.createElement('small'); small.textContent = `${ccs.filter((cc) => tierOf(+p[cc] || 0)).length}/${ccs.length}`;
      h.append(' ', small);
      const grid = document.createElement('div'); grid.className = 'stamps';
      ccs.forEach((cc) => {
        const t = tierOf(+p[cc] || 0), playable = countryCounts[cc] >= COUNTRY_MIN;
        const b = document.createElement(playable ? 'button' : 'div');
        if (playable) { b.type = 'button'; b.title = `5 étapes : ${countryName(cc)}`; b.addEventListener('click', () => startSolo('pays:' + cc, 'classique', 0)); }
        b.className = 'stamp' + (t ? ' got ' + t[1] : '') + (playable ? '' : ' fixed');
        // Chaque tampon est posé un peu de travers, toujours pareil pour un même pays.
        if (t) { b.style.setProperty('--rot', ((hashStr(cc) % 9) - 4) * 0.7 + 'deg'); b.style.setProperty('--k', Math.min(nGot++, 14)); }
        const n = document.createElement('span'); n.className = 'st-name'; n.textContent = countryName(cc);
        const d = document.createElement('span'); d.className = 'st-tier'; d.textContent = t ? `${t[2]} ${fmtInt(+p[cc])}` : (playable ? 'À découvrir' : 'À croiser en route');
        b.append(n, d);
        grid.appendChild(b);
      });
      sec.append(h, grid);
      list.appendChild(sec);
    });
    $('passport').scrollTop = 0;
  }

  // Entre amis : dès qu'un voyageur valide l'étape sur laquelle tu es, il te reste 20 secondes.
  const PRESS = 20;
  function pressure(name) {
    if (!S || S.kind !== 'room' || Q || $('play').hidden) return;
    const r = cur();
    if (r.pressed) return;
    r.pressed = true;
    if (timerId && (timerEnd - Date.now()) / 1000 <= PRESS) return;   // le chrono en cours est déjà plus court
    const chip = $('pressChip');
    chip.hidden = false; chip.textContent = ''; chip.append(icoEl('i-chrono'), `${name} a validé : ${PRESS} s pour répondre`);
    $('hudTimeCell').hidden = false;
    stopTimer(); timerOn = false;
    startTimer(PRESS, submit);
    Snd.tick();
  }
  Room.onLive = (m) => {
    if (!m || typeof m.id !== 'string' || m.id === myId) return;
    if (m.t === 'g' && Array.isArray(m.g) && S && S.kind === 'room' && m.g.length === S.idx + 1) pressure(cleanName(m.n) || 'Un voyageur');
    // Un ami donne le départ : ceux qui attendent dans le salon partent avec lui.
    if (m.t === 's' && !$('lobby').hidden && !$('lbIn').hidden && !myRoomSteps()) launch(cleanName(m.n) || 'Un ami');
    // Un ami repart après la même étape : on le suit au bout de quelques secondes, pour rester ensemble.
    if (m.t === 'n' && m.i === (S && S.idx) && S.kind === 'room' && !$('result').hidden && !$('roundPanel').hidden) autoNext(cleanName(m.n) || 'Un ami');
  };
  const myRoomSteps = () => { const p = Room.players.get(myId); return p ? p.g.length : 0; };

  /* ---------- Accueil ---------- */
  const selected = (name) => document.querySelector(`input[name="${name}"]:checked`).value;
  const bestOf = (zone, mode) => store.get(`best.${zone}.${mode}`, mode === 'classique' ? store.get('best.' + zone, 0) : 0);

  function refreshHome() {
    const mode = selected('mode');
    const fr = document.querySelector('input[name="zone"][value="france"]');
    fr.disabled = mode === 'serie';
    if (fr.disabled && fr.checked) document.querySelector('input[name="zone"][value="monde"]').checked = true;
    const zk = selected('zone'), z = Z(zk);
    $('modeDesc').textContent = MODES[mode].desc;
    const pool = LOCS.filter((l) => z.has(l));
    const nCountries = new Set(pool.map((l) => l[4])).size;
    $('poolLine').textContent = zk === 'france' ? `${fmtInt(pool.length)} lieux à travers la France` : `${fmtInt(pool.length)} lieux dans ${nCountries} pays`;
    if (mode === 'serie') { const b = store.get('serie.' + zk, 0); $('bestLine').textContent = b ? `Ta meilleure série : ${b}` : ''; }
    else { const b = bestOf(zk, mode); $('bestLine').textContent = b ? `Ton record : ${fmtInt(b)} / ${fmtInt(ROUNDS * MAX)}` : ''; }
    $('startBtn').disabled = pool.length < ROUNDS;
    const d = store.get('daily', null), played = !!(d && d.d === today()), now = new Date();
    $('dailyDay').textContent = now.getDate();
    $('dailyMonth').textContent = now.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '');
    $('dailySub').textContent = played ? `${fmtInt(d.score)} pts` : 'À faire';
    $('dailyBtn').classList.toggle('done', played);
    renderLevel($('homeLevel'));
    const ps = passStats();
    $('passSub').textContent = `${ps.done} / ${ps.total} pays`;
  }
  function goHome() {
    stopAll(); stopCount();
    Room.close();
    S = null; Q = null;
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    $('play').classList.remove('serie');
    show('home');
    refreshHome();
    if (homeMap) { homeMap.invalidateSize(); homeMap.fire('moveend'); } else initHomeMap();
  }
  function savePrefs() { store.set('prefs', { zone: selected('zone'), time: selected('time'), mode: selected('mode') }); }

  /* ---------- Lancement d'un trajet ---------- */
  function makeGame(kind, zone, mode, limit, g, seed) {
    const hr = seed ? mulberry32(hashStr(seed + ':cap')) : Math.random;
    return {
      kind, zone, mode, limit, seed, idx: 0, score: 0, usedP: g.usedP, usedC: g.usedC, baseP: new Set(g.usedP), baseC: new Set(g.usedC),
      rounds: g.locs.map((loc) => ({ loc, guess: null, km: null, pts: 0, hint: 0, swaps: 0, flashed: false, heading: Math.floor(hr() * 360) })),
    };
  }
  let backGuard = false;
  function guardBack() { if (!backGuard) { backGuard = true; try { history.pushState({ pdc: 1 }, ''); } catch (e) { backGuard = false; } } }
  window.addEventListener('popstate', () => {
    if (!backGuard) return;
    backGuard = false;
    const playing = !$('play').hidden || (!$('result').hidden && S && !S.done);
    if (playing) {
      guardBack();
      if (!$('play').hidden) { armQuit(4000); setTools(true); }
    } else if ($('home').hidden) goHome();
  });
  function beginPlay() {
    Q = null;
    guardBack();
    $('play').classList.remove('serie');
    show('play');
    if (!gmap) initGuessMap();
    Snd.start();
    startRound();
  }
  function startSolo(zone, mode, limit) {
    S = makeGame('solo', zone, mode, limit, pickGame(zone, Math.random, true), null);
    beginPlay();
  }
  function startFromHome() {
    savePrefs();
    const mode = selected('mode');
    if (mode === 'serie') startSerie(selected('zone'), +selected('time'));
    else startSolo(selected('zone'), mode, +selected('time'));
  }
  function startDaily() {
    const day = today(), seed = 'jour-' + day;
    S = makeGame('daily', 'monde', 'classique', 0, pickGame('monde', mulberry32(hashStr(seed)), false), seed);
    S.day = day;
    beginPlay();
  }

  /* ---------- Étape ---------- */
  const HINTS = {
    cont: { label: 'continent', f: 0.8, cost: '−20 %', text: (l) => CONT[contOf(l)] },
    pays: { label: 'pays', f: 0.5, cost: '−50 %', text: (l) => countryName(l[4]) },
    quart: { label: 'quart du pays', f: 0.7, cost: '−30 %', text: (l) => (l[0] > 46.6 ? 'Nord' : 'Sud') + '-' + (l[1] > 2.4 ? 'Est' : 'Ouest') },
  };
  const hintFactor = (r) => (r.hint ? HINTS[Z(S.zone).hints[r.hint - 1]].f : 1);
  function renderHint() {
    const r = cur(), lv = Z(S.zone).hints, btn = $('hintBtn'), chip = $('hintChip');
    if (r.hint < lv.length) { const h = HINTS[lv[r.hint]]; btn.hidden = false; $('hintTag').textContent = `${h.label} ${h.cost}`; }
    else btn.hidden = true;
    chip.hidden = !r.hint;
    if (r.hint) {
      chip.textContent = '';
      const b = document.createElement('b');
      b.textContent = lv.slice(0, r.hint).map((k) => HINTS[k].text(r.loc)).join(' · ');
      chip.append(icoEl('i-p-indice'), 'Indice : ', b);
    }
  }

  function setSheet(open) {
    $('guess').classList.toggle('open', open);
    $('play').classList.toggle('sheet', open);
    $('mapToggle').setAttribute('aria-expanded', open);
  }

  // Petites aides d'affichage de l'écran du trajet
  function icoEl(id) {
    const NS = 'http://www.w3.org/2000/svg', s = document.createElementNS(NS, 'svg'), u = document.createElementNS(NS, 'use');
    s.setAttribute('class', 'ico'); s.setAttribute('aria-hidden', 'true'); u.setAttribute('href', '#' + id);
    s.appendChild(u);
    return s;
  }
  function setT(btn, txt) { btn.querySelector('.t').textContent = txt; }   // libellé d'un bouton à pictogramme
  // Menu des outils (téléphone)
  function setTools(open) {
    open = !!open && compact.matches;
    $('play').classList.toggle('tools-open', open);
    $('toolsScrim').hidden = !open;
    $('toolsBtn').setAttribute('aria-expanded', open);
  }
  // Annonce de début d'étape : un panneau passe sur la vue, une seule fois par étape.
  let cueT, cueFor = null;
  function roundCue(key, kicker, title) {
    if (cueFor === key) return;
    cueFor = key;
    const el = $('roundCue');
    $('cueKicker').textContent = kicker; $('cueTitle').textContent = title;
    el.hidden = true; void el.offsetWidth; el.hidden = false;
    clearTimeout(cueT); cueT = setTimeout(() => { el.hidden = true; }, 1700);
  }

  function startRound() {
    const r = cur();
    renderMates();
    stopTimer(); stopFlash(); timerOn = false;
    $('hudLab1').textContent = 'Étape'; $('hudLab2').textContent = 'Points';
    $('hudRound').textContent = `${S.idx + 1}/${ROUNDS}`;
    $('hudScore').textContent = fmtInt(S.score);
    $('hudTimeCell').hidden = !S.limit;
    $('hudTimeCell').classList.remove('low');
    $('hudTimeCell').style.setProperty('--left', 1);
    if (S.limit) $('hudTime').textContent = fmtTime(S.limit);
    const pips = $('hudPips');
    pips.hidden = false;
    [...pips.children].forEach((el, i) => { el.className = i < S.idx ? 'on' : i === S.idx ? 'now' : ''; });
    const last = S.idx === ROUNDS - 1, roundTxt = `Étape ${S.idx + 1}/${ROUNDS}`;
    $('loadKicker').textContent = roundTxt; $('loadKicker').hidden = false;
    $('roundCue').hidden = true;
    $('play').classList.remove('is-dark');
    setTools(false);
    $('pressChip').hidden = true;
    $('quiz').hidden = true; $('quizOver').hidden = true;
    $('guess').hidden = false; $('mapToggle').hidden = false;
    $('resetBtn').hidden = S.mode !== 'classique';
    $('swapBtn').hidden = r.swaps >= MAX_SWAPS;
    renderHint();
    // Mode carte postale : un voile transparent empêche de bouger.
    const blk = $('svBlock');
    blk.className = S.mode === 'postale' ? 'shield' : '';
    blk.hidden = S.mode !== 'postale';
    $('svBlockMsg').textContent = '';
    // Mini-carte remise à zéro
    if (gmarker) { gmarker.remove(); gmarker = null; }
    $('guess').classList.remove('open', 'has-pin', 'stay');
    setSheet(false);
    const b = $('guessBtn');
    b.disabled = true; b.textContent = 'Place ton point sur la carte';
    gmap.invalidateSize({ animate: false });
    fitZone();
    disarmQuit();
    loadStreetView(r.loc, r.heading, () => {
      roundCue(r, last ? 'Dernière étape' : roundTxt, S.mode === 'eclair' ? 'Regarde bien !' : 'Où es-tu ?');
      startTimer(S.limit, submit);
      if (S.mode === 'eclair') startFlash();
    });
  }

  function loadStreetView(loc, heading, onReady) {
    const wrap = $('svWrap'), loading = $('svLoading');
    const token = ++loadToken;
    view = { loc, heading, onReady };
    loading.classList.remove('off');
    wrap.innerHTML = '';
    const f = document.createElement('iframe');
    f.title = 'Vue de rue';
    f.tabIndex = -1;
    if (S && !Q && S.mode === 'postale') f.setAttribute('inert', '');
    f.allow = 'fullscreen';   // surtout pas les capteurs de mouvement : sur téléphone la vue tournerait toute seule
    const done = () => {
      if (token !== loadToken) return;
      loading.classList.add('off');
      if (onReady) onReady();
    };
    f.addEventListener('load', () => setTimeout(done, 1100));
    setTimeout(done, 7000);
    f.src = svUrl(loc, heading);
    wrap.appendChild(f);
  }

  function startTimer(sec, onEnd) {
    if (!sec || timerOn) return;
    timerOn = true;
    const end = (timerEnd = Date.now() + sec * 1000);
    let lastTick = 99;
    clearInterval(timerId);
    $('hudTimeCell').style.setProperty('--left', 1);
    timerId = setInterval(() => {
      const left = (end - Date.now()) / 1000, s = Math.ceil(left);
      $('hudTime').textContent = fmtTime(left);
      $('hudTimeCell').classList.toggle('low', left <= 10);
      $('hudTimeCell').style.setProperty('--left', Math.max(0, left / sec).toFixed(3));
      if (s <= 10 && s > 0 && s < lastTick) { lastTick = s; Snd.tick(); }
      if (left <= 0) { stopTimer(); onEnd(); }
    }, 200);
  }
  function stopTimer() { clearInterval(timerId); timerId = null; }

  // Mode Éclair : compte à rebours, puis la vue disparaît.
  function startFlash() {
    const r = cur();
    if (r.flashed) return;
    r.flashed = true;
    let left = FLASH;
    const el = $('flash'), tx = document.createElement('span');
    el.textContent = ''; el.append(icoEl('i-eclair'), tx);
    el.style.setProperty('--flash', FLASH + 's'); el.classList.remove('low');
    el.hidden = false; tx.textContent = `Regarde bien : ${left} s`;
    flashId = setInterval(() => {
      left--;
      if (left <= 0) { stopFlash(); blackout(); return; }
      tx.textContent = `Regarde bien : ${left} s`;
      el.classList.toggle('low', left <= 5);
      if (left <= 3) Snd.tick();
    }, 1000);
  }
  function stopFlash() { clearInterval(flashId); flashId = null; $('flash').hidden = true; }
  function blackout() {
    loadToken++;
    $('svWrap').innerHTML = '';
    $('svLoading').classList.add('off');
    const blk = $('svBlock');
    blk.hidden = false; blk.className = 'blackout';
    $('svBlockMsg').textContent = 'La vue a disparu. À toi de placer ton point.';
    $('swapBtn').hidden = true;
    $('guess').classList.add('stay');
    $('play').classList.add('is-dark');
    if (compact.matches) setSheet(true);
  }

  const MAX_SWAPS = 2;
  function swapLocation() {
    if (Q) { if (!Q.answered) nextQuestion(); return; }
    const r = cur();
    if (r.swaps >= MAX_SWAPS) return;
    const loc = S.seed ? altLoc(S.idx, r.swaps + 1) : pickOne(S.zone, S.usedP, S.usedC, Math.random, true);
    if (!loc) return;
    stopTimer(); stopFlash();
    r.swaps++;
    if (!S.seed) S.usedP.add(loc[2]);
    r.loc = loc; r.flashed = false; r.hint = 0; r.pressed = false;
    startRound();
  }
  // En trajet partagée (amis, défi du jour), le lieu de remplacement ne dépend que de l'étape et du nombre de changements :
  // il est donc le même pour tous, et on le retrouve après un rechargement.
  function altLoc(idx, swaps) {
    return pickOne(S.zone, S.baseP, S.baseC, mulberry32(hashStr(`${S.seed}:alt:${idx}:${swaps}`)), false);
  }

  function myResults() {
    return S.rounds.slice(0, S.idx + 1).map((r) => (r.guess ? [+r.guess[0].toFixed(5), +r.guess[1].toFixed(5), +r.km.toFixed(2), r.pts, r.swaps || 0] : 0));
  }

  function submit() {
    if (!S || Q || $('play').hidden) return;
    const r = cur();
    stopTimer(); stopFlash(); loadToken++;
    if (gmarker) {
      const ll = gmarker.getLatLng();
      r.guess = [ll.lat, wrapLng(ll.lng)];
      r.km = haversine([r.loc[0], r.loc[1]], r.guess);
      r.pts = Math.round(points(r.km, Z(S.zone).k) * hintFactor(r));
    } else { r.guess = null; r.km = null; r.pts = 0; }
    S.score += r.pts;
    r.stamp = r.guess ? stamp(r.loc[4], r.pts) : null;
    markRecent(r.loc[2]);
    $('svWrap').innerHTML = '';
    if (S.kind === 'room' && Room.cfg) {
      const g = myResults();
      store.set('room.' + Room.cfg.id, g);
      Room.send({ t: 'g', g });
    }
    if (r.pts >= 4000) { Snd.good(); if (r.pts >= 4500) confetti(); } else if (r.pts >= 1500) Snd.mid(); else Snd.bad();
    showRound();
  }

  /* ---------- Résultat d'une étape ---------- */
  // Palier d'une étape (0 = sans réponse … 4 = 4 500 points et plus) : mêmes seuils que les carrés du résultat partagé.
  const gradeOf = (r) => (!r.guess ? 0 : r.pts >= 4500 ? 4 : r.pts >= 3000 ? 3 : r.pts >= 1500 ? 2 : 1);
  const VERDICTS = ['Temps écoulé', 'Mauvaise route', 'Sur la bonne voie', 'Bien vu', 'Tout près'];
  // Mise en scène : tout ce qui est lancé pour un écran de résultat s'arrête dès qu'un autre le remplace.
  let revealId = 0;
  function tween(ms, wait, fn) {
    const id = revealId, t0 = performance.now() + wait;
    (function step(now) {
      if (id !== revealId) return;
      const t = clamp((now - t0) / ms, 0, 1);
      if (now >= t0) fn(t);
      if (t < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  function later(ms, fn) { const id = revealId; setTimeout(() => { if (id === revealId) fn(); }, ms); }

  // Le trajet entre ton point et le vrai lieu est dessiné comme une route : chaussée sombre, ligne jaune discontinue.
  const ROAD = { color: '#0e1b2c', weight: 6, lineCap: 'round', lineJoin: 'round', interactive: false };
  const ROAD_MARK = { color: '#ffd60a', weight: 2, dashArray: '7 9', lineCap: 'butt', interactive: false };
  // reveal = { wait, ms } : la route se trace depuis ton point, puis la borne tombe sur le vrai lieu.
  function drawRound(r, n, layer, reveal) {
    const t = [r.loc[0], r.loc[1]];
    const out = [t];
    const mk = L.marker(t, { icon: iconTrue(n), keyboard: false, zIndexOffset: 500 }).addTo(layer);
    let drop = n ? (n - 1) * 90 : 0;   // carte finale : les cinq bornes tombent l'une après l'autre
    if (r.guess) {
      const path = arc(t, r.guess);
      const lines = [L.polyline(path, ROAD).addTo(layer), L.polyline(path, ROAD_MARK).addTo(layer)];
      L.marker(path[path.length - 1], { icon: iconGuess, keyboard: false, zIndexOffset: 300 }).addTo(layer);
      path.forEach((p) => out.push(p));
      if (reveal && reveal.ms) {
        const back = path.slice().reverse(), last = back.length - 1;
        lines.forEach((l) => l.setLatLngs([back[0]]));
        tween(reveal.ms, reveal.wait, (u) => {
          const k = (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2) * last, i = Math.floor(k), f = k - i;
          const part = back.slice(0, i + 1);
          if (i < last) part.push([back[i][0] + (back[i + 1][0] - back[i][0]) * f, back[i][1] + (back[i + 1][1] - back[i][1]) * f]);
          lines.forEach((l) => l.setLatLngs(part));
        });
      }
    }
    if (reveal) drop = reveal.wait + reveal.ms;
    const el = mk.getElement();
    if (el && el.firstChild) el.firstChild.style.setProperty('--d', drop + 'ms');
    return out;
  }
  function drawOther(p, v, loc, layer) {
    const path = arc([loc[0], loc[1]], [v[0], v[1]]), col = colorOf(p.id);
    L.polyline(path, { color: '#fff', weight: 5, opacity: 0.7, interactive: false }).addTo(layer);
    L.polyline(path, { color: col, weight: 2.5, opacity: 0.9, interactive: false }).addTo(layer);
    L.marker(path[path.length - 1], { icon: iconOther(p.name, col), keyboard: false, title: p.name }).addTo(layer);
    return path;
  }
  // Cadre les points dans la zone de la carte que la fiche laisse libre : à sa gauche si elle est sur le côté, au-dessus si elle est en bas.
  let lastFit = null, fitting = false, refitT;
  function fit(pts, panel) {
    rmap.invalidateSize({ animate: false });
    let b = L.latLngBounds(pts);
    if (pts.length === 1) b = L.latLngBounds([[pts[0][0] - 4, pts[0][1] - 6], [pts[0][0] + 4, pts[0][1] + 6]]);
    const sz = rmap.getSize(), side = panel.offsetLeft * sz.y > panel.offsetTop * sz.x;   // où reste-t-il le plus de carte : à gauche ou au-dessus ?
    const padR = side ? Math.min(sz.x - panel.offsetLeft, sz.x * 0.7) : 0, padB = side ? 0 : Math.min(sz.y - panel.offsetTop, sz.y * 0.7);
    fitting = true;
    rmap.fitBounds(b, { paddingTopLeft: [side ? 60 : 36, side ? 48 : 58], paddingBottomRight: [padR + 36, padB + (side ? 40 : 30)], maxZoom: 11, animate: false });
    fitting = false;
    lastFit = { pts, panel, moved: false };
  }
  // On recadre quand l'écran tourne ou change de taille, et quand la fiche change de hauteur (tant que le voyageur n'a pas déplacé la carte lui-même).
  function refit(force) {
    clearTimeout(refitT);
    refitT = setTimeout(() => {
      if (!rmap || !lastFit || $('result').hidden || lastFit.panel.hidden || (lastFit.moved && !force)) return;
      fit(lastFit.pts, lastFit.panel);
    }, 120);
  }
  window.addEventListener('resize', () => {
    if (!$('fpFold').offsetParent) setFold(false);   // la fiche n'est plus en bas : plus rien à replier
    refit(true);
  });
  if (window.ResizeObserver) { const ro = new ResizeObserver(() => refit(false)); ro.observe($('roundPanel')); ro.observe($('finalPanel')); }
  // Téléphone : la fiche de fin de trajet se replie pour laisser voir la carte.
  function setFold(folded) {
    const p = $('finalPanel'), b = $('fpFold');
    if (p.classList.contains('folded') === folded) return;
    p.classList.toggle('folded', folded);
    if (folded) p.classList.add('still');   // une fois repliée, la fiche ne relance plus ses entrées en scène
    b.setAttribute('aria-expanded', String(!folded));
    b.setAttribute('aria-label', folded ? 'Afficher le détail du trajet' : 'Réduire le détail pour voir la carte');
    if (lastFit && lastFit.panel === p && !p.hidden) fit(lastFit.pts, p);
  }
  $('fpFold').addEventListener('click', () => setFold(!$('finalPanel').classList.contains('folded')));
  const placeText = (loc) => `${loc[3]}, ${countryName(loc[4])}`;
  const others = () => (Room.cfg ? [...Room.players.values()].filter((p) => p.id !== myId) : []);
  // Pendant l'étape : une pastille par ami, cochée quand il a validé, pâle s'il n'est pas sur cette étape.
  function renderMates() {
    const ul = $('mates'), os = S && S.kind === 'room' && !Q && !$('play').hidden ? others() : [];
    ul.hidden = !os.length;
    if (ul.hidden) return;
    ul.textContent = '';
    os.slice().sort((a, b) => b.g.length - a.g.length).slice(0, 6).forEach((p) => {
      const li = document.createElement('li'), done = p.g.length > S.idx, here = p.g.length === S.idx;
      li.className = done ? 'done' : here ? '' : 'away';
      li.style.background = colorOf(p.id);
      li.textContent = (p.name || '?').slice(0, 1);
      li.title = `${p.name} : ${done ? 'a validé cette étape' : here ? 'cherche encore' : p.g.length ? 'sur une étape précédente' : 'pas encore parti'}`;
      ul.appendChild(li);
    });
    if (os.length > 6) { const li = document.createElement('li'); li.className = 'more'; li.textContent = '+' + (os.length - 6); ul.appendChild(li); }
  }
  // Après une étape : si un ami repart, on le suit au bout de 5 secondes (sauf si on explore la carte).
  let autoT = null;
  function stopAuto() { clearInterval(autoT); autoT = null; $('rpAuto').hidden = true; }
  function holdAuto() { if (!autoT) return; clearInterval(autoT); autoT = null; $('rpAuto').textContent = 'Tes amis sont repartis. Rejoins-les quand tu veux.'; }
  function autoNext(name) {
    if (autoT) return;
    let n = 6;
    const note = $('rpAuto');
    note.hidden = false;
    const tick = () => { if (--n <= 0) { stopAuto(); inputLock = 0; next(); return; } note.textContent = `${name} repart : départ dans ${n} s`; };
    tick(); autoT = setInterval(tick, 1000);
  }
  function row(cells, cls) {
    const li = document.createElement('li');
    if (cls) li.className = cls;
    cells.forEach(([c, t, color]) => {
      const s = document.createElement('span'); s.className = c;
      if (color) s.style.background = color; else s.textContent = t;
      li.appendChild(s);
    });
    return li;
  }

  // Les réponses des amis sur cette étape (seulement après avoir donné la sienne).
  // La carte cadre ma route et leurs points ; elle n'est pas recadrée si le voyageur l'a déplacée entre-temps.
  let roundPts = [];
  function renderRoundFriends(first) {
    const r = cur(), ul = $('rpFriends'), os = others(), seen = [];
    const frame = () => { if (first === true || (lastFit && !lastFit.moved && seen.length)) fit(roundPts.concat(seen), $('roundPanel')); };
    olayer.clearLayers();
    ul.hidden = S.kind !== 'room' || !os.length;
    $('rpRankLab').hidden = ul.hidden;
    if (ul.hidden) { frame(); return; }
    const sum = (g) => g.slice(0, S.idx + 1).reduce((a, v) => a + (v ? v[3] : 0), 0);
    const rows = [{ me: true, name: (getName() || 'Toi') + ' (toi)', id: myId, v: r.guess ? [0, 0, r.km, r.pts] : 0, played: true, total: S.score }];
    os.forEach((p) => {
      const played = p.g.length > S.idx, v = played ? p.g[S.idx] : null;
      if (v && (v[4] || 0) === (r.swaps || 0)) drawOther(p, v, r.loc, olayer).forEach((x) => seen.push(x));
      rows.push({ name: p.name, id: p.id, v, played, total: sum(p.g) });
    });
    // Classement général après cette étape : distance et points de l'étape, puis total.
    rows.sort((a, b) => (b.played - a.played) || (b.total - a.total));
    $('rpRankLab').textContent = `Classement après l'étape ${S.idx + 1}`;
    ul.innerHTML = '';
    rows.forEach((x) => {
      const li = row([
        ['dot', '', colorOf(x.id)], ['w', x.name],
        ['d', !x.played ? 'pas encore arrivé' : x.v ? fmtDist(x.v[2]) : 'sans réponse'],
        ['p', x.played ? '+' + fmtInt(x.v ? x.v[3] : 0) : ''],
        ['t', x.played ? fmtInt(x.total) : ''],
      ], (x.me ? 'me ' : '') + (x.played ? '' : 'wait'));
      li.querySelector('.dot').textContent = (x.name || '?').slice(0, 1);   // même pastille que sur la carte
      ul.appendChild(li);
    });
    frame();
  }

  function showRound() {
    const r = cur(), last = S.idx === ROUNDS - 1, panel = $('roundPanel');
    show('result');
    stopAuto();
    panel.hidden = false; $('finalPanel').hidden = true;
    if (!rmap) initResultMap();
    rlayer.clearLayers(); olayer.clearLayers();
    revealId++;

    // Déroulé : la route se trace (la distance défile), la borne tombe et le lieu s'affiche (t1),
    // les points montent avec la jauge, puis le verdict et les petits événements (t2). Sans animation : tout est là d'emblée.
    const anim = !reduceMotion, far = !!r.guess && r.km > 0.25;
    const lineMs = anim && far ? 700 : 0, t0 = anim ? 320 : 0;
    const t1 = t0 + lineMs, t2 = anim ? t1 + (r.pts ? 820 : 200) : 0;
    const g = gradeOf(r);
    panel.className = `panel t-${g}` + (r.pts === MAX ? ' bull' : '');
    panel.style.setProperty('--d1', t1 + 'ms'); panel.style.setProperty('--d2', t2 + 'ms');

    $('rpKicker').textContent = `Étape ${S.idx + 1} sur ${ROUNDS}`;
    const steps = $('rpSteps');
    steps.textContent = '';
    S.rounds.forEach((x, i) => {
      const li = document.createElement('li');
      if (i <= S.idx) li.className = (i < S.idx ? 'done' : 'now') + ' t-' + gradeOf(x);
      steps.appendChild(li);
    });
    $('borneTxt').textContent = r.loc[4];
    $('rpVerdict').textContent = r.pts === MAX ? 'Dans le mille' : VERDICTS[g];
    const dist = $('rpDist'), away = (km) => `À ${fmtDist(km)}`.replace(/ /g, '\u00a0');   // insécable : la distance tient sur une ligne
    dist.textContent = r.guess ? (far ? away(r.km) : 'En plein dessus') : 'Pas de réponse';
    if (lineMs) tween(lineMs, t0, (u) => { dist.textContent = away(r.km * (1 - Math.pow(1 - u, 3))); });
    const place = $('rpPlace');
    place.textContent = r.loc[5] === 'l' ? 'C\'était : ' : r.loc[5] === 'c' ? 'Tu étais à ' : 'Tu étais près de ';
    const strong = document.createElement('strong'); strong.textContent = r.loc[3];
    place.append(strong, `, ${countryName(r.loc[4])}.`);
    const st = $('rpStamp');
    st.hidden = !r.stamp;
    st.className = 'note event stampline' + (r.stamp ? ' ' + r.stamp[1] : '');
    if (r.stamp) {
      st.dataset.tag = r.stamp[2];
      const txt = document.createElement('span'), cn = document.createElement('strong');
      cn.textContent = countryName(r.loc[4]);
      txt.append(`Nouveau tampon ${r.stamp[2].toLowerCase()} dans ton passeport : `, cn);
      st.textContent = ''; st.appendChild(txt);
    }
    const note = $('rpNote');
    note.hidden = !r.hint || !r.guess;
    if (r.hint) {
      note.dataset.tag = HINTS[Z(S.zone).hints[r.hint - 1]].cost;
      note.textContent = `Indice utilisé : points × ${String(hintFactor(r)).replace('.', ',')}`;
    }
    $('rpLink').href = mapsUrl(r.loc);
    $('nextBtn').innerHTML = (last ? 'Voir le résultat' : 'Étape suivante') + ' <kbd>Espace</kbd>';
    $('rpBar').style.width = '0%';
    $('rpPts').textContent = '0';
    const tally = () => { countUp($('rpPts'), r.pts, 750); $('rpBar').style.width = (r.pts / MAX * 100) + '%'; };
    if (anim) later(t1 + 60, tally); else tally();

    roundPts = drawRound(r, 0, rlayer, anim ? { wait: t0, ms: lineMs } : null);
    renderRoundFriends(true);
  }

  function next() {
    if (!S || locked() || $('roundPanel').hidden) return;
    stopAuto();
    if (S.kind === 'room') Room.send({ t: 'n', i: S.idx });   // les amis encore sur ce résultat suivent
    if (S.idx < ROUNDS - 1) {
      S.idx++;
      show('play');
      startRound();
    } else showFinal(true);
  }

  /* ---------- Fin de trajet ---------- */
  const GRADES = [
    [0.9, 'Cartographe en chef'],
    [0.75, 'Grand voyageur'],
    [0.55, 'Routard confirmé'],
    [0.35, 'Touriste avec un bon guide'],
    [0.15, 'Un peu perdu'],
    [0, 'Complètement à l\'ouest'],
  ];
  let perRound = [];
  // Expérience gagnée : le gain en chiffres et, s'il y en a un, le passage de niveau mis en avant.
  function dressXp(el, x) {
    const up = x.after.lv > x.before.lv, g = el.querySelector('.lvl-gain');
    el.classList.toggle('lvl-up', up);
    if (!g) return;
    g.hidden = !x.gained;
    const b = document.createElement('b'); b.textContent = `+${fmtInt(x.gained)} exp.`;
    g.textContent = ''; g.appendChild(b);
    if (up) {
      const sep = document.createElement('i'), n = document.createElement('span');
      sep.textContent = ' · '; n.textContent = `Niveau ${x.after.lv} atteint : ${x.after.title}`;
      g.append(sep, n);
    }
  }

  function showFinal(fresh) {
    const max = ROUNDS * MAX;
    show('result');
    stopAuto();
    if (!rmap) initResultMap();
    $('roundPanel').hidden = true; $('finalPanel').hidden = false;
    inputLock = Date.now() + 700;
    S.done = true;
    revealId++;
    setFold(false);
    $('finalPanel').classList.remove('still');

    const label = S.kind === 'daily' ? 'Défi du jour' : `${Z(S.zone).label} · ${MODES[S.mode].label}`;
    $('fpKicker').textContent = `Trajet terminé · ${label}`;
    $('fpMax').textContent = `/ ${fmtInt(max)}`;
    countUp($('fpTotal'), S.score, 1200);
    $('fpGrade').textContent = GRADES.find((g) => S.score / max >= g[0])[1];
    const segs = $('fpSegs');
    segs.textContent = '';
    S.rounds.forEach((r, i) => {
      const seg = document.createElement('i'), f = document.createElement('b');
      seg.className = 't-' + gradeOf(r);
      seg.style.setProperty('--w', (r.pts / MAX * 100) + '%'); seg.style.setProperty('--k', i);
      seg.appendChild(f); segs.appendChild(seg);
    });

    let record = false;
    if (S.kind === 'daily') {
      const d = store.get('daily', null), had = d && d.d === S.day;
      if (!had) store.set('daily', { d: S.day, score: S.score });
      S.dayScore = had ? d.score : S.score;
      $('fpBest').textContent = had && fresh ? `Ton total du jour reste ${fmtInt(d.score)} : seul le premier trajet compte.` : 'Les mêmes lieux pour tout le monde aujourd\'hui. Compare avec tes amis.';
    } else {
      const key = `best.${S.zone}.${S.mode}`, best = bestOf(S.zone, S.mode);
      if (S.score > best) { store.set(key, S.score); record = best > 0; $('fpBest').textContent = best ? `Nouveau record. L'ancien était à ${fmtInt(best)}.` : 'Premier total enregistré dans ce mode.'; }
      else $('fpBest').textContent = `Ton record : ${fmtInt(best)}`;
    }
    $('fpBest').classList.toggle('rec', record);
    if (fresh) { if (record || S.score / max >= 0.75) { Snd.good(); confetti(); } else Snd.mid(); }
    if (fresh) { const x = addXp(S.score / 100); renderXp($('fpXp'), x); dressXp($('fpXp'), x); } else $('fpXp').hidden = true;

    const multi = S.kind === 'room';
    $('fpList').hidden = multi; $('fpBoardWrap').hidden = !multi;
    $('againBtn').hidden = S.kind === 'daily';
    $('againBtn').innerHTML = '<svg class="ico" aria-hidden="true"><use href="#i-r-replay"/></svg>' + (multi ? 'Revanche' : 'Repartir') + ' <kbd>Espace</kbd>';

    showMine();
    if (multi) renderBoard();
    else {
      const list = $('fpList');
      list.innerHTML = '';
      S.rounds.forEach((r, i) => {
        const li = document.createElement('li'), b = document.createElement('button');
        b.type = 'button'; b.title = 'Voir cette étape sur la carte';
        b.setAttribute('aria-pressed', 'false');
        li.className = 't-' + gradeOf(r); li.style.setProperty('--i', i);
        [['n', i + 1], ['w', placeText(r.loc)], ['d', r.guess ? fmtDist(r.km) : 'sans réponse'], ['p', fmtInt(r.pts)]].forEach(([c, t]) => {
          const s = document.createElement('span'); s.className = c; s.textContent = t; b.appendChild(s);
        });
        // Un clic cadre l'étape ; un second clic sur la même ligne revient aux cinq étapes.
        b.addEventListener('click', () => {
          const on = !b.classList.contains('on');
          list.querySelectorAll('button').forEach((o) => { o.classList.remove('on'); o.setAttribute('aria-pressed', 'false'); });
          b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on));
          if ($('fpFold').offsetParent) setFold(on);   // téléphone : la fiche se replie sur l'étape choisie, la carte prend la place
          fit(on ? perRound[i] : [].concat(...perRound), $('finalPanel'));
        });
        li.appendChild(b); list.appendChild(li);
      });
    }
    renderInvite();
  }

  // Carte finale : mes 5 étapes.
  function showMine() {
    rlayer.clearLayers(); olayer.clearLayers();
    const all = []; perRound = [];
    S.rounds.forEach((r, i) => { const p = drawRound(r, i + 1, rlayer); perRound.push(p); p.forEach((x) => all.push(x)); });
    fit(all, $('finalPanel'));
    S.shown = myId;
  }
  // Carte finale : les réponses d'un ami.
  function showPlayer(p) {
    rlayer.clearLayers(); olayer.clearLayers();
    const all = [];
    S.rounds.forEach((r, i) => {
      const t = [r.loc[0], r.loc[1]];
      L.marker(t, { icon: iconTrue(i + 1), keyboard: false, zIndexOffset: 500 }).addTo(rlayer);
      all.push(t);
      if (p.g[i] && (p.g[i][4] || 0) === (r.swaps || 0)) drawOther(p, p.g[i], r.loc, olayer).forEach((x) => all.push(x));
    });
    fit(all, $('finalPanel'));
    S.shown = p.id;
  }

  function renderBoard() {
    const ol = $('fpBoard');
    const me = { id: myId, name: (getName() || 'Toi') + ' (toi)', total: S.score, n: ROUNDS, me: true };
    const rows = [me].concat(others().map((p) => ({ id: p.id, name: p.name, total: Room.total(p), n: p.g.length, p })));
    rows.sort((a, b) => b.total - a.total);
    ol.innerHTML = '';
    rows.forEach((x, i) => {
      const li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button'; b.title = 'Voir ses réponses sur la carte';
      // Mon rang en jaune ; « live » = encore en route, « idle » = pas encore parti.
      li.className = (x.me ? 'me ' : '') + (i === 0 && x.total > 0 ? 'first ' : '') + (x.n >= ROUNDS ? '' : x.n ? 'live' : 'idle');
      if (S.shown === x.id) b.className = 'on';
      b.setAttribute('aria-pressed', String(S.shown === x.id));
      [['n', i + 1], ['dot', '', colorOf(x.id)], ['w', x.name], ['d', x.n >= ROUNDS ? 'a fini' : x.n ? `${x.n}/${ROUNDS} étapes` : 'pas encore parti'], ['p', fmtInt(x.total)]].forEach(([c, t, color]) => {
        const s = document.createElement('span'); s.className = c;
        if (color) { s.style.background = color; s.textContent = (x.name || '?').slice(0, 1); } else s.textContent = t;
        b.appendChild(s);
      });
      b.addEventListener('click', () => { if (x.me) showMine(); else showPlayer(x.p); renderBoard(); });
      li.appendChild(b); ol.appendChild(li);
    });
    $('fpBoardWrap').classList.toggle('online', Room.online);
    const act = rows.filter((x) => x.n > 0), pend = act.filter((x) => x.n < ROUNDS);
    const tie = act.length > 1 && act[0].total === act[1].total;
    let note = '';
    if (rows.length === 1) note = 'Personne d\'autre n\'est encore parti. Le classement se mettra à jour ici tout seul.';
    else if (pend.length) note = `Encore en route : ${pend.map((x) => `${x.name} (${x.n}/${ROUNDS})`).join(', ')}.`;
    else if (act.length > 1) {
      note = tie ? 'Égalité en tête.' : act[0].me ? 'Tu gagnes ce trajet.' : `${act[0].name} gagne ce trajet.`;
      if (act[0].me && !tie && !S.won) { S.won = true; Snd.good(); confetti(); }
    }
    // En tête de fiche : mon rang, visible sans faire défiler.
    if (act.length > 1) {
      const rk = act.findIndex((x) => x.me) + 1;
      $('fpBest').textContent = `${rk}${rk === 1 ? 'er' : 'e'} sur ${act.length}${pend.length ? ' pour l\'instant.' : '. ' + note}`;
      $('fpBest').classList.toggle('rec', rk === 1 && !tie && !pend.length);
    }
    if (!Room.online) note = (note ? note + ' ' : '') + 'Connexion au classement en cours…';
    $('fpBoardNote').textContent = note;
  }
  function renderInvite() {
    const show = !!(S && S.kind === 'room' && Room.next);
    $('fpNext').hidden = !show;
    if (show) $('fpNextTxt').textContent = `${Room.next.name} lance une revanche.`;
  }

  function shareText() {
    const sq = S.rounds.map((r) => (r.pts >= 4500 ? '🟩' : r.pts >= 3000 ? '🟨' : r.pts >= 1500 ? '🟧' : '🟥')).join('');
    const dm = S.day ? S.day.split('-') : [];
    const head = S.kind === 'daily' ? `Défi du ${+dm[2]}/${+dm[1]}` : `${Z(S.zone).label} · ${MODES[S.mode].label}`;
    const url = S.kind === 'room' && Room.cfg ? roomUrl(Room.cfg) : pageUrl();
    const score = S.kind === 'daily' && S.dayScore != null ? S.dayScore : S.score;
    return `Point de chute · ${head}\n${fmtInt(score)} / ${fmtInt(ROUNDS * MAX)}\n${sq}\n${url}`;
  }

  /* ---------- Série de pays ---------- */
  function startSerie(zone, limit) {
    if (zone === 'france') zone = 'monde';
    S = null;
    Q = { zone, limit, streak: 0, used: new Set(), last: [], best: store.get('serie.' + zone, 0) };
    guardBack();
    $('play').classList.add('serie');
    show('play');
    Snd.start();
    $('guess').hidden = true; $('mapToggle').hidden = true;
    $('hintBtn').hidden = true; $('hintChip').hidden = true; $('flash').hidden = true;
    $('resetBtn').hidden = false; $('swapBtn').hidden = false;
    $('svBlock').hidden = true;
    $('play').classList.remove('sheet', 'is-dark');
    setTools(false);
    $('hudPips').hidden = true; $('roundCue').hidden = true;
    $('hudLab1').textContent = 'Série'; $('hudLab2').textContent = 'Record';
    $('hudTimeCell').hidden = !limit;
    disarmQuit();
    nextQuestion();
  }
  function sizeQuiz() { $('play').style.setProperty('--quiz-h', $('quiz').hidden ? '0px' : $('quiz').offsetHeight + 'px'); }
  window.addEventListener('resize', () => { if (Q && !$('play').hidden) sizeQuiz(); });
  function nextQuestion() {
    clearTimeout(quizT); stopTimer(); timerOn = false;
    const z = Z(Q.zone);
    let loc = pickOne(Q.zone, Q.used, new Set(Q.last), Math.random, true);
    if (!loc) { Q.used = new Set(); loc = pickOne(Q.zone, Q.used, new Set(Q.last), Math.random, false); }   // tous les lieux de la zone ont été vus : on repart
    Q.used.add(loc[2]); Q.loc = loc; Q.answered = false;
    Q.last = Q.last.concat(loc[4]).slice(-4);
    // Trois faux pays, de préférence sur le même continent : c'est là que ça devient dur.
    const all = [...new Set(LOCS.filter((l) => z.has(l)).map((l) => l[4]))].filter((c) => c !== loc[4]);
    const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const near = shuffle(all.filter((c) => CC2CONT[c] === CC2CONT[loc[4]])), far = shuffle(all.filter((c) => CC2CONT[c] !== CC2CONT[loc[4]]));
    const opts = shuffle([loc[4]].concat(near.concat(far).slice(0, 3)));
    const grid = $('quizGrid');
    grid.innerHTML = '';
    opts.forEach((cc, i) => {
      const b = document.createElement('button'), k = document.createElement('kbd');
      b.type = 'button'; b.className = 'btn'; b.dataset.cc = cc;
      k.textContent = String(i + 1);
      b.append(k, countryName(cc));
      b.addEventListener('click', () => answer(cc));
      grid.appendChild(b);
    });
    $('quiz').hidden = false; $('quizOver').hidden = true;
    $('resetBtn').hidden = false; $('swapBtn').hidden = false;
    renderStreak(false);
    sizeQuiz();
    $('hudRound').textContent = String(Q.streak);
    $('hudScore').textContent = String(Math.max(Q.best, Q.streak));
    $('hudTimeCell').classList.remove('low');
    $('hudTimeCell').style.setProperty('--left', 1);
    if (Q.limit) $('hudTime').textContent = fmtTime(Q.limit);
    $('loadKicker').textContent = Q.streak ? `Série : ${Q.streak}` : 'Série de pays'; $('loadKicker').hidden = false;
    loadStreetView(loc, Math.floor(Math.random() * 360), () => { roundCue(Q, 'Série de pays', 'Quel pays ?'); startTimer(Q.limit, () => answer(null)); });
  }
  // Série en cours, rappelée au-dessus des réponses
  function renderStreak(bump) {
    const el = $('quizStreak');
    el.textContent = ''; el.hidden = Q.streak < 2;
    if (Q.streak < 2) return;
    const n = document.createElement('span'), beaten = Q.best > 0 && Q.streak > Q.best;
    n.className = 'plate' + (beaten ? ' green' : '') + (bump ? ' bump' : '');
    n.textContent = String(Q.streak);
    el.append(n, beaten ? 'de suite, record battu' : 'de suite');
  }
  function answer(cc) {
    if (!Q || Q.answered) return;
    Q.answered = true;
    stopTimer();
    $('hudTimeCell').classList.remove('low');
    const ok = cc === Q.loc[4];
    $('quizGrid').querySelectorAll('button').forEach((b) => {
      b.disabled = true;
      if (b.dataset.cc === Q.loc[4]) b.classList.add('good');
      else if (b.dataset.cc === cc) b.classList.add('bad');
    });
    markRecent(Q.loc[2]);
    if (ok) {
      Q.streak++;
      Snd.mid();
      $('hudRound').textContent = String(Q.streak);
      $('hudScore').textContent = String(Math.max(Q.best, Q.streak));
      renderStreak(true); sizeQuiz();
      quizT = setTimeout(nextQuestion, 1100);
      return;
    }
    Snd.bad();
    const record = Q.streak > Q.best;
    if (record) store.set('serie.' + Q.zone, Q.streak);
    quizT = setTimeout(() => {
      loadToken++;
      $('svLoading').classList.add('off');
      $('quiz').hidden = true;
      $('qoStreak').textContent = String(Q.streak);
      $('qoUnit').textContent = Q.streak > 1 ? 'bonnes réponses de suite' : 'bonne réponse';
      const place = $('qoPlace');
      place.textContent = (cc ? 'Raté : c\'était ' : 'Temps écoulé : c\'était ');
      const strong = document.createElement('strong'); strong.textContent = countryName(Q.loc[4]);
      place.append(strong, Q.loc[5] === 'l' ? ` (${Q.loc[3]}).` : Q.loc[5] === 'c' ? `, à ${Q.loc[3]}.` : `, près de ${Q.loc[3]}.`);
      const x = addXp(Q.streak * 15);
      renderXp($('qoXp'), x); dressXp($('qoXp'), x);
      $('qoBest').textContent = record ? (Q.best ? `Nouveau record. L'ancien était à ${Q.best}.` : 'Premier record enregistré.') : `Ton record : ${Q.best}`;
      $('qoBest').classList.toggle('rec', record);
      $('quizOver').classList.toggle('rec', record);
      $('qoLink').href = mapsUrl(Q.loc);
      $('resetBtn').hidden = true; $('swapBtn').hidden = true;
      $('quizOver').hidden = false;
      sizeQuiz();
      if (record && Q.streak >= 3) { Snd.good(); confetti(); }
    }, 900);
  }

  /* ---------- Salon entre amis ---------- */
  function openLobby(cfg, autoJoin) {
    stopAll(); stopCount();
    S = null; Q = null;
    Room.open(cfg);
    lobbySeen = new Set();
    show('lobby');
    $('lbTitle').textContent = `${Z(cfg.zone).label}, mode ${MODES[cfg.mode].label.toLowerCase()}`;
    $('lbCode').textContent = fmtCode(cfg.code);
    $('lbLink').value = roomUrl(cfg);
    const name = getName();
    $('lbName').value = name;
    if (autoJoin && name) store.set('joined.' + cfg.id, true);
    const joined = !!(name && store.get('joined.' + cfg.id, false));
    const mine = store.get('room.' + cfg.id, null);
    if (joined) Room.send(Array.isArray(mine) && mine.length ? { t: 'g', g: mine } : { t: 'j' });
    setJoined(joined);
    renderLobby();
  }
  let lobbySeen = new Set();   // voyageurs déjà affichés dans ce salon (pour n'animer que les arrivées)
  function setJoined(j) { $('lbNameForm').hidden = j; $('lbIn').hidden = !j; if (!j && !compact.matches) setTimeout(() => $('lbName').focus(), 50); }
  function renderLobby() {
    if (!Room.cfg) return;
    const cfg = Room.cfg, ul = $('lbPlayers');
    ul.innerHTML = '';
    const ps = [...Room.players.values()].sort((a, b) => (b.id === myId) - (a.id === myId));
    ps.forEach((p) => {
      const st = p.g.length >= ROUNDS ? `a fini : ${fmtInt(Room.total(p))}` : p.g.length ? `${p.g.length}/${ROUNDS} étapes` : 'prêt';
      const li = row([['dot', '', colorOf(p.id)], ['w', p.name + (p.id === myId ? ' (toi)' : '')], ['st', st]], p.id === myId ? 'me' : '');
      const dot = li.querySelector('.dot');
      dot.style.borderColor = '#fff';
      dot.textContent = (p.name || '?').slice(0, 1);
      if (!lobbySeen.has(p.id)) { if (lobbySeen.size && p.id !== myId) Snd.pin(); lobbySeen.add(p.id); li.classList.add('new'); }
      ul.appendChild(li);
    });
    const mine = Room.players.get(myId), n = mine ? mine.g.length : 0;
    const os = ps.filter((p) => p.id !== myId), going = os.filter((p) => p.g.length);
    $('lbStart').textContent = n >= ROUNDS ? 'Voir le classement' : n ? 'Reprendre mon trajet' : going.length ? 'Rejoindre le trajet' : os.length ? 'Donner le départ' : 'Commencer';
    $('lbHint').textContent = n ? '' : going.length ? `${going[0].name} est déjà en route.` : os.length ? 'Le départ est donné à tous ceux qui sont là.' : 'Pars tout de suite, ou attends tes amis ici.';
    $('lbStatus').textContent = `5 étapes, ${fmtLimit(cfg.limit)}. ` + (Room.online ? 'Classement en direct connecté.' : 'Connexion au classement…');
    $('lbStatus').classList.toggle('on', Room.online);
  }
  function startRoomGame() {
    const cfg = Room.cfg;
    S = makeGame('room', cfg.zone, cfg.mode, cfg.limit, pickGame(cfg.zone, mulberry32(hashStr(cfg.id)), false), cfg.id);
    const mine = (Room.players.get(myId) || { g: [] }).g;
    mine.forEach((v, i) => {
      const r = S.rounds[i];
      if (v) {
        r.guess = [v[0], v[1]]; r.km = v[2]; r.pts = v[3];
        if (v[4]) { r.swaps = v[4]; r.loc = altLoc(i, v[4]); }
      }
      S.score += r.pts;
    });
    if (mine.length >= ROUNDS) { S.idx = ROUNDS - 1; showFinal(false); return; }
    S.idx = mine.length;
    beginPlay();
  }
  // « Commencer » donne aussi le départ aux amis qui attendent dans le salon : même compte à rebours pour tous.
  // (Seul dans le salon, ou pour reprendre un trajet commencé, on part tout de suite.)
  let countT = null;
  function stopCount() { clearInterval(countT); countT = null; $('lbCount').hidden = true; }
  function launch(by) {
    if (countT) return;
    let n = 3;
    const num = $('lbCountN');
    $('lbCountBy').textContent = by ? `${by} donne le départ` : 'Départ';
    $('lbCount').hidden = false;
    const tick = () => {
      if (n === 0) { stopCount(); if (!$('lobby').hidden && Room.cfg) startRoomGame(); return; }
      num.textContent = n--;
      num.classList.remove('pop'); void num.offsetWidth; num.classList.add('pop');
      Snd.tick();
    };
    tick(); countT = setInterval(tick, 800);
  }
  function startFromLobby() {
    if (countT) return;
    if (myRoomSteps()) { startRoomGame(); return; }
    Room.send({ t: 's' });
    if (others().length) launch(''); else startRoomGame();
  }
  function createRoom(zone, mode, limit, autoJoin) {
    const cfg = newRoom(zone, mode === 'serie' ? 'classique' : mode, limit);
    history.replaceState(null, '', '#p=' + linkOf(cfg));
    openLobby(cfg, autoJoin);
  }
  // Entre amis : on entre un code reçu, ou on en crée un avec les réglages de l'accueil.
  function openFriends() {
    savePrefs();
    const mode = selected('mode') === 'serie' ? 'classique' : selected('mode');
    $('frSummary').textContent = `${Z(selected('zone')).label}, mode ${MODES[mode].label.toLowerCase()}, ${fmtLimit(+selected('time'))}`;
    $('frNote').textContent = selected('mode') === 'serie' ? 'La série de pays se fait en solo : à plusieurs, ce sera le mode classique.' : 'Ce sont les réglages choisis à l\'accueil.';
    $('frCode').value = ''; $('frErr').textContent = '';
    show('friends');
    if (!compact.matches) setTimeout(() => $('frCode').focus(), 50);
  }
  let rematching = false;
  async function rematch() {
    const old = Room.cfg;
    if (rematching || !old) return;
    rematching = true;
    try {
      const cfg = newRoom(old.zone, old.mode, old.limit);
      await Promise.race([Room.send({ t: 'x', link: linkOf(cfg) }), sleep(1500)]);
      if (Room.cfg !== old) return;   // le voyageur est parti entre-temps (accueil, autre trajet)
      history.replaceState(null, '', '#p=' + linkOf(cfg));
      openLobby(cfg, true);
    } finally { rematching = false; }
  }
  function joinNext() {
    const cfg = Room.next && parseLink(Room.next.link);
    if (!cfg) return false;
    history.replaceState(null, '', '#p=' + linkOf(cfg));
    openLobby(cfg, true);
    return true;
  }
  function route() {
    const m = /^#p=(.+)$/.exec(location.hash), cfg = m && parseLink(m[1]);
    if (cfg && (!Room.cfg || Room.cfg.id !== cfg.id)) { openLobby(cfg, false); return true; }
    if (!cfg && !$('lobby').hidden) goHome();
    return false;
  }
  Room.onChange = () => {
    if (!$('lobby').hidden) renderLobby();
    else if (S && S.kind === 'room' && !$('play').hidden) renderMates();
    else if (S && S.kind === 'room' && !$('result').hidden) {
      if (!$('roundPanel').hidden) renderRoundFriends();
      else { renderBoard(); renderInvite(); }
    }
  };

  /* ---------- Quitter (deux clics) ---------- */
  let quitT;
  function disarmQuit() { clearTimeout(quitT); const q = $('quitBtn'); q.classList.remove('arm'); setT(q, 'Quitter'); }
  function armQuit(ms) { const q = $('quitBtn'); q.classList.add('arm'); setT(q, 'Quitter le trajet ?'); clearTimeout(quitT); quitT = setTimeout(disarmQuit, ms); }
  $('quitBtn').addEventListener('click', () => {
    const q = $('quitBtn');
    if (q.classList.contains('arm')) { disarmQuit(); setTools(false); goHome(); return; }
    armQuit(3000);
  });
  // Sur le résultat d'une étape, « Quitter » actionne ce même bouton (même confirmation en deux clics, mêmes effets) et recopie son état.
  $('rpQuit').addEventListener('click', () => $('quitBtn').click());
  new MutationObserver(() => {
    const q = $('quitBtn'), r = $('rpQuit');
    r.classList.toggle('arm', q.classList.contains('arm')); r.textContent = q.textContent;
  }).observe($('quitBtn'), { attributes: true, attributeFilter: ['class'], childList: true, characterData: true, subtree: true });

  /* ---------- Branchements ---------- */
  function again() {
    if (!S || locked()) return;
    if (S.kind === 'room' && Room.cfg) { if (!joinNext()) rematch(); }
    else if (S.kind !== 'daily') startSolo(S.zone, S.mode, S.limit);
  }
  const setSoundLabel = () => {
    const b = $('soundBtn');
    setT(b, Snd.on ? 'Son : oui' : 'Son : non');
    b.setAttribute('aria-pressed', Snd.on);
    b.querySelector('use').setAttribute('href', Snd.on ? '#i-p-son' : '#i-p-muet');
  };

  $('startBtn').addEventListener('click', startFromHome);
  $('dailyBtn').addEventListener('click', startDaily);
  $('friendsBtn').addEventListener('click', openFriends);
  $('frBack').addEventListener('click', goHome);
  $('frCreate').addEventListener('click', () => createRoom(selected('zone'), selected('mode'), +selected('time'), true));
  $('frCode').addEventListener('input', (e) => { e.target.value = fmtCode(cleanCode(e.target.value)); $('frErr').textContent = ''; });
  $('frJoinForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const cfg = parseCode($('frCode').value);
    if (!cfg) { $('frErr').textContent = cleanCode($('frCode').value).length < 6 ? 'Le code fait 6 caractères.' : 'Ce code n\'existe pas. Vérifie-le avec la personne qui t\'invite.'; $('frCode').focus(); return; }
    history.replaceState(null, '', '#p=' + linkOf(cfg));
    openLobby(cfg, true);
  });
  $('guessBtn').addEventListener('click', submit);
  $('nextBtn').addEventListener('click', next);
  $('againBtn').addEventListener('click', again);
  $('homeBtn').addEventListener('click', goHome);
  $('shareBtn').addEventListener('click', () => copyText(shareText(), $('shareBtn'), 'Résultat copié'));
  $('fpNextBtn').addEventListener('click', joinNext);
  $('resetBtn').addEventListener('click', () => { if (view) loadStreetView(view.loc, view.heading, view.onReady); });
  $('swapBtn').addEventListener('click', swapLocation);
  $('hintBtn').addEventListener('click', () => { const r = cur(); if (r.hint < Z(S.zone).hints.length) { r.hint++; Snd.pin(); renderHint(); } });
  $('soundBtn').addEventListener('click', () => { Snd.on = !Snd.on; store.set('snd', Snd.on); setSoundLabel(); Snd.pin(); });
  $('mapToggle').addEventListener('click', () => setSheet(!$('guess').classList.contains('open')));
  $('sheetClose').addEventListener('click', () => setSheet(false));
  $('qoAgain').addEventListener('click', () => startSerie(Q.zone, Q.limit));
  $('qoHome').addEventListener('click', goHome);
  $('passBtn').addEventListener('click', openPassport);
  $('ppBack').addEventListener('click', goHome);

  $('lbCopy').addEventListener('click', () => {
    if (!Room.cfg) return;
    const url = $('lbLink').value, text = `Rejoins-moi sur Point de chute avec le code ${fmtCode(Room.cfg.code)}`, all = `${text}\n${url}`;
    if (navigator.share && compact.matches) navigator.share({ title: 'Point de chute', text, url }).catch((e) => { if (!e || e.name !== 'AbortError') copyText(all, $('lbCopy'), 'Invitation copiée'); });
    else copyText(all, $('lbCopy'), 'Invitation copiée');
  });
  $('lbNameForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = cleanName($('lbName').value);
    if (!name) { $('lbName').focus(); return; }
    store.set('name', name);
    store.set('joined.' + Room.cfg.id, true);
    Room.send({ t: 'j' });
    setJoined(true);
    renderLobby();
  });
  $('lbStart').addEventListener('click', startFromLobby);
  $('lbBack').addEventListener('click', goHome);
  $('lbRename').addEventListener('click', () => setJoined(false));
  window.addEventListener('hashchange', route);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && Room.cfg && !Room.viaProxy && (!Room.es || Room.es.readyState === 2)) Room.connect(); });
  document.querySelector('.tools').addEventListener('click', (e) => {
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    if (e.target.closest('#hintBtn, #resetBtn, #swapBtn, #toolsClose')) setTools(false);   // Son et Quitter laissent le menu ouvert : on y lit leur état
  });
  $('toolsBtn').addEventListener('click', (e) => { setTools(!$('play').classList.contains('tools-open')); e.currentTarget.blur(); });
  $('toolsScrim').addEventListener('click', () => setTools(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && $('play').classList.contains('tools-open')) setTools(false); });
  // iPhone : empêche le zoom de toute la page par pincement en dehors de la vue de rue et des cartes.
  document.addEventListener('gesturestart', (e) => { if (!(e.target.closest && e.target.closest('.leaflet-container'))) e.preventDefault(); });

  document.querySelectorAll('input[name="zone"], input[name="time"], input[name="mode"]').forEach((i) => i.addEventListener('change', refreshHome));

  document.addEventListener('keydown', (e) => {
    // On laisse le clavier tranquille quand on écrit ou qu'un bouton/lien a le focus ; les boutons radio, eux, ne bloquent pas les raccourcis.
    const t = e.target, typing = t.closest && t.closest('button, a, select, textarea, input:not([type="radio"])');
    if (e.repeat || typing || e.ctrlKey || e.metaKey || e.altKey) return;
    if (Q && !$('play').hidden && !Q.answered && /^Digit[1-4]$|^Numpad[1-4]$/.test(e.code)) {
      const b = $('quizGrid').querySelectorAll('button')[+e.code.slice(-1) - 1];
      if (b) { e.preventDefault(); b.click(); }
      return;
    }
    if (e.code !== 'Space' && e.code !== 'Enter') return;
    let fn = null;
    if (!$('home').hidden) fn = () => { if (!$('startBtn').disabled) startFromHome(); };
    else if (!$('lobby').hidden) fn = () => { if (!$('lbIn').hidden) startFromLobby(); };
    else if (!$('play').hidden) fn = () => { if (Q) { if (!$('quizOver').hidden) startSerie(Q.zone, Q.limit); } else if (gmarker) submit(); };
    else if ($('result').hidden) return;   // passeport ou autre écran sans raccourci
    else if (!$('roundPanel').hidden) fn = next;
    else fn = again;
    e.preventDefault();
    fn();
  });

  // Préférences du dernier trajet
  const prefs = store.get('prefs', null);
  if (prefs && typeof prefs === 'object') {
    ['zone', 'time', 'mode'].forEach((k) => {
      const el = [...document.querySelectorAll(`input[name="${k}"]`)].find((i) => i.value === String(prefs[k]));
      if (el) el.checked = true;
    });
  }
  setSoundLabel();
  refreshHome();
  initHomeMap();
  route();
})();

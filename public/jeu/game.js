/* Point de chute — logique du jeu.
   Lieux : window.LOCS = [lat, lng, idPanorama, ville, codePays] (voir locations.js). */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const LOCS = window.LOCS || [];
  const ROUNDS = 5;
  const MAX = 5000;

  const EUROPE = new Set('AD AL AT BA BE BG CH CZ DE DK EE ES FI FO FR GB GR HR HU IE IS IT LT LU LV ME MK MT NL NO PL PT RO RS SE SI SK UA'.split(' '));
  // k = distance (km) à laquelle on ne garde plus qu'environ 37 % des points.
  const ZONES = {
    monde: { label: 'Monde', k: 1500, view: [[25, 5], 1.5], has: () => true },
    europe: { label: 'Europe', k: 450, view: [[53, 12], 3.5], has: (cc) => EUROPE.has(cc) },
    france: { label: 'France', k: 130, view: [[46.6, 2.4], 5], has: (cc) => cc === 'FR' },
  };

  /* ---------- Utilitaires ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('pdc.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('pdc.' + k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } },
  };
  const fmtInt = (n) => Math.round(n).toLocaleString('fr-FR');
  const regionNames = (() => { try { return new Intl.DisplayNames(['fr'], { type: 'region' }); } catch (e) { return null; } })();
  const countryName = (cc) => { try { return (regionNames && regionNames.of(cc)) || cc; } catch (e) { return cc; } };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compact = window.matchMedia('(max-width: 760px), (hover: none)');

  function fmtDist(km) {
    if (km < 1) return Math.max(1, Math.round(km * 1000)) + ' m';
    if (km < 20) return km.toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + ' km';
    return fmtInt(km) + ' km';
  }
  function fmtTime(s) { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  const wrapLng = (lng) => ((lng + 180) % 360 + 360) % 360 - 180;

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

  /* ---------- Tirage des lieux ---------- */
  function pick(zoneKey, usedPanos, usedCountries) {
    const z = ZONES[zoneKey];
    const recent = new Set(store.get('recent', []));
    let pool = LOCS.filter((l) => z.has(l[4]) && !usedPanos.has(l[2]));
    const fresh = pool.filter((l) => !recent.has(l[2]));
    if (fresh.length >= 30) pool = fresh;
    if (zoneKey !== 'france') {
      // On tire d'abord un pays (pondéré, sans laisser les gros pays tout écraser), puis un lieu dedans.
      const by = {};
      pool.forEach((l) => (by[l[4]] = by[l[4]] || []).push(l));
      let ccs = Object.keys(by).filter((c) => !usedCountries.has(c));
      if (!ccs.length) ccs = Object.keys(by);
      const w = ccs.map((c) => Math.sqrt(Math.min(by[c].length, 60)));
      let r = Math.random() * w.reduce((a, b) => a + b, 0), i = 0;
      for (; i < w.length - 1; i++) { r -= w[i]; if (r <= 0) break; }
      pool = by[ccs[i]];
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }
  function markRecent(pano) {
    const r = store.get('recent', []).filter((p) => p !== pano);
    r.push(pano);
    store.set('recent', r.slice(-600));
  }
  const svUrl = (loc, heading) =>
    `https://www.google.com/maps/embed?pb=!6m8!1m7!1s${loc[2]}!2m2!1d${loc[0]}!2d${loc[1]}!3f${heading}!4f0!5f0.78`;

  /* ---------- Cartes ---------- */
  // Fond de carte : OpenStreetMap France (noms en français). Si ses serveurs flanchent, bascule sur le fond OSM standard.
  const OSM = '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>';
  const tiles = () => {
    const layer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', { subdomains: 'abc', maxZoom: 19, attribution: OSM + ' · OSM France' });
    let fails = 0;
    layer.on('tileerror', () => {
      if (++fails === 4) { layer.options.subdomains = ['']; layer.setUrl('https://tile.openstreetmap.org/{z}/{x}/{y}.png'); }
    });
    return layer;
  };
  const iconGuess = L.divIcon({ className: '', html: '<div class="pin-guess"></div>', iconSize: [22, 22], iconAnchor: [11, 11] });
  const iconTrue = (n) => L.divIcon({ className: '', html: `<div class="pin-true">${n ? `<span class="pin-num">${n}</span>` : ''}</div>`, iconSize: [22, 30], iconAnchor: [11, 28] });

  let homeMap, gmap, gmarker, rmap, rlayer;

  function initHomeMap() {
    homeMap = L.map('homeMap', { zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false, tap: false })
      .setView([34, 8 + Math.random() * 40], 4);
    tiles().addTo(homeMap);
    if (!reduceMotion) {
      const drift = () => { if (!$('home').hidden) homeMap.panBy([120, 0], { animate: true, duration: 12, easeLinearity: 1 }); };
      homeMap.on('moveend', drift);
      setTimeout(drift, 600);
    }
  }

  function initGuessMap() {
    gmap = L.map('guessMap', { worldCopyJump: true, minZoom: 1, maxZoom: 18, zoomSnap: 0.5, wheelPxPerZoomLevel: 90 });
    tiles().addTo(gmap);
    gmap.on('click', (e) => {
      if (!gmarker) {
        gmarker = L.marker(e.latlng, { icon: iconGuess, draggable: true, keyboard: false }).addTo(gmap);
      } else gmarker.setLatLng(e.latlng);
      $('guess').classList.add('has-pin');
      const b = $('guessBtn');
      b.disabled = false;
      b.innerHTML = 'Valider <kbd>Espace</kbd>';
    });
    new ResizeObserver(() => gmap.invalidateSize({ animate: false })).observe($('guessMap'));

    // Sur ordinateur, la mini-carte s'agrandit au survol.
    let closeT;
    const g = $('guess');
    g.addEventListener('mouseenter', () => { if (compact.matches) return; clearTimeout(closeT); g.classList.add('open'); });
    g.addEventListener('mouseleave', () => { if (compact.matches) return; closeT = setTimeout(() => g.classList.remove('open'), 500); });
  }

  function initResultMap() {
    rmap = L.map('resultMap', { minZoom: 2, zoomSnap: 0.25, worldCopyJump: false });
    tiles().addTo(rmap);
    rlayer = L.layerGroup().addTo(rmap);
  }

  /* ---------- État ---------- */
  let S = null;         // partie en cours
  let timerId = null;
  let loadToken = 0;
  const cur = () => S.rounds[S.idx];

  function show(id) {
    ['home', 'play', 'result'].forEach((s) => { $(s).hidden = s !== id; });
  }

  /* ---------- Accueil ---------- */
  const selected = (name) => document.querySelector(`input[name="${name}"]:checked`).value;
  function refreshHome() {
    const zk = selected('zone'), z = ZONES[zk];
    const pool = LOCS.filter((l) => z.has(l[4]));
    const nCountries = new Set(pool.map((l) => l[4])).size;
    $('poolLine').textContent = zk === 'france' ? `${fmtInt(pool.length)} lieux à travers la France` : `${fmtInt(pool.length)} lieux dans ${nCountries} pays`;
    const best = store.get('best.' + zk, 0);
    $('bestLine').textContent = best ? `Ton record : ${fmtInt(best)} / ${fmtInt(ROUNDS * MAX)}` : '';
    $('startBtn').disabled = pool.length < ROUNDS;
  }
  function goHome() {
    stopTimer(); loadToken++;
    $('svWrap').innerHTML = '';
    S = null;
    show('home');
    refreshHome();
    if (homeMap) { homeMap.invalidateSize(); homeMap.fire('moveend'); }
  }

  /* ---------- Partie ---------- */
  function startGame() {
    const zone = selected('zone'), limit = +selected('time');
    store.set('prefs', { zone, time: String(limit) });
    S = { zone, limit, idx: 0, score: 0, rounds: [] };
    const usedP = new Set(), usedC = new Set();
    for (let i = 0; i < ROUNDS; i++) {
      const loc = pick(zone, usedP, usedC);
      usedP.add(loc[2]); usedC.add(loc[4]);
      S.rounds.push({ loc, guess: null, km: null, pts: 0, timerOn: false });
    }
    S.usedP = usedP; S.usedC = usedC;
    show('play');
    if (!gmap) initGuessMap();
    startRound();
  }

  function startRound() {
    const r = cur();
    $('hudRound').textContent = `${S.idx + 1}/${ROUNDS}`;
    $('hudScore').textContent = fmtInt(S.score);
    $('hudTimeCell').hidden = !S.limit;
    $('hudTimeCell').classList.remove('low');
    if (S.limit) $('hudTime').textContent = fmtTime(S.limit);
    // Mini-carte remise à zéro
    if (gmarker) { gmarker.remove(); gmarker = null; }
    const g = $('guess');
    g.classList.remove('open', 'has-pin');
    $('play').classList.remove('sheet');
    $('mapToggle').textContent = 'Ouvrir la carte';
    const b = $('guessBtn');
    b.disabled = true; b.textContent = 'Place ton point sur la carte';
    const v = ZONES[S.zone].view;
    gmap.invalidateSize({ animate: false });
    gmap.setView(v[0], v[1], { animate: false });
    disarmQuit();
    r.timerOn = false;
    r.heading = Math.floor(Math.random() * 360);
    loadStreetView();
  }

  function loadStreetView() {
    const r = cur(), wrap = $('svWrap'), loading = $('svLoading');
    const token = ++loadToken;
    loading.classList.remove('off');
    wrap.innerHTML = '';
    const f = document.createElement('iframe');
    f.title = 'Vue de rue';
    f.allow = 'fullscreen; accelerometer; gyroscope';
    f.setAttribute('allowfullscreen', '');
    const done = () => {
      if (token !== loadToken) return;
      loading.classList.add('off');
      startTimer();
    };
    f.addEventListener('load', () => setTimeout(done, 1100));
    setTimeout(done, 7000);
    f.src = svUrl(r.loc, r.heading);
    wrap.appendChild(f);
  }

  function startTimer() {
    const r = cur();
    if (!S || !S.limit || r.timerOn) return;
    r.timerOn = true;
    const end = performance.now() + S.limit * 1000;
    stopTimer();
    timerId = setInterval(() => {
      const left = (end - performance.now()) / 1000;
      $('hudTime').textContent = fmtTime(left);
      $('hudTimeCell').classList.toggle('low', left <= 10);
      if (left <= 0) submit();
    }, 200);
  }
  function stopTimer() { clearInterval(timerId); timerId = null; }

  function swapLocation() {
    const r = cur();
    stopTimer();
    const loc = pick(S.zone, S.usedP, S.usedC);
    S.usedP.add(loc[2]);
    r.loc = loc;
    startRound();
  }

  function submit() {
    if (!S || $('play').hidden) return;
    const r = cur();
    stopTimer(); loadToken++;
    if (gmarker) {
      const ll = gmarker.getLatLng();
      r.guess = [ll.lat, wrapLng(ll.lng)];
      r.km = haversine([r.loc[0], r.loc[1]], r.guess);
      r.pts = points(r.km, ZONES[S.zone].k);
    } else { r.guess = null; r.km = null; r.pts = 0; }
    S.score += r.pts;
    markRecent(r.loc[2]);
    $('svWrap').innerHTML = '';
    showRound();
  }

  /* ---------- Résultat d'une manche ---------- */
  function drawRound(r, n) {
    const t = [r.loc[0], r.loc[1]];
    const out = [t];
    L.marker(t, { icon: iconTrue(n), keyboard: false, zIndexOffset: 500 }).addTo(rlayer);
    if (r.guess) {
      const path = arc(t, r.guess);
      const g = path[path.length - 1];
      L.polyline(path, { color: '#0e1b2c', weight: 3, dashArray: '2 8', lineCap: 'round', interactive: false }).addTo(rlayer);
      L.marker(g, { icon: iconGuess, keyboard: false }).addTo(rlayer);
      path.forEach((p) => out.push(p));
    }
    return out;
  }
  function fit(pts, panel) {
    rmap.invalidateSize({ animate: false });
    let b = L.latLngBounds(pts);
    if (pts.length === 1) b = L.latLngBounds([[pts[0][0] - 4, pts[0][1] - 6], [pts[0][0] + 4, pts[0][1] + 6]]);
    const h = panel.getBoundingClientRect().height;
    rmap.fitBounds(b, { paddingTopLeft: [50, 50], paddingBottomRight: [50, h + 50], maxZoom: 11, animate: false });
  }
  const placeText = (loc) => `${loc[3]}, ${countryName(loc[4])}`;

  function showRound() {
    const r = cur(), last = S.idx === ROUNDS - 1;
    show('result');
    $('roundPanel').hidden = false; $('finalPanel').hidden = true;
    if (!rmap) initResultMap();
    rlayer.clearLayers();

    $('rpKicker').textContent = `Manche ${S.idx + 1} sur ${ROUNDS}`;
    $('borneTxt').textContent = r.loc[4];
    $('rpDist').textContent = r.guess ? (r.km <= 0.25 ? 'En plein dessus' : `À ${fmtDist(r.km)}`) : 'Pas de réponse';
    const place = $('rpPlace');
    place.textContent = 'Tu étais près de ';
    const strong = document.createElement('strong'); strong.textContent = r.loc[3];
    place.append(strong, `, ${countryName(r.loc[4])}.`);
    $('rpLink').href = `https://www.google.com/maps/@?api=1&map_action=pano&pano=${encodeURIComponent(r.loc[2])}&viewpoint=${r.loc[0]},${r.loc[1]}`;
    $('nextBtn').innerHTML = (last ? 'Voir le résultat' : 'Manche suivante') + ' <kbd>Espace</kbd>';
    $('rpBar').style.width = '0%';
    countUp($('rpPts'), r.pts);
    requestAnimationFrame(() => requestAnimationFrame(() => { $('rpBar').style.width = (r.pts / MAX * 100) + '%'; }));

    fit(drawRound(r), $('roundPanel'));
  }

  function next() {
    if (S.idx < ROUNDS - 1) {
      S.idx++;
      show('play');
      startRound();
    } else showFinal();
  }

  /* ---------- Fin de partie ---------- */
  const GRADES = [
    [0.9, 'Cartographe en chef'],
    [0.75, 'Grand voyageur'],
    [0.55, 'Routard confirmé'],
    [0.35, 'Touriste avec un bon guide'],
    [0.15, 'Un peu perdu'],
    [0, 'Complètement à l\'ouest'],
  ];
  function showFinal() {
    const max = ROUNDS * MAX;
    $('roundPanel').hidden = true; $('finalPanel').hidden = false;
    rlayer.clearLayers();
    const all = [], per = [];
    S.rounds.forEach((r, i) => { const p = drawRound(r, i + 1); per.push(p); p.forEach((x) => all.push(x)); });

    $('fpKicker').textContent = `Partie terminée · ${ZONES[S.zone].label}`;
    $('fpMax').textContent = `/ ${fmtInt(max)}`;
    countUp($('fpTotal'), S.score, 1200);
    $('fpGrade').textContent = GRADES.find((g) => S.score / max >= g[0])[1];
    const best = store.get('best.' + S.zone, 0);
    if (S.score > best) { store.set('best.' + S.zone, S.score); $('fpBest').textContent = best ? `Nouveau record. L'ancien était à ${fmtInt(best)}.` : 'Premier score enregistré.'; }
    else $('fpBest').textContent = `Ton record : ${fmtInt(best)}`;

    const list = $('fpList');
    list.innerHTML = '';
    S.rounds.forEach((r, i) => {
      const li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button';
      b.title = 'Voir cette manche sur la carte';
      [['n', i + 1], ['w', placeText(r.loc)], ['d', r.guess ? fmtDist(r.km) : 'sans réponse'], ['p', fmtInt(r.pts)]].forEach(([c, t]) => {
        const s = document.createElement('span'); s.className = c; s.textContent = t; b.appendChild(s);
      });
      b.addEventListener('click', () => fit(per[i], $('finalPanel')));
      li.appendChild(b); list.appendChild(li);
    });
    fit(all, $('finalPanel'));
  }

  /* ---------- Quitter (deux clics) ---------- */
  let quitT;
  function disarmQuit() { clearTimeout(quitT); const q = $('quitBtn'); q.classList.remove('arm'); q.textContent = 'Quitter'; }
  $('quitBtn').addEventListener('click', () => {
    const q = $('quitBtn');
    if (q.classList.contains('arm')) { disarmQuit(); goHome(); return; }
    q.classList.add('arm'); q.textContent = 'Quitter la partie ?';
    quitT = setTimeout(disarmQuit, 3000);
  });

  /* ---------- Branchements ---------- */
  $('startBtn').addEventListener('click', startGame);
  $('guessBtn').addEventListener('click', submit);
  $('nextBtn').addEventListener('click', next);
  $('againBtn').addEventListener('click', startGame);
  $('homeBtn').addEventListener('click', goHome);
  $('resetBtn').addEventListener('click', () => loadStreetView());
  $('swapBtn').addEventListener('click', swapLocation);
  $('mapToggle').addEventListener('click', () => {
    const open = $('guess').classList.toggle('open');
    $('play').classList.toggle('sheet', open);
    $('mapToggle').textContent = open ? 'Revenir à la vue' : 'Ouvrir la carte';
  });
  document.querySelectorAll('input[name="zone"], input[name="time"]').forEach((i) => i.addEventListener('change', refreshHome));

  document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space' && e.code !== 'Enter') return;
    if (e.repeat || (e.target.closest && e.target.closest('button, a, input, select, textarea'))) return;
    let fn = null;
    if (!$('home').hidden) fn = () => { if (!$('startBtn').disabled) startGame(); };
    else if (!$('play').hidden) fn = () => { if (gmarker) submit(); };
    else if (!$('roundPanel').hidden) fn = next;
    else fn = startGame;
    e.preventDefault();
    fn();
  });

  // Préférences de la dernière partie
  const prefs = store.get('prefs', null);
  if (prefs) {
    const z = document.querySelector(`input[name="zone"][value="${prefs.zone}"]`); if (z) z.checked = true;
    const t = document.querySelector(`input[name="time"][value="${prefs.time}"]`); if (t) t.checked = true;
  }
  refreshHome();
  initHomeMap();
})();

/* Point de chute — style de carte maison (données OpenFreeMap / OpenMapTiles / OpenStreetMap).
   But : une carte épurée où les frontières des pays se lisent d'un coup d'œil, noms en français.
   Attention : les zooms ci-dessous sont ceux de MapLibre (= zoom Leaflet − 1). */
window.PDC_STYLE = (() => {
  const S = 'omt';
  const C = {
    land: '#f4f2ec', water: '#a8d4ef', wood: '#dfead3', sand: '#f0e8d0', ice: '#ffffff', town: '#e9e5db',
    border: '#2b3a55', region: '#8a97ad', road: '#ffffff', roadEdge: '#d5cfc1', motorway: '#f2cf9c',
    ink: '#1c2740', soft: '#6f7c92', sea: '#3f76a8',
  };
  const name = ['coalesce', ['get', 'name:fr'], ['get', 'name:latin'], ['get', 'name']];
  const poly = ['match', ['geometry-type'], ['Polygon', 'MultiPolygon'], true, false];
  const line = ['match', ['geometry-type'], ['LineString', 'MultiLineString'], true, false];
  const cls = (...c) => ['match', ['get', 'class'], c, true, false];
  const land = ['all', ['!=', ['get', 'maritime'], 1]];
  const z = (...stops) => ['interpolate', ['linear'], ['zoom'], ...stops];
  const ze = (...stops) => ['interpolate', ['exponential', 1.4], ['zoom'], ...stops];
  const halo = { 'text-halo-color': 'rgba(255,255,255,0.92)', 'text-halo-width': 1.6 };
  const round = { 'line-cap': 'round', 'line-join': 'round' };

  return {
    version: 8,
    glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
    sources: { [S]: { type: 'vector', url: 'https://tiles.openfreemap.org/planet' } },
    layers: [
      { id: 'fond', type: 'background', paint: { 'background-color': C.land } },
      { id: 'sable', type: 'fill', source: S, 'source-layer': 'landcover', filter: ['all', poly, cls('sand')], paint: { 'fill-color': C.sand, 'fill-opacity': 0.7 } },
      { id: 'vegetation', type: 'fill', source: S, 'source-layer': 'landcover', filter: ['all', poly, cls('wood', 'grass')], paint: { 'fill-color': C.wood, 'fill-opacity': z(0, 0.75, 8, 0.6, 12, 0.4) } },
      { id: 'glace', type: 'fill', source: S, 'source-layer': 'landcover', filter: ['all', poly, cls('ice')], paint: { 'fill-color': C.ice } },
      { id: 'villes', type: 'fill', source: S, 'source-layer': 'landuse', minzoom: 7, filter: ['all', poly, cls('residential')], paint: { 'fill-color': C.town, 'fill-opacity': z(7, 0.5, 12, 0.9) } },
      { id: 'eau', type: 'fill', source: S, 'source-layer': 'water', filter: ['all', poly, ['!=', ['get', 'brunnel'], 'tunnel']], paint: { 'fill-color': C.water } },
      { id: 'rivieres', type: 'line', source: S, 'source-layer': 'waterway', minzoom: 7, filter: line, layout: round, paint: { 'line-color': C.water, 'line-width': ze(7, 0.6, 14, 3) } },
      { id: 'batiments', type: 'fill', source: S, 'source-layer': 'building', minzoom: 14, paint: { 'fill-color': '#e2ddd1' } },

      // Routes : discrètes, juste assez pour se repérer en zoomant.
      { id: 'rues-bord', type: 'line', source: S, 'source-layer': 'transportation', minzoom: 12, filter: ['all', line, cls('minor', 'service')], layout: round, paint: { 'line-color': C.roadEdge, 'line-width': ze(12, 1.6, 18, 14) } },
      { id: 'routes-bord', type: 'line', source: S, 'source-layer': 'transportation', minzoom: 8, filter: ['all', line, cls('trunk', 'primary', 'secondary', 'tertiary')], layout: round, paint: { 'line-color': C.roadEdge, 'line-width': ze(8, 1.6, 12, 4, 18, 22) } },
      { id: 'rues', type: 'line', source: S, 'source-layer': 'transportation', minzoom: 12, filter: ['all', line, cls('minor', 'service')], layout: round, paint: { 'line-color': C.road, 'line-width': ze(12, 0.8, 18, 11) } },
      { id: 'routes', type: 'line', source: S, 'source-layer': 'transportation', minzoom: 6, filter: ['all', line, cls('trunk', 'primary', 'secondary', 'tertiary')], layout: round, paint: { 'line-color': z(6, '#e4d8b9', 9, C.road), 'line-width': ze(6, 0.5, 8, 0.9, 12, 2.6, 18, 19) } },
      { id: 'autoroutes', type: 'line', source: S, 'source-layer': 'transportation', minzoom: 4, filter: ['all', line, cls('motorway')], layout: round, paint: { 'line-color': C.motorway, 'line-width': ze(4, 0.5, 8, 1.6, 12, 3.4, 18, 22) } },

      // Frontières : régions en pointillé fin, pays en trait foncé épais sur un liseré blanc.
      { id: 'regions', type: 'line', source: S, 'source-layer': 'boundary', minzoom: 2.5, filter: ['all', ['==', ['get', 'admin_level'], 4], land[1]], paint: { 'line-color': C.region, 'line-dasharray': [3, 2], 'line-width': z(2.5, 0.4, 7, 1, 12, 1.4), 'line-opacity': z(2.5, 0.5, 5, 0.9) } },
      { id: 'pays-lisere', type: 'line', source: S, 'source-layer': 'boundary', filter: ['all', ['==', ['get', 'admin_level'], 2], land[1]], layout: round, paint: { 'line-color': '#ffffff', 'line-opacity': 0.75, 'line-width': z(0, 2.2, 3, 4, 7, 6.5, 12, 9) } },
      { id: 'pays', type: 'line', source: S, 'source-layer': 'boundary', filter: ['all', ['==', ['get', 'admin_level'], 2], land[1], ['!=', ['get', 'disputed'], 1]], layout: round, paint: { 'line-color': C.border, 'line-width': z(0, 0.8, 3, 1.5, 7, 2.4, 12, 3.2) } },
      { id: 'pays-conteste', type: 'line', source: S, 'source-layer': 'boundary', filter: ['all', ['==', ['get', 'admin_level'], 2], land[1], ['==', ['get', 'disputed'], 1]], paint: { 'line-color': C.border, 'line-dasharray': [2, 2], 'line-width': z(0, 0.7, 7, 1.8) } },

      // Noms
      { id: 'nom-mers', type: 'symbol', source: S, 'source-layer': 'water_name', filter: ['match', ['geometry-type'], ['Point', 'MultiPoint'], true, false],
        layout: { 'text-field': name, 'text-font': ['Noto Sans Italic'], 'text-size': z(0, 10, 6, 14), 'text-letter-spacing': 0.12, 'text-max-width': 6 },
        paint: { 'text-color': C.sea, 'text-halo-color': 'rgba(168,212,239,0.7)', 'text-halo-width': 1 } },
      { id: 'nom-villages', type: 'symbol', source: S, 'source-layer': 'place', minzoom: 9.5, filter: cls('village', 'suburb', 'hamlet'),
        layout: { 'text-field': name, 'text-font': ['Noto Sans Regular'], 'text-size': z(9.5, 10.5, 14, 13), 'text-max-width': 8 }, paint: { 'text-color': C.soft, ...halo } },
      { id: 'nom-bourgs', type: 'symbol', source: S, 'source-layer': 'place', minzoom: 6, filter: cls('town'),
        layout: { 'text-field': name, 'text-font': ['Noto Sans Regular'], 'text-size': z(6, 10.5, 12, 15), 'text-max-width': 8 }, paint: { 'text-color': '#3d4960', ...halo } },
      { id: 'nom-regions', type: 'symbol', source: S, 'source-layer': 'place', minzoom: 3.5, maxzoom: 8, filter: cls('state'),
        layout: { 'text-field': name, 'text-font': ['Noto Sans Regular'], 'text-size': z(3.5, 9.5, 7, 12.5), 'text-transform': 'uppercase', 'text-letter-spacing': 0.14, 'text-max-width': 8 },
        paint: { 'text-color': C.soft, ...halo } },
      { id: 'nom-villes', type: 'symbol', source: S, 'source-layer': 'place', minzoom: 2.5, filter: cls('city'),
        layout: { 'text-field': name, 'text-font': ['case', ['==', ['get', 'capital'], 2], ['literal', ['Noto Sans Bold']], ['literal', ['Noto Sans Regular']]], 'text-size': z(2.5, 10.5, 7, 13.5, 11, 18), 'text-max-width': 8,
          'symbol-sort-key': ['coalesce', ['get', 'rank'], 20] },
        paint: { 'text-color': C.ink, ...halo } },
      { id: 'nom-pays', type: 'symbol', source: S, 'source-layer': 'place', maxzoom: 8.5, filter: cls('country'),
        layout: { 'text-field': name, 'text-font': ['Noto Sans Bold'], 'text-max-width': 6.5, 'text-letter-spacing': 0.03,
          'symbol-sort-key': ['coalesce', ['get', 'rank'], 9],
          'text-size': ['interpolate', ['linear'], ['zoom'], 0, ['match', ['get', 'rank'], 1, 10.5, 2, 9.5, 9], 4, ['match', ['get', 'rank'], 1, 19, 2, 16.5, 14], 7, ['match', ['get', 'rank'], 1, 23, 2, 21, 18]] },
        paint: { 'text-color': C.ink, 'text-halo-color': 'rgba(255,255,255,0.95)', 'text-halo-width': 2 } },
    ],
  };
})();

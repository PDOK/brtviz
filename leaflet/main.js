var map = L.map('map');
map.setView(new L.LatLng( 52.3719, 4.9012),7);
var gl = L.mapboxGL({
    accessToken: 'no-token',
    style: 'style.json'
}).addTo(map);

var map = new L.map("map", {
    center: [52.3719, 4.9012],
    zoom: 7,
    attributionControl: true
});

var gl = L.mapboxGL({
    accessToken: "no-token",
    style: "style.json",
    attribution: "&copy; Map data <a href=\"http://wwww.kadaster.nl\">Kadaster</a>"
}).addTo(map);

map.attributionControl.setPrefix("");

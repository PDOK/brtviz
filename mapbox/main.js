var bounds = [
    [3.259, 50.724], // Southwest coordinates
    [7.263, 53.505]  // Northeast coordinates
];

var map = new mapboxgl.Map({
    container: 'map',
    hash: true,
    style: 'style.json',
    zoom: 9,
    maxBounds: bounds,
    pitch: 60,
    bearing: 62.4,
    center: [ 5.122178,52.090988]
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');

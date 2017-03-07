
var layer = new ol.layer.VectorTile({
	source: new ol.source.VectorTile({
        	attributions: 'Kadaster',
	        format: new ol.format.MVT(),
        	tileGrid: ol.tilegrid.createXYZ({maxZoom: 18}),
	        tilePixelRatio: 16,
        	url: 'http://localhost/terreinvlak_3/{z}/{x}/{y}.pbf'
	})
});

var map = new ol.Map({
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([4.9012, 52.3719]),
        zoom: 7
    })
});

fetch('http://localhost/style.json').then(function(response) {
  response.json().then(function(glStyle) {
    olms.applyStyle(layer, glStyle, 'buildings').then(function() {
      map.addLayer(layer);
    });
  });
});

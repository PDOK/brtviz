
var layer = new ol.layer.VectorTile({
	source: new ol.source.VectorTile({
        	attributions: 'Kadaster',
	        format: new ol.format.MVT(),
        	tileGrid: ol.tilegrid.createXYZ({maxZoom: 18}),
	        tilePixelRatio: 16,
        	url: 'http://localhost/brt_achtergrond/{z}/{x}/{y}.pbf'
	})
});

var map = new ol.Map({
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([4.9012, 52.3719]),
        zoom: 7
    })
});

fetch('style.json').then(function(response) {
  response.json().then(function(glStyle) {
    olms.applyStyle(layer, glStyle, 'brt_a').then(function() {
      map.addLayer(layer);
    });
  });
});


// create layer
var layer = new ol.layer.VectorTile({
	source: new ol.source.VectorTile({
        	attributions: 'Kadaster',
	        format: new ol.format.MVT(),
        	tileGrid: ol.tilegrid.createXYZ({maxZoom: 15}),
	        tilePixelRatio: 16,
        	url: 'http://localhost:8000/brt_achtergrond/{z}/{x}/{y}.pbf',
          renderBuffer: 10
	})  
});
// Create map
var map = new ol.Map({
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([ 6.883026, 52.790131]),
        zoom: 8
    })
});

// Create global randomstyle
var randomStyle = [new ol.style.Style({
      fill: new ol.style.Fill({
        color: getRandomColor()
      })
    })    
  ];

mytiming = [];
mytiming2 = [];

// Set different styles
function kleur_map(in_stijl){
  stopall();
  switch(in_stijl) {
    case "kleur":
        var style_kleur = fetch('http://localhost:8000/style.json').then(function(response) {
          response.json().then(function(glStyle) {
            olms.applyStyle(layer, glStyle, 'brt_achtergrond_source')
          });
        });
        break;
    case "grijs":
        var style_grijs = fetch('http://localhost:8000/style_grijs.json').then(function(response) {
          response.json().then(function(glStyle) {
            olms.applyStyle(layer, glStyle, 'brt_achtergrond_source')
          });
        });
        break;
    } 
};

// Create random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Create random number
function getRandomNumber() {
    nr = Math.floor((Math.random()* 5));
    return nr;
};

// Create new random style
function createRandomStyle() {
  randomStyle = {
    'Point': new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: getRandomColor()
        }),
        radius: getRandomNumber(),
        stroke: new ol.style.Stroke({
          color: getRandomColor(),
          width: 1
        })
      })
    }),
    'LineString': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: getRandomColor(),
        width: getRandomNumber()
      })
    }),
    'Polygon': new ol.style.Style({
      fill: new ol.style.Fill({
        color: getRandomColor()
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(0,0,0,0)',
        width: 0
      })
    }),
    'MultiPoint': new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: getRandomColor()
        }),
        radius: getRandomNumber(),
        stroke: new ol.style.Stroke({
          color: getRandomColor(),
          width: 1
        })
      })
    }),
    'MultiLineString': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: getRandomColor(),
        width: getRandomNumber()
      })
    }),
    'MultiPolygon': new ol.style.Style({
      fill: new ol.style.Fill({
        color: getRandomColor()
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(0,0,0,0)',
        width: 0
      })
    })
  };
};

// Set different Style
function setStyle() {
  layer.setStyle(function(feature, resolution) {
        return randomStyle[feature.getGeometry().getType()];
      })
  };
  // layer.setStyle(function(feature, resolution) {
  //    return randomStyle
  // });

// start randomization
function startall(){
  stopall();
  mytiming = window.setInterval(createRandomStyle, 300);
  mytiming2 = window.setInterval(setStyle, 300);
};

// stop randomization
function stopall(){
  clearInterval(mytiming);
  clearInterval(mytiming2);
};  

// initialize map with default Grijs
map.addLayer(layer);
kleur_map("grijs");

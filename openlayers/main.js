
// create background layer
var layer = new ol.layer.VectorTile({
	source: new ol.source.VectorTile({
        	attributions: 'Kadaster',
	        format: new ol.format.MVT(),
        	tileGrid: ol.tilegrid.createXYZ({maxZoom: 15}),
	        tilePixelRatio: 16,
        	url: 'http://test.geodata.nationaalgeoregister.nl/vector/brt_achtergrond/{z}/{x}/{y}.pbf',
          renderBuffer: 10
	})  
});

// Create Label layer
var labels = new ol.layer.VectorTile({
  source: new ol.source.VectorTile({
                  attributions: 'Kadaster',
          format: new ol.format.MVT(),
          tileGrid: ol.tilegrid.createXYZ({maxZoom: 15}),
          tilePixelRatio: 16,
          url: 'http://test.geodata.nationaalgeoregister.nl/vector/brt_achtergrond/{z}/{x}/{y}.pbf',
          renderBuffer: 10
  }),
  style: text_style,

});

// Create map
var map = new ol.Map({
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([ 5.3, 52.2]),
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

var text_style =  fetch('/text_style.json').then(function(response) {
    response.json().then(function(glStyle) {
      olms.applyStyle(labels, glStyle, 'brt_achtergrond_source')
    });
});

mytiming = [];
mytiming2 = [];

// Set different styles
function kleur_map(in_stijl){
  stopall();
  switch(in_stijl) {
    case "kleur":
        var style_kleur = fetch('style.json').then(function(response) {
          response.json().then(function(glStyle) {
            olms.applyStyle(layer, glStyle, 'brt_achtergrond_source')
          });
        });
        break;
    case "grijs":
        var style_grijs = fetch('style_grijs.json').then(function(response) {
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
function getRandomNumber_Circle() {
    nr = Math.floor((Math.random()* 15 + 3));
    return nr;
};

// Create random number
function getRandomNumber_Line() {
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
        radius: getRandomNumber_Circle(),
        stroke: new ol.style.Stroke({
          color: getRandomColor(),
          width: 1
        })
      })
    }),
    'LineString': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: getRandomColor(),
        width: getRandomNumber_Line()
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
        radius: getRandomNumber_Circle(),
        stroke: new ol.style.Stroke({
          color: getRandomColor(),
          width: 1
        })
      })
    }),
    'MultiLineString': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: getRandomColor(),
        width: getRandomNumber_Line()
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


// Add text
function addtext(){
  if(labels.getVisible()){
     labels.setVisible(false )
  }
  else { 
    labels.setVisible(true )
  }
}

// initialize map with default Grijs
map.addLayer(layer);
map.addLayer(labels);
kleur_map("kleur");


// // Hover function

// //2-5D-BUILDINGS  
//     {
//       "id": 'building-extrusion-hover',
//       "type": "fill-extrusion",
//       "source": 'Building',
//       "source-layer" : 'buildings',
//       "maxzoom": 20,
//       "minzoom": 14,
//       "paint": {
//         "fill-extrusion-color": '#ffff00',
//         "fill-extrusion-height": {
//           "type": 'identity',
//           "property": 'height'
//         },
//         "fill-extrusion-opacity": 1
//       },
//       "filter": ["==", "id", ""]
//     },




// //CLick event!
// map.on('click', function (e) {
//     var features = map.queryRenderedFeatures(e.point, { layers: ['terreinvlak'] });
//     if (!features.length) {
//         return;
//     }
//     if (features.length) {
//         map.setFilter("building-extrusion-hover", ["==", "id", features[0].properties.id]);
//     } else {
//         map.setFilter("building-extrusion-hover", ["==", "id", ""]);
//     }
//     var feature = features[0];
//     var popup = new mapboxgl.Popup()
//         .setLngLat(map.unproject(e.point))
//         .setHTML(feature.properties.height)
//         .addTo(map);
// });


// map.on('mousemove', function (e) {
//     var features = map.queryRenderedFeatures(e.point, { layers: ['building-extrusion'] });
//     map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
     
// });

// // Reset the state-fills-hover layer's filter when the mouse leaves the map
//  map.on("mouseout", function() {
//         map.setFilter("building-extrusion-hover", ["==", "id", ""]);
//     });

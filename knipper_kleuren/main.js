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

var map = new ol.Map({
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([ 6.883026, 52.790131]),
        zoom: 8
    })
});
map.addLayer(layer);

var stijl = "grijs";

// Set different styles
kleur_map = function() {
  if( stijl == "kleur"){
    console.log("kleur");
    var style_kleur = fetch('http://localhost:8000/style.json').then(function(response) {
      response.json().then(function(glStyle) {
        olms.applyStyle(layer, glStyle, 'brt_achtergrond_source')
      });
    });
  } 
  if (stijl == "grijs") {
    console.log("grijs");
    var style_grijs = fetch('http://localhost:8000/style_grijs.json').then(function(response) {
      response.json().then(function(glStyle) {
        olms.applyStyle(layer, glStyle, 'brt_achtergrond_source')
      });
    });
  }
  else { 
      layer.setStyle(function(feature, resolution){ return randomStyle}
  )};
};


kleur_map();

var myMethod = function(){
  var randomStyle = [new ol.style.Style({
      fill: new ol.style.Fill({
        color: getRandomColor()
      })
    })    
  ];
  var randomStyle2 = [new ol.style.Style({
      fill: new ol.style.Fill({
        color: getRandomColor()
      })
    })    
  ];
  var randomStyle3 = [new ol.style.Style({
      fill: new ol.style.Fill({
        color: getRandomColor()
      })
    })    
  ];
  layer.setStyle(function(feature, resolution) {
     if (feature.get('fid') < 3000) {
       return randomStyle;
     } 
     if (feature.get('fid') > 10000) {
      return randomStyle;
    }
      else {
       return randomStyle3;
     }      
  });
  // layer.setStyle(function(feature, resolution){ return randomStyle});
  // if(stijl == "kleur"){ stijl = "grijs"}
  // if (stijl == "random") { stijl = "kleur"}
  // else { stijl = "random"}
  // kleur_map();
}

window.setInterval(myMethod, 1000);


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



map.on('click', function(browserEvent) {
  myMethod();
});  




// var style_simple = new ol.style.Style({
//     fill: new ol.style.Fill({
//       color: '#ADD8E6'
//     }),
//     stroke: new ol.style.Stroke({
//       color: '#880000',
//       width: 1
//     })
//   });

//   function simpleStyle(feature) {
//     // console.log(feature)
//     return style_simple;
//   }


// //CLick event!
// map.on('click', function (e) {
//     var features = map.queryRenderedFeatures(e.point, { layers: ['terreinvlak'] });
//     if (!features.length) {
//         return;
//     }else {
//        console.log(e);
//     } 
// });


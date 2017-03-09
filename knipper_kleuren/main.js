
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
  stijl = in_stijl
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


// Create random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Create new random style
function createRandomStyle() {
  randomStyle = [new ol.style.Style({
      fill: new ol.style.Fill({
        color: getRandomColor()
      })
    })    
  ];
};

// Set different Style
function setStyle() {
  layer.setStyle(function(feature, resolution) {
     return randomStyle
  });
  // layer.setStyle(function(feature, resolution){ return randomStyle});
  // if(stijl == "kleur"){ stijl = "grijs"}
  // if (stijl == "random") { stijl = "kleur"}
  // else { stijl = "random"}
  // kleur_map();
};

// start randomization
function startall(){
  console.log("START")
  mytiming = window.setInterval(createRandomStyle, 300);
  mytiming2 = window.setInterval(setStyle, 300);
};

// stop randomization
function stopall(){
  console.log("STOP")
  clearInterval(mytiming);
  clearInterval(mytiming2);
};  



// initialize map with default Grijs
map.addLayer(layer);
var stijl = "grijs";
kleur_map();


// //CLick event!
// map.on('click', function (e) {
//     var features = map.queryRenderedFeatures(e.point, { layers: ['terreinvlak'] });
//     if (!features.length) {
//         return;
//     }else {
//        console.log(e);
//     } 
// });


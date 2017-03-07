var fill = new ol.style.Fill({
    color: '#f00'
});

var stroke = new ol.style.Stroke({
    color: 'rgba(0,0,0,0.4)'
});

var circle = new ol.style.Circle({
    radius: 6,
    fill: fill,
    stroke: stroke
});

var vectorStyle = new ol.style.Style({
    fill: fill,
    stroke: stroke,
    image: circle
});

var map = new ol.Map({
    layers: [
        new ol.layer.VectorTile({
            source: new ol.source.VectorTile({
                attributions: 'Kadaster',
                format: new ol.format.MVT(),
                tileGrid: ol.tilegrid.createXYZ({maxZoom: 18}),
                tilePixelRatio: 1,
                url: 'http://localhost:6767/{z}/{x}/{y}.pbf'
            }),
        style: vectorStyle
        })
    ],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([4.9012, 52.3719]),
        zoom: 14
    })
});

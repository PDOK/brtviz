# Visualisatie van de BRT-Achtergrondkaart als vector tiles

## Samenvatting

Deze repository bevat de bestanden voor het visualiseren van de BRT-Achtergrondkaart als vector tiles volgens de [Mapbox Vector Tiles(MVT)-specificatie](https://www.mapbox.com/vector-tiles/specification/).

* Style Object volgens [Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec/)
* Leaflet viewer met [binding from Mapbox GL](https://github.com/mapbox/mapbox-gl-leaflet)
* OpenLayers viewer met [Mapbox Style Objects](https://boundlessgeo.com/2017/01/using-mapbox-style-objects-open-layers/)
* Vergelijking Web Mercator en RD schema volgens Nederlandse Praktijkrichtlijn Tiling

## Inleiding

### Doelstelling

De introductie van de BRT-Achtergrondkaart als vector tiles heeft verschillende doelen:

* Minder opslagruimte: vector tiles zijn gecomprimeerd (GZIP) en binair opgeslagen vectoren in plaats van rasters.
* Gemakkelijkerer ontwerpen: geen XML-bestanden (Styled Layer Descriptors), maar Mapbox Style Objects die je met [Mapbox Studio](https://www.mapbox.com/studio/signin/) en [Maputnik](https://github.com/maputnik/editor) kan maken.
* Meer ontwerpvrijheid: de cartografische vormgeving van de vector tiles wordt pas in de applicatie geconfigureerd
* Snellere rasters: indien de applicatie toch rasters afneemt, dan gebruikt de server hiervoor de vector tiles. Zo wordt de database niet meer bevraagd. De juiste informatie voor ieder schaalniveau is al omgeslagen in de vector tiles

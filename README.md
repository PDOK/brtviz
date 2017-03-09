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

## Map design met Maputnik

# Maputnik

![Maputnik](gfx/maputnik.png)

## Installatie

1. [Download Maputnik](https://github.com/maputnik/editor/releases/download/v1.0.2/public.zip)
2. Pak het ZIP-bestand uit en zet het in je folder
3. Navigeer naar de folder en start de web-server `python -m SimpleHTTPServer`
4. Open een webbrowser en navigeer naar [http://localhost:8000/#7/51.991/4.777](http://localhost:8000/#7/51.991/4.777)

## Configuratie

Ga naar `Open > Upload A New Style > Upload`

Omdat in het JSON-bestand ook de verwijzing naar de Vector Tile service staat, pakt Maputnik dit op en toont de kaart.

## Cartografie

Je kan met behulp van de interface en de JSON-interface de cartografische vormgeving van de kaart aanpassen.

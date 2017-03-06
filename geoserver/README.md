# GeoServer

## GeoServer SLDs

Voor het maken van .pbf bestanden maakt GeoServer gebruikt van het WMS end point. De SLD bepaalt voor een WMS welke kaartobjecten worden weergegeven op welke schaalniveaus en met welke stijlen. Voor vector tiles wordt de stijl in de kaart-viewer meegegeven. In de SLD wordt nog de schaalafhankelijkheid meegegeven m.b.v. `MaxScaleDenominator`. De vector tiles worden geserveerd volgens het Spherical Mercator tiling schema. De kaartlagen van de BRT-Achtergrondkaart die in de FGDB worden aangeleverd zijn aangegeven m.b.v. het zoomniveau volgens de Nederlandse Praktijkrichtlijn Tiling 1.1. Zie onderstaande tabel voor de relatie tussen het Spherical Mercator (a.k.a. Google) tiling schema en het Nederlandse [Praktijkrichtlijn Tiling 1.1.](http://www.geonovum.nl/wegwijzer/standaarden/praktijkrichtlijn-tiling-11). Zo worden de juiste lagen van de BRT-Achtergrond gebruikt voor het meest toepasselijke zoomniveau in vector tile cache.

| Zoom (Google) | Resolutie       | Schaal (96dpi) | MaxScaleDenominator | Zoom (RD) | Resolution | Schaal (96 dpi)|
|:-------------:|----------------:|---------------:|--------------------:|:---------:|-----------:|---------------:|
|               |                 |                | 250.000.000.000     |           |            |                |
| 0             | 156543.0339     | 591.657.528    |                     |           |            |                |
|               |                 |                | 500.000.000         |           |            |                |
| 1             | 78271.51695     | 295.828.764    |                     |           |            |                |
|               |                 |                | 200.000.000         |           |            |                |
| 2             | 39135.758475    | 147.914.382    |                     |           |            |                |
|               |                 |                | 100.000.000         |           |            |                |
| 3             | 19567.8792375   | 73.957.191     |                     |           |            |                |
|               |                 |                | 50.000.000          |           |            |                |
| 4             | 9783.93961875   | 36.978.595     |                     |           |            |                |
|               |                 |                | 25.000.000          |           |            |                |
| 5             | 4891.969809375  | 18.489.298     |                     |           |            |                |
|               |                 |                | 12.500.000          |           |            |                |
| 6             | 2445.9849046875 | 9.244.649      |                     | 0         | 3440.64    | 12.288.000     |
|               |                 |                | 6.500.000           |           |            |                |
|               |                 |                |                     | 1         | 1720.32    | 6.144.000      |
| 7             | 1222.9924523438 | 4.622.324      |                     | 2         | 860.16     | 3.072.000      |
|               |                 |                | 3.000.000           |           |            |                |
| 8             | 611.4962261719  | 2.311.162      |                     | 3         | 430.08     | 1.536.000      |
|               |                 |                | 1.500.000           |           |            |                |
| 9             | 305.7481130859  | 1.155.581      |                     | 4         | 215.04     | 768.000        |
|               |                 |                | 750.000             |           |            |                |
| 10            | 152.874056543   | 577.791        |                     |           |            |                |
|               |                 |                | 400.000             |           |            |                |
| 11            | 76.4370282715   | 288.895        |                     | 5         | 107.52     | 384.000        |
|               |                 |                | 200.000             |           |            |                |
| 12            | 38.2185141357   | 144.448        |                     | 6         | 53.76      | 192.000        |
|               |                 |                | 100.000             |           |            |                |
| 13            | 19.1092570679   | 72.224         |                     | 7         | 26.88      | 96.000         |
|               |                 |                | 50.000              |           |            |                |
| 14            | 9.5546285339    | 36.112         |                     | 8         | 13.44      | 48.000         |
|               |                 |                | 25.000              |           |            |                |
| 15            | 4.777314267     | 18.056         |                     | 9         | 6.72       | 24.000         |
|               |                 |                | 12.500              |           |            |                |
|               |                 |                |                     | 10        | 3.36       | 12.000         |
|               |                 |                | 8.000               |           |            |                |
| 16            | 2.3886571335    | 9.028          |                     | 11        | 1.68       | 6.000          |
|               |                 |                | 5.000               |           |            |                |
| 17            | 1.1943285667    | 4.514          |                     | 12        | 0.84       | 3.000          |
|               |                 |                | 2.500               |           |            |                |
| 18            | 0.5971642834    | 2.257          |                     | 13        | 0.42       | 1.500          |
|               |                 |                | 1.250               |           |            |                |
| 19            | 0.2985821417    | 1.128          |                     | 14        | 0.21       | 750            |
|               |                 |                | 500                 |           |            |                |
|               |                 |                |                     | 15        | 0.105      | 375            |
|               |                 |                | 250                 |           |            |                |
|               |                 |                |                     | 16        | 0.0525     | 188            |


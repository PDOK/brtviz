# Web Mercator 

## Vergelijking

De vector tiles worden geserveerd volgens het Spherical Mercator tiling schema. De kaartlagen van de BRT-Achtergrondkaart die in de FGDB worden aangeleverd zijn aangegeven m.b.v. het zoomniveau volgens de Nederlandse Praktijkrichtlijn Tiling 1.1. Zie onderstaande tabel voor de relatie tussen het Spherical Mercator (a.k.a. Google) tiling schema en het Nederlandse [Praktijkrichtlijn Tiling 1.1.](http://www.geonovum.nl/wegwijzer/standaarden/praktijkrichtlijn-tiling-11). Zo worden de juiste lagen van de BRT-Achtergrond gebruikt voor het meest toepasselijke zoomniveau in vector tile cache.

| Zoom (Google) | Resolutie        | Schaal      | MaxScaleDenominator | Zoom (RD) | Resolutie  | Schaal         |
|:-------------:|-----------------:|------------:|--------------------:|:---------:|-----------:|---------------:|
|               |                  |             | **250.000.000.000** |           |            |                |
| 0             | 156543,033928041 | 559.055.851 |                     |           |            |                |
|               |                  |             | **500.000.000**     |           |            |                |
| 1             | 78271,516964020  | 279.527.925 |                     |           |            |                |
|               |                  |             | **200.000.000**     |           |            |                |
| 2             | 39135,758482010  | 139.763.963 |                     |           |            |                |
|               |                  |             | **100.000.000**     |           |            |                |
| 3             | 19567,879241005  | 69.881.981  |                     |           |            |                |
|               |                  |             | **50.000.000**      |           |            |                |
| 4             | 9783,939620503   | 34.940.991  |                     |           |            |                |
|               |                  |             | **25.000.000**      |           |            |                |
| 5             | 4891,969810251   | 17.470.495  |                     |           |            |                |
|               |                  |             | **12.500.000**      |           |            |                |
|               |                  |             |                     | 0         | 3440,64    | 12.288.000     |
| 6             | 2445,984905126   | 8.735.248   |                     |           |            |                |
|               |                  |             | **6.500.000**       |           |            |                |
|               |                  |             |                     | 1         | 1720,32    | 6.144.000      |
|               |                  |             | **5.000.000**       |           |            |                |
| 7             | 1222,992452563   | 4.367.624   |                     |           |            |                |
|               |                  |             |                     | 2         | 860,16     | 3.072.000      |
|               |                  |             | **3.000.000**       |           |            |                |
| 8             | 611,496226281    | 2.183.812   |                     |           |            |                |
|               |                  |             |                     | 3         | 430,08     | 1.536.000      |
|               |                  |             | **1.500.000**       |           |            |                |
| 9             | 305,748113141    | 1.091.906   |                     |           |            |                |
|               |                  |             |                     | 4         | 215,04     | 768.000        |
|               |                  |             | **750.000**         |           |            |                |
| 10            | 152,874056570    | 545.953     |                     |           |            |                |
|               |                  |             | **400.000**         |           |            |                |
|               |                  |             |                     | 5         | 107,52     | 384.000        |
| 11            | 76,437028285     | 272.976     |                     |           |            |                |
|               |                  |             | **200.000**         |           |            |                |
|               |                  |             |                     | 6         | 53,76      | 192.000        |
| 12            | 38,218514143     | 136.488     |                     |           |            |                |
|               |                  |             | **100.000**         |           |            |                |
|               |                  |             |                     | 7         | 26,88      | 96.000         |
| 13            | 19,109257071     | 68.244      |                     |           |            |                |
|               |                  |             | **50.000**          |           |            |                |
|               |                  |             |                     | 8         | 13,44      | 48.000         |
| 14            | 9,554628536      | 34.122      |                     |           |            |                |
|               |                  |             | **25.000**          |           |            |                |
|               |                  |             |                     | 9         | 6,72       | 24.000         |
| 15            | 4,777314268      | 17.061      |                     |           |            |                |
|               |                  |             | **12.500**          |           |            |                |
| 16            | 2,388657134      | 8.531       |                     | 10        | 3,36       | 12.000         |
|               |                  |             | **8.000**           |           |            |                |
|               |                  |             |                     | 11        | 1,68       | 6.000          |
|               |                  |             | **5.000**           |           |            |                |
| 17            | 1,194328567      | 4.265       |                     |           |            |                |
|               |                  |             | **4.000**           |           |            |                |
|               |                  |             |                     | 12        | 0,84       | 3.000          |
| 18            | 0,597164283      | 2.133       |                     |           |            |                |
|               |                  |             | **2.000**           |           |            |                |
|               |                  |             |                     | 13        | 0,42       | 1.500          |
| 19            | 0,298582142      | 1.066       |                     |           |            |                |
|               |                  |             | **1.000**           |           |            |                |
|               |                  |             |                     | 14        | 0,21       | 750            |
| 20            | 0,149291071      | 533         |                     |           |            |                |
|               |                  |             | **500**             |           |            |                |
|               |                  |             |                     | 15        | 0,105      | 375            |
| 21            | 0,074645535      | 267         |                     |           |            |                |
|               |                  |             | **250**             |           |            |                |
|               |                  |             |                     | 16        | 0,0525     | 188            |

### Resolutie

De resolutie is het aantal meters per pixel in het centrum van het geldigheidsgebied. Voor het Spherical Mercator tiling schema is dit dus de resolutie op de evenaar. De omtrek van de evenaar is hierbij gedefinieerd als 2 * Pi * 6378137 meter op een afbeelding van 256 pixels = 156543.033928041 meter per pixel. Voor de Nederlandse Praktijkrichtlijn Tiling is dit de resolutie aan de voet van de OLV-Toren in Amersfoort.

### Schaalgetal

Het schaalgetal wordt berekend met een standaard waarde van 0,28 mm per pixel zoals bij OGC-specificaties gebruikelijk is. Met 0,28 mm per pixel zijn er 2,54 x 0,28 pixels = 90,71 ~ 91 dots per inch.

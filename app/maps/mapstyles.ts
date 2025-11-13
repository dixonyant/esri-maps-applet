export const leafletMapStyle1 = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    #map { height: 100vh; width: 100vw; margin: 0; padding: 0; }
    html, body { height: 100%; margin: 0; padding: 0; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script src="https://unpkg.com/esri-leaflet/dist/esri-leaflet.js"></script>
  <script>
    var map = L.map('map').setView([37.75, -122.23], 10);
    L.esri.basemapLayer('Topographic').addTo(map);
    L.esri.featureLayer({
      url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/USA_Major_Cities/FeatureServer/0'
    }).addTo(map);
  </script>
</body>
</html>
`;

export const leafletMapStyle2 = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    #map { height: 100vh; width: 100vw; margin: 0; padding: 0; }
    html, body { height: 100%; margin: 0; padding: 0; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script src="https://unpkg.com/esri-leaflet/dist/esri-leaflet.js"></script>
  <script>
    var map = L.map('map').setView([37.75, -122.23], 10);
    L.esri.basemapLayer('Topographic').addTo(map);
    L.esri.featureLayer({
      url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/USA_Major_Cities/FeatureServer/0'
    }).addTo(map);
  </script>
</body>
</html>
`;

export const maplibreHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    html, body, #map { height: 100%; margin: 0; padding: 0; width: 100vw; }
    #map { position: absolute; top: 0; bottom: 0; width: 100vw; }
  </style>
  <link href="https://unpkg.com/maplibre-gl@3.6.1/dist/maplibre-gl.css" rel="stylesheet" />
</head>
<body>
  <div id="map"></div>
  <script src="https://unpkg.com/maplibre-gl@3.6.1/dist/maplibre-gl.js"></script>
  <script>
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [-122.23, 37.75],
      zoom: 10
    });
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
  </script>
</body>
</html>
`;

export const maplibreArcgisHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    html, body, #map { height: 100%; margin: 0; padding: 0; width: 100vw; }
    #map { position: absolute; top: 0; bottom: 0; width: 100vw; }
  </style>
  <link href="https://unpkg.com/maplibre-gl@3.6.1/dist/maplibre-gl.css" rel="stylesheet">
  <script src="https://unpkg.com/maplibre-gl@3.6.1/dist/maplibre-gl.js"></script>
  <script src="https://unpkg.com/@esri/maplibre-arcgis@1.0.0/dist/umd/maplibre-arcgis.min.js"></script> 
</head>
<body>
  <div id="map"></div>
  <script type=module>
    const accessToken = "{{TOKEN}}";
    const map = new maplibregl.Map({
      container: "map",
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [-122.402, 37.789],
      zoom: 14,
    });

    const basemapStyle = maplibreArcGIS.BasemapStyle.applyStyle(map, {
      style: "arcgis/outdoor",
      token: accessToken,
    });
  </script>
</body>
</html>
`;

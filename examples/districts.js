var map = new ol.Map({
  target: 'map',
  view: new ol.View({
    center: ol.proj.transform([16.37, 48.21], 'EPSG:4326', 'EPSG:3857'),
    zoom: 11
  }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.MapQuest({layer: 'sat'})
    }),
    new ol.layer.Vector({
      source: new ol.source.GeoJSON({
        projection: 'EPSG:3857',
        url: 'http://data.wien.gv.at/daten/geo?service=WFS&version=1.1.0&' +
            'request=GetFeature&typeName=ogdwien:BEZIRKSGRENZEOGD&' +
            'srsName=EPSG:4326&outputFormat=json'
      })
    })
  ]
});
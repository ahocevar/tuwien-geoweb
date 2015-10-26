var map = new ol.Map({
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([16.37, 48.21]),
    zoom: 11
  }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.MapQuest({layer: 'sat'})
    }),
    new ol.layer.Vector({
      source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'http://data.wien.gv.at/daten/geo?service=WFS&version=1.1.0&' +
            'request=GetFeature&typeName=ogdwien:BEZIRKSGRENZEOGD&' +
            'srsName=EPSG:4326&outputFormat=json'
      })
    })
  ]
});

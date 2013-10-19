var map = new ol.Map({
  target: 'map',
  renderer: ol.RendererHint.CANVAS,
  view: new ol.View2D({
    center: ol.proj.transform([16.37, 48.21], 'EPSG:4326', 'EPSG:3857'),
    zoom: 11
  }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.MapQuestOpenAerial()
    }),
    new ol.layer.Vector({
      source: new ol.source.Vector({
        url: 'http://data.wien.gv.at/daten/wfs?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:BEZIRKSGRENZEOGD&srsName=EPSG:4326&outputFormat=json',
        parser: new ol.parser.GeoJSON()
      })
    })
  ]
});
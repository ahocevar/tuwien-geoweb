var map = new ol.Map({
  target: 'map',
  renderer: ol.RendererHint.CANVAS,
  view: new ol.View2D({
    center: ol.proj.transform([16.37, 48.21], 'EPSG:4326', 'EPSG:3857'),
    zoom: 11
  }),
  layers: [new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'http://data.wien.gv.at/daten/wfs?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:BEZIRKSGRENZEOGD&srsName=EPSG:4326&outputFormat=json',
      parser: new ol.parser.GeoJSON()
    }),
    style: new ol.style.Style({
      rules: [new ol.style.Rule({
        symbolizers: [
          new ol.style.Stroke({
            width: 2,
            opacity: 1
          })
        ]
      }), new ol.style.Rule({
        maxResolution: 20,
        symbolizers: [
          new ol.style.Text({
            text: new ol.expr.parse('NAMEK')
          })
        ]
      })]
    })
  })]
});
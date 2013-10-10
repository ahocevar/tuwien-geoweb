var map = new ol.Map({
  target: 'map',
  renderer: ol.RendererHint.CANVAS,
  view: new ol.View2D({
    center: ol.proj.transform([16.37, 48.21], 'EPSG:4326', 'EPSG:3857'),
    zoom: 11
  })
});

var xhr = new XMLHttpRequest();
// Work around OGD Wien issue with wrong encoding for GeoJSON
xhr.overrideMimeType('application/json; charset=iso-8859-15');
xhr.open('GET', 'http://data.wien.gv.at/daten/wfs?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:BEZIRKSGRENZEOGD&srsName=EPSG:4326&outputFormat=json');
xhr.onload = function() {
  map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
      data: xhr.responseText,
      parser: new ol.parser.GeoJSON()
    }),
    style: new ol.style.Style({
      rules: [new ol.style.Rule({
        symbolizers: [new ol.style.Stroke({
          opacity: 1
        }), new ol.style.Fill({
          color: '#F00'
        })]
      }), new ol.style.Rule({
        maxResolution: 25,
        symbolizers: [new ol.style.Text({
          text: ol.expr.parse('NAMEK_NUM')
        })]
      })]
    })
  }));
};
xhr.send();
var map = new ol.Map({
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([16.37, 48.21]),
    zoom: 11
  }),
  layers: [
    new ol.layer.Vector({
      source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'http://data.wien.gv.at/daten/geo?service=WFS&version=1.1.0&' +
          'request=GetFeature&typeName=ogdwien:BEZIRKSGRENZEOGD&' +
          'srsName=EPSG:4326&outputFormat=json'
      }),
      style: (function() {
        var style = new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.6)'
          }),
          stroke: new ol.style.Stroke({
            color: '#319FD3',
            width: 1
          }),
          text: new ol.style.Text({
            font: '12px Calibri,sans-serif',
            fill: new ol.style.Fill({
              color: '#000'
            }),
            stroke: new ol.style.Stroke({
              color: '#fff',
              width: 3
            })
          })
        });
        var styles = [style];
        return function(feature, resolution) {
          style.getText().setText(
              resolution < 20 ? feature.get('NAMEK_NUM') : '');
          return styles;
        };
      })()
    })
  ]
});

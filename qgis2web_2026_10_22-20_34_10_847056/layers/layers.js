var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Geologi_1 = new ol.format.GeoJSON();
var features_Geologi_1 = format_Geologi_1.readFeatures(json_Geologi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologi_1.addFeatures(features_Geologi_1);
var lyr_Geologi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geologi_1, 
                style: style_Geologi_1,
                popuplayertitle: 'Geologi',
                interactive: true,
    title: 'Geologi<br />\
    <img src="styles/legend/Geologi_1_0.png" /> Alluvium<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Geologi_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Geologi_1];
lyr_Geologi_1.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'fcode': 'fcode', 'simobj': 'simobj', 'namobj': 'namobj', 'umurobj': 'umurobj', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', });
lyr_Geologi_1.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'simobj': 'TextEdit', 'namobj': 'TextEdit', 'umurobj': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', });
lyr_Geologi_1.set('fieldLabels', {'objectid_1': 'no label', 'objectid': 'no label', 'fcode': 'no label', 'simobj': 'no label', 'namobj': 'no label', 'umurobj': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', });
lyr_Geologi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
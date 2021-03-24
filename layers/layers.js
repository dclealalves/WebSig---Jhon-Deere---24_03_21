var wms_layers = [];


        var lyr_Mapa_0 = new ol.layer.Tile({
            'title': 'Mapa',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Satlite_1 = new ol.layer.Tile({
            'title': 'Satélite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ContedodeClcioentre08e1m_2 = new ol.format.GeoJSON();
var features_ContedodeClcioentre08e1m_2 = format_ContedodeClcioentre08e1m_2.readFeatures(json_ContedodeClcioentre08e1m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContedodeClcioentre08e1m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContedodeClcioentre08e1m_2.addFeatures(features_ContedodeClcioentre08e1m_2);
var lyr_ContedodeClcioentre08e1m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContedodeClcioentre08e1m_2, 
                style: style_ContedodeClcioentre08e1m_2,
                interactive: true,
    title: 'Conteúdo de Cálcio (entre 0.8 e 1 m) <br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_0.png" /> Baixa <br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_1.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_2.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_3.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_4.png" /> Médio<br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_5.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_6.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_7.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre08e1m_2_8.png" /> Alta<br />'
        });
var format_ContedodeClcioentre0e02m_3 = new ol.format.GeoJSON();
var features_ContedodeClcioentre0e02m_3 = format_ContedodeClcioentre0e02m_3.readFeatures(json_ContedodeClcioentre0e02m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContedodeClcioentre0e02m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContedodeClcioentre0e02m_3.addFeatures(features_ContedodeClcioentre0e02m_3);
var lyr_ContedodeClcioentre0e02m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContedodeClcioentre0e02m_3, 
                style: style_ContedodeClcioentre0e02m_3,
                interactive: true,
    title: 'Conteúdo de Cálcio (entre 0 e 0.2 m) <br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_0.png" /> Baixa <br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_1.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_2.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_3.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_4.png" /> Média<br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_5.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_6.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_7.png" /> <br />\
    <img src="styles/legend/ContedodeClcioentre0e02m_3_8.png" /> Alta<br />'
        });
var format_ClassificaodoTipodeSoloentre08e1m_4 = new ol.format.GeoJSON();
var features_ClassificaodoTipodeSoloentre08e1m_4 = format_ClassificaodoTipodeSoloentre08e1m_4.readFeatures(json_ClassificaodoTipodeSoloentre08e1m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClassificaodoTipodeSoloentre08e1m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassificaodoTipodeSoloentre08e1m_4.addFeatures(features_ClassificaodoTipodeSoloentre08e1m_4);
var lyr_ClassificaodoTipodeSoloentre08e1m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ClassificaodoTipodeSoloentre08e1m_4, 
                style: style_ClassificaodoTipodeSoloentre08e1m_4,
                interactive: true,
    title: 'Classificação do Tipo de Solo (entre 0.8 e 1 m)<br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre08e1m_4_0.png" /> Argila <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre08e1m_4_1.png" /> <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre08e1m_4_2.png" /> <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre08e1m_4_3.png" /> Silte<br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre08e1m_4_4.png" /> <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre08e1m_4_5.png" /> <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre08e1m_4_6.png" /> Areia<br />'
        });
var format_ClassificaodoTipodeSoloentre0e02m_5 = new ol.format.GeoJSON();
var features_ClassificaodoTipodeSoloentre0e02m_5 = format_ClassificaodoTipodeSoloentre0e02m_5.readFeatures(json_ClassificaodoTipodeSoloentre0e02m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClassificaodoTipodeSoloentre0e02m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassificaodoTipodeSoloentre0e02m_5.addFeatures(features_ClassificaodoTipodeSoloentre0e02m_5);
var lyr_ClassificaodoTipodeSoloentre0e02m_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ClassificaodoTipodeSoloentre0e02m_5, 
                style: style_ClassificaodoTipodeSoloentre0e02m_5,
                interactive: true,
    title: 'Classificação do Tipo de Solo (entre 0 e 0.2 m)<br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre0e02m_5_0.png" /> Argila <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre0e02m_5_1.png" /> <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre0e02m_5_2.png" /> <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre0e02m_5_3.png" /> Silte<br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre0e02m_5_4.png" /> <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre0e02m_5_5.png" /> <br />\
    <img src="styles/legend/ClassificaodoTipodeSoloentre0e02m_5_6.png" /> Areia<br />'
        });

lyr_Mapa_0.setVisible(true);lyr_Satlite_1.setVisible(true);lyr_ContedodeClcioentre08e1m_2.setVisible(true);lyr_ContedodeClcioentre0e02m_3.setVisible(true);lyr_ClassificaodoTipodeSoloentre08e1m_4.setVisible(true);lyr_ClassificaodoTipodeSoloentre0e02m_5.setVisible(true);
var layersList = [lyr_Mapa_0,lyr_Satlite_1,lyr_ContedodeClcioentre08e1m_2,lyr_ContedodeClcioentre0e02m_3,lyr_ClassificaodoTipodeSoloentre08e1m_4,lyr_ClassificaodoTipodeSoloentre0e02m_5];
lyr_ContedodeClcioentre08e1m_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Poligo': 'FID_Poligo', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'COUNT': 'COUNT', 'AREA': 'AREA', 'MIN': 'MIN', 'MAX': 'MAX', 'RANGE': 'RANGE', 'MEAN': 'MEAN', 'STD': 'STD', 'SUM': 'SUM', });
lyr_ContedodeClcioentre0e02m_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Poligo': 'FID_Poligo', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'COUNT': 'COUNT', 'AREA': 'AREA', 'MIN': 'MIN', 'MAX': 'MAX', 'RANGE': 'RANGE', 'MEAN': 'MEAN', 'STD': 'STD', 'SUM': 'SUM', });
lyr_ClassificaodoTipodeSoloentre08e1m_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Poligo': 'FID_Poligo', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'COUNT': 'COUNT', 'AREA': 'AREA', 'MIN': 'MIN', 'MAX': 'MAX', 'RANGE': 'RANGE', 'MEAN': 'MEAN', 'STD': 'STD', 'SUM': 'SUM', });
lyr_ClassificaodoTipodeSoloentre0e02m_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Poligo': 'FID_Poligo', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'COUNT': 'COUNT', 'AREA': 'AREA', 'MIN': 'MIN', 'MAX': 'MAX', 'RANGE': 'RANGE', 'MEAN': 'MEAN', 'STD': 'STD', 'SUM': 'SUM', });
lyr_ContedodeClcioentre08e1m_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Poligo': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'TextEdit', 'COUNT': 'TextEdit', 'AREA': 'TextEdit', 'MIN': 'TextEdit', 'MAX': 'TextEdit', 'RANGE': 'TextEdit', 'MEAN': 'TextEdit', 'STD': 'TextEdit', 'SUM': 'TextEdit', });
lyr_ContedodeClcioentre0e02m_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Poligo': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'TextEdit', 'COUNT': 'TextEdit', 'AREA': 'TextEdit', 'MIN': 'TextEdit', 'MAX': 'TextEdit', 'RANGE': 'TextEdit', 'MEAN': 'TextEdit', 'STD': 'TextEdit', 'SUM': 'TextEdit', });
lyr_ClassificaodoTipodeSoloentre08e1m_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Poligo': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'TextEdit', 'COUNT': 'TextEdit', 'AREA': 'TextEdit', 'MIN': 'TextEdit', 'MAX': 'TextEdit', 'RANGE': 'TextEdit', 'MEAN': 'TextEdit', 'STD': 'TextEdit', 'SUM': 'TextEdit', });
lyr_ClassificaodoTipodeSoloentre0e02m_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Poligo': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'TextEdit', 'COUNT': 'TextEdit', 'AREA': 'TextEdit', 'MIN': 'TextEdit', 'MAX': 'TextEdit', 'RANGE': 'TextEdit', 'MEAN': 'TextEdit', 'STD': 'TextEdit', 'SUM': 'TextEdit', });
lyr_ContedodeClcioentre08e1m_2.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Poligo': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'COUNT': 'no label', 'AREA': 'no label', 'MIN': 'no label', 'MAX': 'header label', 'RANGE': 'no label', 'MEAN': 'no label', 'STD': 'no label', 'SUM': 'no label', });
lyr_ContedodeClcioentre0e02m_3.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Poligo': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'COUNT': 'no label', 'AREA': 'no label', 'MIN': 'no label', 'MAX': 'header label', 'RANGE': 'no label', 'MEAN': 'no label', 'STD': 'no label', 'SUM': 'no label', });
lyr_ClassificaodoTipodeSoloentre08e1m_4.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Poligo': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'COUNT': 'no label', 'AREA': 'no label', 'MIN': 'no label', 'MAX': 'header label', 'RANGE': 'no label', 'MEAN': 'no label', 'STD': 'no label', 'SUM': 'no label', });
lyr_ClassificaodoTipodeSoloentre0e02m_5.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Poligo': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'COUNT': 'no label', 'AREA': 'no label', 'MIN': 'no label', 'MAX': 'header label', 'RANGE': 'no label', 'MEAN': 'no label', 'STD': 'no label', 'SUM': 'no label', });
lyr_ClassificaodoTipodeSoloentre0e02m_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
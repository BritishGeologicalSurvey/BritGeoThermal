var openLayersMap = {};
openLayersMap.init = function()
{
   map = new OpenLayers.Map('map');
	wms = new OpenLayers.Layer.WMS(
	  "OpenLayers WMS",
	  "http://vmap0.tiles.osgeo.org/wms/vmap0",
	  {'layers':'basic'} );
	map.addLayer(wms);
	map.setCenter(new OpenLayers.LonLat(-2.54,54), 6);
	openLayersMap.addMarkers(map, wms);
	return true;

    var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
}

openLayersMap.addMarkers = function(map, wms)
{
    var epsg4326 =  new OpenLayers.Projection("EPSG:4326"); //WGS 1984 projection
	var projectTo = map.getProjectionObject(); //The map projection (Spherical Mercator)
	var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
    // Define markers as "features" of the vector layer:
	
    var EastgateNo1 = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(2.096389,54.738611).transform(epsg4326, projectTo),
            {description:'<table><tr><th>Name</th><td>Eastgate No1</td></tr><tr><th>Lat</th><td>54.738611</td></tr><tr><th>Lng</th><td>2.096389</td></tr><tr><th>Surface</th><td>250.867</td></tr><tr><th>Depth (mbgl)</th><td>995</td></tr><tr><th>Date</th><td>2004</td></table>'} ,
            {externalGraphic: '/images/red.png', graphicHeight: 20, graphicWidth: 20, graphicXOffset:-10, graphicYOffset:-20  }
        );    
    vectorLayer.addFeatures(EastgateNo1);
    
    var SouthamptonNo1 = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(1.409167,50.906667).transform(epsg4326, projectTo),
            {description:'<table><tr><th>Name</th><td>Southampton No1</td></tr><tr><th>Lat</th><td>50.906667</td></tr><tr><th>Lng</th><td>1.409167</td></tr><tr><th>Surface</th><td>3.341</td></tr><tr><th>Depth (mbgl)</th><td>1827</td></tr><tr><th>Date</th><td>1981</td></table>'} ,
            {externalGraphic: '/images/red.png', graphicHeight: 20, graphicWidth: 20, graphicXOffset:-10, graphicYOffset:-20  }
        );    
    vectorLayer.addFeatures(SouthamptonNo1);

    var ScienceCentral = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(1.62614822,54.97313095).transform(epsg4326, projectTo),
            {description:'<table><tr><th>Name</th><td>Science Central</td></tr><tr><th>Lat</th><td>54.97313095</td></tr><tr><th>Lng</th><td>(1.62614822</td></tr><tr><th>Surface</th><td>73</td></tr><tr><th>Depth (mbgl)</th><td>1820</td></tr><tr><th>Date</th><td>2011</td></table>'} ,
            {externalGraphic: '/images/red.png', graphicHeight: 20, graphicWidth: 20, graphicXOffset:-10, graphicYOffset:-20  }
        );    
    vectorLayer.addFeatures(ScienceCentral);
	
	var MarchwoodNo1 = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(1.432222,50.898056).transform(epsg4326, projectTo),
            {description:'<table><tr><th>Name</th><td>Marchwood No1</td></tr><tr><th>Lat</th><td>50.898056</td></tr><tr><th>Lng</th><td>1.432222</td></tr><tr><th>Surface</th><td>8.4</td></tr><tr><th>Depth (mbgl)</th><td>2615</td></tr><tr><th>Date</th><td>1979</td></table>'} ,
            {externalGraphic: '/images/red.png', graphicHeight: 20, graphicWidth: 20, graphicXOffset:-10, graphicYOffset:-20  }
        );    
    vectorLayer.addFeatures(MarchwoodNo1);
	
	var Rookhope = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(2.097222,54.78).transform(epsg4326, projectTo),
            {description:'<table><tr><th>Name</th><td>Rookhope</td></tr><tr><th>Lat</th><td>54.78</td></tr><tr><th>Lng</th><td>2.097222</td></tr><tr><th>Surface</th><td>323</td></tr><tr><th>Depth (mbgl)</th><td>999</td></tr><tr><th>Date</th><td>1961</td></table>'} ,
            {externalGraphic: '/images/red.png', graphicHeight: 20, graphicWidth: 20, graphicXOffset:-10, graphicYOffset:-20  }
        );    
    vectorLayer.addFeatures(Rookhope);
	
	var Harton = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(-1.38274704347,54.983432331).transform(epsg4326, projectTo),
            {description:'<table><tr><th>Name</th><td>Harton</td></tr><tr><th>Lat</th><td>54.983432331</td></tr><tr><th>Lng</th><td>-1.38274704347</td></tr><tr><th>Surface</th><td>20.1</td></tr><tr><th>Depth (mbgl)</th><td>1769</td></tr><tr><th>Date</th><td>1960</td></table>'} ,
            {externalGraphic: '/images/red.png', graphicHeight: 20, graphicWidth: 20, graphicXOffset:-10, graphicYOffset:-20  }
        );    
    vectorLayer.addFeatures(Harton);
	
	var Woodland = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(1.858333,54.643611).transform(epsg4326, projectTo),
            {description:'<table><tr><th>Name</th><td>Woodland</td></tr><tr><th>Lat</th><td>54.643611</td></tr><tr><th>Lng</th><td>1.858333</td></tr><tr><th>Surface</th><td>284</td></tr><tr><th>Depth (mbgl)</th><td>500</td></tr><tr><th>Date</th><td>1962</td></table>'} ,
            {externalGraphic: '/images/red.png', graphicHeight: 20, graphicWidth: 20, graphicXOffset:-10, graphicYOffset:-20  }
        );    
    vectorLayer.addFeatures(Woodland);
	
	var SealSands = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(1.168611,54.606667).transform(epsg4326, projectTo),
            {description:'<table><tr><th>Name</th><td>Seal Sands</td></tr><tr><th>Lat</th><td>54.606667</td></tr><tr><th>Lng</th><td>1.168611</td></tr><tr><th>Surface</th><td>45.72</td></tr><tr><th>Depth (mbgl)</th><td>4169</td></tr><tr><th>Date</th><td>1975</td></table>'} ,
            {externalGraphic: '/images/red.png', graphicHeight: 20, graphicWidth: 20, graphicXOffset:-10, graphicYOffset:-20  }
        );    
    vectorLayer.addFeatures(SealSands);

   
    map.addLayer(vectorLayer);
 
    
    //Add a selector control to the vectorLayer with popup functions
    var controls = {
      selector: new OpenLayers.Control.SelectFeature(vectorLayer, { onSelect: openLayersMap.createPopup, onUnselect: openLayersMap.destroyPopup })
    };
	
	map.addControl(controls['selector']);
    controls['selector'].activate();

}

openLayersMap.createPopup = function(feature) {
	feature.popup = new OpenLayers.Popup.FramedCloud("pop",
	feature.geometry.getBounds().getCenterLonLat(),
	null,
	'<div class="markerContent">'+feature.attributes.description+'</div>',
  	null,
    false,
    function() { controls['selector'].unselectAll(); }
    );
	map.addPopup(feature.popup);
}

openLayersMap.destroyPopup = function(feature) {
	feature.popup.destroy();
	feature.popup = null;
}
$(document).ready(openLayersMap.init);  
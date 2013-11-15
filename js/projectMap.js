// JavaScript Document
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
}

openLayersMap.addMarkers = function(map, wms)
{
	//style the markers
	 var myStyles = new OpenLayers.StyleMap({
		"default": new OpenLayers.Style({
			pointRadius: "${type}", // sized according to type attribute
			fillColor: "#ffcc66",
			strokeColor: "#ff9933",
			strokeWidth: 2,
			graphicZIndex: 1
		}),
		"select": new OpenLayers.Style({
			fillColor: "#66ccff",
			strokeColor: "#3399ff",
			graphicZIndex: 2
		})
	});
	//make the marker array
	var features = [];
	features[0] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(2.096389,54.738611), {type: 5});	
	features[1] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(1.409167,50.906667), {type: 2});	
	features[2] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(1.62614822,54.97313095), {type: 2});	
	features[3] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(1.432222,50.898056), {type: 2});	
	features[4] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(2.097222,54.78), {type: 2});	
	features[5] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(1.858333,54.643611), {type: 2});	
	features[6] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(1.168611,54.606667), {type: 2});	
	var points = new OpenLayers.Layer.Vector("Points", {
		styleMap: myStyles,
		rendererOptions: {zIndexing: true}
	});
	points.events.register("featureselected", points, openLayersMap.selected);
	points.addFeatures(features);
	map.addLayers([wms, points]);
	// Create a select feature control and add it to the map.
	var select = new OpenLayers.Control.SelectFeature(points);
	map.addControl(select);
	select.activate();
	return true;
}

openLayersMap.selected = function(evt) {
    alert(evt.feature.id + " selected on " + this.name);
}
$(document).ready(openLayersMap.init);



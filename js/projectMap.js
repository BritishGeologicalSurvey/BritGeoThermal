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
	//male the marker array
	var features = [];
	features[0] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(-3,55.3), {type: 5});	
	features[1] = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(-4,53.3), {type: 2});	
	var points = new OpenLayers.Layer.Vector("Points", {
		styleMap: myStyles,
		rendererOptions: {zIndexing: true}
	});
	points.events.register("featureselected", points, openLayersMap.selected);
	points.addFeatures(features);
	map.addLayers([wms, points]);
	// Create a select feature control and add it to the map.
	var select = new OpenLayers.Control.SelectFeature(points, {hover: true});
	map.addControl(select);
	select.activate();
	return true;
}

openLayersMap.selected = function(evt) {
    alert(evt.feature.id + " selected on " + this.name);
}
$(document).ready(openLayersMap.init);


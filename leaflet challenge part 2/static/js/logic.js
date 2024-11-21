// Store our API endpoint as queryUrl.
let plateQueryUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json"
let plates = new L.layerGroup();

// Perform a GET request to the query URL/
d3.json(plateQueryUrl).then(function (plateData) {

  // Create a GeoJSON layer that contains the features array on the tectonicPlate object.
  // Run the onEachFeature function once for each piece of data in the array.
L.geoJSON(plateData, {
    onEachFeature: onEachFeature
  }).addTo(plates);
});

let overlayMaps = {
  TectonicPlates: plates
};

l.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

function onEachFeature(feature, layer) {
  layer.bindPopup(`<h3>${feature.properties.Code}</h3><hr><p>${(feature.properties.PlateName)}</p>`);
};
var map = L.map("map", {
  center: [18.80321109281143, 98.94983891146916],
  zoom: 14,
});

// base layers
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

var Esri_WorldImagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

var groad = L.tileLayer("https://{s}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});

var ghybridge = L.tileLayer(
  "https://{s}.google.com/vt/lyrs=y,m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

var gterrain = L.tileLayer(
  "https://{s}.google.com/vt/lyrs=t,m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

// overlay layers
var province = L.tileLayer.wms("http://rti2dss.com:8080/geoserver/th/wms?", {
  layers: "th:province_4326",
  transparent: true,
  format: "image/png",
});

var amp = L.tileLayer.wms("http://rti2dss.com:8080/geoserver/th/wms?", {
  layers: "th:amphoe_4326",
  transparent: true,
  format: "image/png",
});

var tam = L.tileLayer.wms("http://rti2dss.com:8080/geoserver/th/wms?", {
  layers: "th:tambon_4326",
  transparent: true,
  format: "image/png",
});

var baseLayers = {
  "แผนที่ OSM": osm.addTo(map),
  "แผนที่ ESRI": Esri_WorldImagery,
  "แผนที่ถนน google": groad,
  "แผนที่ผสม google": ghybridge,
  "แผนที่ภูมิประเทศ google": gterrain,
};

var overLayers = {
  "ขอบเขต จังหวัด": province,
  "ขอบเขต อำเภอ": amp,
  "ขอบเขต ตำบล": tam,
};

var control = L.control.layers(baseLayers, overLayers).addTo(map);

// control.addTo(map)
// osm.addTo(map);
// province.addTo(map);
// amp.addTo(map);
// tam.addTo(map);

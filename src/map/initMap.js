const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 18,
    minZoom: 8,
    attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>',
});

const Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
    maxZoom: 18,
    minZoom: 8,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
});

const listBaseMaps = {
    'OSM Standard': osm,
    'Satellite': Satellite
};

export const map = L.map('map',{
    layers: [osm],
    center: [34.5, -4.8],
    zoom: 9,
});

export const control = L.control.layers(listBaseMaps).addTo(map);
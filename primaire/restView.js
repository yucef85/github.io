import { map } from './map/initMap.js';

export const restView = L.control.resetView({
    position: "topleft",
    title: "Reset view",
    latlng: L.latLng([34.5, -4.8]),
    zoom: 9,
}).addTo(map);
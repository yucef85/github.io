import { map, listBaseMaps } from '../modules/initMap.js';
import { legend } from '../modules/legend.js';
import { homeButton } from '../modules/homeButton.js';
import { search } from './search.js';

import { homeUrl, etabPrimLegend } from '../modules/variable.js';

init();

function init() {

    map.setZoom(9);
    L.control.layers(listBaseMaps).addTo(map);
    homeButton({ href: homeUrl }).addTo(map);
    legend({ legends: etabPrimLegend }).addTo(map);
    L.control.resetView({ latlng: L.latLng([34.5, -4.8]), zoom: 9 }).addTo(map);
    map.addControl(search);

}
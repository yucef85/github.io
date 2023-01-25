import { map, control } from './modules/map/initMap.js';
import { taounateBorderLayer } from './modules/map/overlayMaps.js';
import { primMereGroup, primSatRoadGroup } from './modules/map/group.js';
import { hideShowLayerZoomLevel, ShowhideLayerZoomLevel } from './modules/zoom/zoom.js';

init();

function init() {
    map;
    control;
    taounateBorderLayer.addTo(map);
    hideShowLayerZoomLevel(map, taounateBorderLayer, 10);
    ShowhideLayerZoomLevel(map, primMereGroup, 10);
    ShowhideLayerZoomLevel(map, primSatRoadGroup, 13);
}
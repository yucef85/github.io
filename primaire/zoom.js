import { map } from './map/initMap.js';
import { listEtabPrim, roadsLayer } from './map/overlayMaps.js';

export function zoomToBounds(e){
    var items = [];
    var itemsPop = [];
    listEtabPrim.eachLayer((layer) => {
        if (layer.feature.properties.CD_ETABR === e.target.feature.properties.CD_ETABR) {
            items.push(layer.getLatLng());
            itemsPop.push(layer);
        }
    })
    roadsLayer.eachLayer((layer) => {
        if (layer.feature.properties.CD_ETABR === e.target.feature.properties.CD_ETABR) {
            items.push(layer.getBounds());
        }
    })
    var bounds = L.latLngBounds(items)
    map.fitBounds(bounds)
    itemsPop.forEach((item) => {
        item.bindPopup(`
        <b> ${item.feature.properties.NOM_ETABA} </b>
        <br> النوع : ${item.feature.properties.NETAB}
        <br> الرمز : ${item.feature.properties.CD_ETAB}`,
        { autoClose: false }).openPopup();
    })
}
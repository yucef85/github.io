import { map } from '../modules/initMap.js';
import { listEtabColl } from './layers.js';

export function zoomToBounds(e){
    var items = [];
    var itemsPop = [];
    listEtabColl.eachLayer((layer) => {
        if (layer.feature.properties.CD_ETAB === e.target.feature.properties.CD_ETAB) {
            items.push(layer.getLatLng());
            itemsPop.push(layer);
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
import { map } from '../map/initMap.js';
import { etab_200, etab_202, etab_203, etab_209, roadsLayer } from '../map/overlayMaps.js';


export function hideShowLayerZoomLevel(map, layerName, ZoomLevel){
    map.on('zoomend', () => {
            if (map.getZoom() < ZoomLevel && !map.hasLayer(layerName)) {
                map.addLayer(layerName);
            }
            if (map.getZoom() >= ZoomLevel && map.hasLayer(layerName)) {
                map.removeLayer(layerName);
            }
        })
}

export function ShowhideLayerZoomLevel(map, layerName, ZoomLevel){
    map.on('zoomend', () => {
            if (map.getZoom() >= ZoomLevel && !map.hasLayer(layerName)) {
                map.addLayer(layerName);
            }
            if (map.getZoom() < ZoomLevel && map.hasLayer(layerName)) {
                map.removeLayer(layerName);
            }
        })
}

export function zoomToBounds(e){
    var items = [];
    var itemsPop = [];
    etab_200.eachLayer((layer) => {
        if (layer.feature.properties.CD_ETABR === e.target.feature.properties.CD_ETABR) {
            items.push(layer.getLatLng());
            itemsPop.push(layer);
        }
    })
    etab_202.eachLayer((layer) => {
        if (layer.feature.properties.CD_ETABR === e.target.feature.properties.CD_ETABR) {
            items.push(layer.getLatLng());
            itemsPop.push(layer);
        }
    })
    etab_203.eachLayer((layer) => {
        if (layer.feature.properties.CD_ETABR === e.target.feature.properties.CD_ETABR) {
            items.push(layer.getLatLng());
            itemsPop.push(layer);
        }
    })
    etab_209.eachLayer((layer) => {
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
    map.fitBounds(bounds, { padding : [45, 45] })
    itemsPop.forEach((item) => {
        item.bindPopup(`
                        <b> ${item.feature.properties.NOM_ETABA} </b>
                        <br> النوع : ${item.feature.properties.NETAB}
                        <br> الرمز : ${item.feature.properties.CD_ETAB}`,
            { autoClose: false, autoPan: false })
            .openPopup();
    })
}
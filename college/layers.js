import listEtabCollege from '../db/listEtabCollege.geojson' with {type: 'json'};
import taounateBorderJSON from '../db/TAOUNATE.geojson' with {type: 'json'};
import { markerBlue, markerGreen, markerRed, markerOrange } from '../modules/marker.js';
import { zoomToBounds } from './zoom.js';
//import { selectRoad, resetSelectRoad } from './event.js';
import { map } from '../modules/initMap.js';

        
export const taounateBorderLayer = L.geoJSON(taounateBorderJSON,{
    style:{
        "color": "DarkSlateGray",
    },
    onEachFeature: () => {
        map.on('zoomend', () => {
            var currentZoom = map.getZoom();
            taounateBorderLayer.eachLayer((layer) => {
                if(currentZoom >= 10 && map.hasLayer(layer)) {
                    map.removeLayer(layer);
                } 
                if(currentZoom < 10 && !map.hasLayer(layer)) {
                    map.addLayer(layer);
                }
            })
        })
    }
}).addTo(map);

export const listEtabColl = L.geoJSON(listEtabCollege,{
    pointToLayer: (feature, latlng) => {
        if (feature.properties.CD_NETAB == 300 && feature.properties.INTERNAT) {
            return L.marker(latlng, { icon: markerGreen });  
        } else {
            return L.marker(latlng, { icon: markerBlue });
        }
    },
    onEachFeature: (feature, layer) => {
        /*map.on('zoomend', () => {
            var currentZoom = map.getZoom();
            listEtabCollege.eachLayer((layer) => {
                if(layer.feature.properties.CD_NETAB === 300) {
                    if(currentZoom < 12 && map.hasLayer(layer)) {
                        map.removeLayer(layer);
                    } 
                    if(currentZoom >= 12 && !map.hasLayer(layer)) {
                        map.addLayer(layer);
                    }
                } else {
                    if(currentZoom < 10 && map.hasLayer(layer)) {
                        map.removeLayer(layer);
                    } 
                    if(currentZoom >= 10 && !map.hasLayer(layer)) {
                        map.addLayer(layer);
                    }
                }
            })
        }),*/
        layer.on('click', (e) => {
            zoomToBounds(e);
        }),
        layer.feature.properties.searchItem = layer.feature.properties.CD_ETAB
                                            + ' ' + layer.feature.properties.NOM_ETABL
                                            + ' ' + layer.feature.properties.NOM_ETABA;
    }
}).addTo(map);

import listEtabPrimaire from '../../db/listEtabPrimaire.geojson' assert {type: 'json'};
import wayJSON from '../../db/WAY.geojson' assert {type: 'json'};
import taounateBorderJSON from '../../db/TAOUNATE.geojson' assert {type: 'json'};
import { markerBlue, markerGreen, markerRed, markerOrange } from '../modules/marker.js';
import { zoomToBounds } from './zoom.js';
import { selectRoad, resetSelectRoad } from './event.js';
import { map } from '../modules/initMap.js';

export const roadsLayer = L.geoJSON(wayJSON,{
    style: {opacity: 0},
    onEachFeature: () => {
        map.on('zoomend', () => {
            var currentZoom = map.getZoom();
            roadsLayer.eachLayer((layer) => {
                if(currentZoom < 12 && map.hasLayer(layer)) {
                    map.removeLayer(layer);
                } 
                if(currentZoom >= 12 && !map.hasLayer(layer)) {
                    map.addLayer(layer);
                }
            })
        })
    }
}).addTo(map);
        
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

export const listEtabPrim = L.geoJSON(listEtabPrimaire,{
    pointToLayer: (feature, latlng) => {
        switch (feature.properties.CD_NETAB) {
            case 200 : return L.marker(latlng, { icon: markerBlue });
            case 202 : return L.marker(latlng, { icon: markerRed });
            case 203 : return L.marker(latlng, { icon: markerGreen });
            case 209 : return L.marker(latlng, { icon: markerOrange });
        }
    },
    onEachFeature: (feature, layer) => {
        map.on('zoomend', () => {
            var currentZoom = map.getZoom();
            listEtabPrim.eachLayer((layer) => {
                if(layer.feature.properties.CD_NETAB === 203) {
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
        }),
        layer.on('click', (e) => {
            resetSelectRoad();
            selectRoad(e);
            zoomToBounds(e);
        }),
        layer.feature.properties.searchItem = layer.feature.properties.CD_ETAB
                                            + ' ' + layer.feature.properties.NOM_ETABL
                                            + ' ' + layer.feature.properties.NOM_ETABA;
    }
}).addTo(map);
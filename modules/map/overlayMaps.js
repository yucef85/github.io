import listEtabPrimaire from '../../db/listEtabPrimaire.geojson' assert {type: 'json'};
import wayJSON from '../../db/WAY.geojson' assert {type: 'json'};
import taounateBorderJSON from '../../db/TAOUNATE.geojson' assert {type: 'json'};
import { markerBlue, markerGreen, markerRed, markerOrange } from '../marker/marker.js';
import { zoomToBounds } from '../zoom/zoom.js'
import { selectRoad, resetSelectRoad } from '../event/event.js';

export const roadsLayer = L.geoJSON(wayJSON,{
    style: {opacity: 0},
});
        
export const taounateBorderLayer = L.geoJSON(taounateBorderJSON,{
    style:{
        "color": "DarkSlateGray",
    }
});

export var etab_200 = L.geoJSON(listEtabPrimaire, {
    filter : (feature) => {
        return (feature.properties.CD_NETAB === 200);
    },
    pointToLayer : (feature, latlng) => {
        return L.marker(latlng, { icon: markerBlue });
    },
    onEachFeature: (feature, layer) => {
        layer.on({
            'click': (e) => {
                zoomToBounds(e);
            }
        }
        )
    }
});

export var etab_202 = L.geoJSON(listEtabPrimaire, {
    filter : (feature) => {
        return (feature.properties.CD_NETAB === 202);
    },
    pointToLayer : (feature, latlng) => {
        return L.marker(latlng, { icon: markerRed });
    },
    onEachFeature: (feature, layer) => {
        layer.on({
            'click': (e) => {
                resetSelectRoad(),
                selectRoad(e),
                zoomToBounds(e);
            }
        });
    }
    
});

export var etab_203 = L.geoJSON(listEtabPrimaire, {
    filter : (feature) => {
        return (feature.properties.CD_NETAB === 203);
    },
    pointToLayer : (feature, latlng) => {
        return L.marker(latlng, { icon: markerGreen });
    },
    onEachFeature: (feature, layer) => {
        layer.on({
            'click': (e) => {
                resetSelectRoad(),
                selectRoad(e),
                zoomToBounds(e);
            }
        });
    }
});

export var etab_209 = L.geoJSON(listEtabPrimaire, {
    filter : (feature) => {
        return (feature.properties.CD_NETAB === 209);
    },
    pointToLayer : (feature, latlng) => {
        return L.marker(latlng, { icon: markerOrange });
    },
    onEachFeature: (feature, layer) => {
        layer.on({
            'click': (e) => {
                zoomToBounds(e);
            }
        });
    }
});
import { roadsLayer } from './map/overlayMaps.js';

var selectLayer;
var layer;

export function selectRoad(e){

    roadsLayer.eachLayer(function(layer){
        if(layer.feature.properties.CD_ETABR === e.target.feature.properties.CD_ETABR){ 
            layer.setStyle({
                color: '#E9AE3B',
                weight: 5,
                opacity: 1
            });
        } 
    })
    selectLayer = layer;
}

export function resetSelectRoad(){
    roadsLayer.resetStyle(selectLayer)
}
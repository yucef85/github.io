import { map } from './map/initMap.js';
import { etabPrimIcon } from './variable.js';

export var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    
    var div = L.DomUtil.create('div', 'legend');
    Object.keys(etabPrimIcon).forEach((key) => {
        div.innerHTML += `<i style="background-image: url(${etabPrimIcon[key]})"></i><span>${key}</span><br>`;
    })
    return div;
};

legend.addTo(map);

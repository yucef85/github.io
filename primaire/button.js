import { map } from './map/initMap.js';

export var buttonHome = L.control({position: 'bottomleft'});

buttonHome.onAdd = function (map) {
    var div = L.DomUtil.create('div', '');
        div.innerHTML += '<a class= "home-button" href="../index.html" title="home" ></a>';
    return div;
};

buttonHome.addTo(map);
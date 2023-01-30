import { map } from './initMap.js';
import { urlHome } from './variable.js';

L.Control.HomeButton = L.Control.extend({

    options: {
        position: 'bottomleft',
        href: '#',
        title: 'title',
    },

    onAdd: function(map) {

        this._map = map
        this._container = L.DomUtil.create('div', 'leaflet-control-homeButton leaflet-bar leaflet-control')
        this._link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', this._container)
        this._link.title = this.options.title
        this._link.href = this.options.href
        this._link.setAttribute("role", "button")
        this._icon = L.DomUtil.create("span", "leaflet-control-homeButton-icon", this._link)

        return this._container
    },
});

L.control.homeButton = function(options) {
    return new L.Control.HomeButton(options)
};

export const home = L.control.homeButton({
    position: 'bottomleft',
    title: 'home',
    href: urlHome
}).addTo(map)
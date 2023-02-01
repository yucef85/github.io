L.Control.Legend = L.Control.extend({
    options: {
        position: 'bottomright',
        legends: [],
    },
    onAdd: function (map) {

        this._map = map
        this._container = L.DomUtil.create('div', 'leaflet-control-legend leaflet-bar leaflet-control')

        for(let i=0; i < this.options.legends.length; i++) {
            this._icon = L.DomUtil.create('i', 'leaflet-bar-part leaflet-bar-part-single', this._container)
            this._icon.style.backgroundImage = `url(${this.options.legends[i].marker})`
            this._text = L.DomUtil.create('span', 'leaflet-bar-part leaflet-bar-part-single', this._container)
            this._text.innerHTML += `${this.options.legends[i].label}<br>`
            
        }

        return  this._container;
    },
});

export const legend = function(options) {
    return new L.Control.Legend(options);
};
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: '',
        iconSize:   [38, 95],
        iconAnchor: [22, 60],
        popupAnchor:    [-4, -36],

    }
});

var LeafSmallIcon = L.Icon.extend({
    options: {
        shadowUrl: '',
        iconSize:   [38, 95],
        iconAnchor: [22, 60],
        popupAnchor:    [-4, -36],

    }
});

export const markerBlue = new LeafIcon({
    iconUrl: '../img/markerBlue.svg'
});

export const markerGreen = new LeafIcon({
    iconUrl: '../../img/markerGreen.svg'
});

export const markerRed = new LeafIcon({
    iconUrl: '../../img/markerRed.svg'
});

export const markerOrange = new LeafIcon({
    iconUrl: '../../img/markerOrange.svg'
});
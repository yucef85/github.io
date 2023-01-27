var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: './img/shadow.svg',
        iconSize:   [24, 50],
        iconAnchor: [15, 40],
        popupAnchor:    [-4, -36],
    }
});

export const markerBlue = new LeafIcon({
    iconUrl: './img/markerBlue.svg'
});

export const markerGreen = new LeafIcon({
    iconUrl: './img/markerGreen.svg'
});

export const markerRed = new LeafIcon({
    iconUrl: './img/markerRed.svg'
});

export const markerOrange = new LeafIcon({
    iconUrl: './img/markerOrange.svg'
});
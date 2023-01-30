var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [25, 50],
        iconAnchor: [10, 50],
        popupAnchor: [3, -47],
        shadowUrl: '../img/marker-shadow.svg',
        shadowSize: [42, 50],
        shadowAnchor: [10, 50]
    }
});

export const markerBlue = new LeafIcon({
    iconUrl: '../img/markerBlue.svg'
});

export const markerGreen = new LeafIcon({
    iconUrl: '../img/markerGreen.svg'
});

export const markerRed = new LeafIcon({
    iconUrl: '../img/markerRed.svg'
});

export const markerOrange = new LeafIcon({
    iconUrl: '../img/markerOrange.svg'
});
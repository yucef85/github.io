L.Icon.Marker = L.Icon.extend({
    options: {
        iconSize: [25, 50],
        iconAnchor: [10, 50],
        popupAnchor: [3, -47],
        shadowUrl: '../img/marker-shadow.svg',
        shadowSize: [42, 50],
        shadowAnchor: [10, 50]
    }
});

export const markerBlue = new L.Icon.Marker({
    iconUrl: '../img/markerBlue.svg'
});

export const markerGreen = new L.Icon.Marker({
    iconUrl: '../img/markerGreen.svg'
});

export const markerRed = new L.Icon.Marker({
    iconUrl: '../img/markerRed.svg'
});

export const markerOrange = new L.Icon.Marker({
    iconUrl: '../img/markerOrange.svg'
});
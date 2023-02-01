import { listEtabPrim } from "./map/overlayMaps.js";

export const search = L.control.search({
	layer: listEtabPrim,
	initial: false,
	zoom: 14,
	hideMarkerOnCollapse: true,
	propertyName: 'searchItem',
	/*buildTip: (text, val) => {
		return `
		<b> ${val.layer.feature.properties.NOM_ETABA} </b>
		<br> النوع : ${val.layer.feature.properties.NETAB}
		<br> الرمز : ${val.layer.feature.properties.CD_ETAB}`
	}*/
})

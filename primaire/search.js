import { listEtabPrim } from "./map/overlayMaps.js";
import { map } from './map/initMap.js';

export const search = map.addControl(
		L.control.search({
			layer: listEtabPrim,
			initial: false,
			zoom: 14,
			propertyName: 'searchItem',
		})
	)
	


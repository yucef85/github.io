import { etab_200, etab_202, etab_209, etab_203, roadsLayer } from "../map/overlayMaps.js"; 


export const primMereGroup = L.featureGroup([etab_200, etab_202, etab_209]);

export const primSatRoadGroup = L.featureGroup([etab_203, roadsLayer])

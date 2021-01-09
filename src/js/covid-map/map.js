// eslint-disable-next-line import/extensions
import { getCountriesData, getGeoJSONLayer } from './apis.js';

let countriesData;
let geoJsonLayer;

document.querySelector('#countries').addEventListener('change', async (e) => {
  countriesData = await getCountriesData(e.target.value);
  countriesData = (countriesData.features).map((obj) => obj.properties.country_name);
  console.log(geoJsonLayer.filter((obj) => countriesData.indexOf(obj.properties.ADMIN) !== -1));
});

document.addEventListener('DOMContentLoaded', async () => {
  geoJsonLayer = await getGeoJSONLayer();
  geoJsonLayer = geoJsonLayer.features;
  console.log(geoJsonLayer);
});

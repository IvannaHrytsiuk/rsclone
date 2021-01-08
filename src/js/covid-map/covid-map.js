// eslint-disable-next-line import/extensions
import getGeoJSON from './covid-api.js';

document.querySelector('#countries').addEventListener('change', (e) => {
  getGeoJSON(e.target.value);
});

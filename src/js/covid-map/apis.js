async function getCountriesData(id) {
  const promiseOfCountriesData = fetch(`http://localhost:3000/travelInfo/${id}`)
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .catch(() => {
      console.log('Error with getting Countries Data!');
      return null;
    });

  const resultData = await promiseOfCountriesData;

  return resultData;
}

async function getGeoJSONLayer() {
  const promiseOfGeoJSONLayerData = fetch('assets/geojson/countries.json')
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .catch(() => {
      console.log('Error with getting GeoJSON Layer Data!');
      return null;
    });

  const resultData = await promiseOfGeoJSONLayerData;

  return resultData;
}

export { getCountriesData, getGeoJSONLayer };

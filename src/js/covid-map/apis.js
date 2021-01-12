async function getCountriesData(id) {
  const promiseOfCountriesData = fetch(`https://skyscanner-server.herokuapp.com/geojson/${id}`)
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

async function getCountriesIso() {
  const promiseOfCountriesLocations = fetch('https://corona.lmao.ninja/v2/countries')
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .catch(() => {
      console.log('Error with getting Countries Locations Data for Map!');
      return null;
    });

  const resultData = await promiseOfCountriesLocations;

  return resultData;
}

export { getCountriesData, getGeoJSONLayer, getCountriesIso };

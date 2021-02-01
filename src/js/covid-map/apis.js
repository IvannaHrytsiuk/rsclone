const PATHS = {
    geo: 'geo',
    json: 'json',
    locations: 'locations',
};

const APIS_PATHS = {
    geo: 'https://skyscanner-server-geojson.herokuapp.com/',
    json: './assets/geojson/countries.json',
    locations: 'https://corona.lmao.ninja/v2/countries',
};

const LOG_MESSAGES = {
    geo: 'Error with getting Countries Data!',
    json: 'Error with getting GeoJSON Layer Data!',
    locations: 'Error with getting Countries Locations Data for Map!',
};

async function getData(path, id = '') {
    const promiseOfSomeData = fetch(`${APIS_PATHS[path]}${id}`)
        .then((response) => (response.ok ? response.json() : Promise.reject(response)))
        .catch(() => {
            console.log(LOG_MESSAGES[path]);
            return null;
        });

    const resultData = await promiseOfSomeData;

    return resultData;
}

export { getData, PATHS };

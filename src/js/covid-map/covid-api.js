async function getGeoJSON(originId) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const promiseOfMapLayerData = fetch(`https://www.skyscanner.co.th/g/can-i-go-map-api/map/feature-collection-translated?isMobile=false&locale=en-US&market=BY&originId=${originId}`, requestOptions)
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .catch(() => {
      console.log('Error');
      return null;
    });

  const result = await promiseOfMapLayerData;
  console.log(result);
  return result;
}

export { getGeoJSON as default };

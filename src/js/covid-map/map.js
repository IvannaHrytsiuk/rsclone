/* eslint-disable new-cap */
/* eslint-disable no-undef */
import { getCountriesData, getGeoJSONLayer, getCountriesIso } from './apis';
import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';

const mapOptions = {
  center: [0, 0],
  zoom: 1,
};

const statusColors = {
  UNKNOWN: 'gray',
  LOW: 'green',
  MODERATE: 'yellow',
  MAJOR: 'red',
};

const map = new L.map('covid-map', mapOptions);

const bounds = map.getBounds();

map.setMaxBounds(bounds);

map.on('drag', () => {
  map.panInsideBounds(bounds, { animate: false });
});

const accessToken = 'pk.eyJ1IjoiZ3VwYWxlbmtvcm9tYW4iLCJhIjoiY2tpeWkwMDhtMWRzbzJybXd1bWs0YWh2NCJ9.7v50Tvi4ariDNbW5wstlBw';
const layer = new L.TileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
  {
    maxZoom: 18,
    minZoom: 1,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken,
    crossOrigin: true,
  },
);

map.addLayer(layer);

map.createPane('paneForGeoJSON').style.zIndex = 1000;

let geojson;
let currentCountryId;
let countriesData;
let countriesIso;
let geoJsonLayer;
let countriesIso2;
let firstChange = true;

function getColor(status) {
  return statusColors[status];
}

function style(feature) {
  return {
    fillColor: feature.properties.country_id === currentCountryId ? 'grey' : getColor(feature.properties.restrictions.master_travel_status),
    color: 'white',
    fill: true,
    stroke: true,
    weight: 0.1,
  };
}

function setGeoJSON() {
  geojson = L.geoJson(geoJsonLayer, {
    pane: 'paneForGeoJSON',
    clickable: false,
    style,
  }).addTo(map);
}

function collectCountriesData() {
  if (firstChange) {
    countriesIso2 = countriesData.features.map((obj) => obj.properties.country_code);
    geoJsonLayer.features = geoJsonLayer.features.filter((obj) => countriesIso2
      .indexOf(obj.properties.iso2) !== -1 && obj.properties.iso2 !== 'EH');
    firstChange = false;
  }
  geoJsonLayer.features = geoJsonLayer.features.map((obj) => {
    const country = obj;
    country.properties.restrictions = countriesData.features[countriesIso2
      .indexOf(country.properties.iso2)].properties.restrictions;
    country.properties.country_id = countriesData.features[countriesIso2
      .indexOf(country.properties.iso2)].properties.country_id;
    return country;
  });
  if (!geojson) {
    setGeoJSON();
  } else {
    map.removeLayer(geojson);
    setGeoJSON();
  }
  console.log(geoJsonLayer);
}

document.querySelector('#countries').addEventListener('change', async (e) => {
  currentCountryId = e.target.value;
  countriesData = await getCountriesData(currentCountryId);
  collectCountriesData();
});

document.addEventListener('DOMContentLoaded', async () => {
  geoJsonLayer = await getGeoJSONLayer();
  countriesIso = await getCountriesIso();
  countriesIso = countriesIso.map((obj) => {
    if (obj.countryInfo.iso3 === 'GBR') {
      return {
        iso2: 'UK',
        iso3: 'GBR',
      };
    }
    return {
      iso2: obj.countryInfo.iso2,
      iso3: obj.countryInfo.iso3,
    };
  });
  countriesIso.push({ iso2: 'KP', iso3: 'PRK' }, { iso2: 'TM', iso3: 'TKM' }, { iso2: 'KO', iso3: 'XXK' });
  const countriesIso3 = countriesIso.map((obj) => obj.iso3);
  geoJsonLayer.features = geoJsonLayer.features.filter((obj) => countriesIso3
    .indexOf(obj.properties.ISO_A3) !== -1);
  geoJsonLayer.features = geoJsonLayer.features.map((obj) => {
    const country = obj;
    country.properties.iso2 = countriesIso[countriesIso3.indexOf(obj.properties.ISO_A3)].iso2;
    return country;
  });
});

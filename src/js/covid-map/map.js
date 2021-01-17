/* eslint-disable new-cap */
/* eslint-disable no-undef */
import '../../assets/map/leaflet';
import '../../assets/map/leaflet.css';
import '../../assets/fullscreen/Control.FullScreen';
import '../../assets/fullscreen/Control.FullScreen.css';
import { getData, PATHS } from './apis';
import { setDataDate } from './date';
import { style } from './style';
import setDataSummary from './summary';

const mapOptions = {
  center: [0, 0],
  zoom: 1,
  zoomControl: false,
  attributionControl: false,
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft',
  },
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
L.control.zoom({
  position: 'bottomright',
}).addTo(map);
map.createPane('paneForGeoJSON').style.zIndex = 200;

let geojson;
let currentCountryId;
let countriesData;
let countriesIso;
let geoJsonLayer;
let countriesIso2;
let firstChange = true;

const mapLayerStyles = {
  opacity: 1,
  fillOpacity: 0.25,
};

function highlightFeature(e) {
  const countryLayer = e.target;
  countryLayer.setStyle(mapLayerStyles);
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    countryLayer.bringToFront();
  }
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}

function onEachFeature(feature, mapLayer) {
  mapLayer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}

function setGeoJSON() {
  geojson = L.geoJson(geoJsonLayer, {
    pane: 'paneForGeoJSON',
    clickable: false,
    style,
    onEachFeature,
  }).addTo(map);
}

function checkGeoJSON() {
  if (!geojson) {
    setGeoJSON();
  } else {
    map.removeLayer(geojson);
    setGeoJSON();
  }
}

function setCountriesData() {
  geoJsonLayer.features = geoJsonLayer.features.map((obj) => {
    const country = obj;
    country.properties.restrictions = countriesData.features[countriesIso2
      .indexOf(country.properties.iso2)].properties.restrictions;
    country.properties.country_id = countriesData.features[countriesIso2
      .indexOf(country.properties.iso2)].properties.country_id;
    return country;
  });
}

function collectCountriesData() {
  if (firstChange) {
    countriesIso2 = countriesData.features.map((obj) => obj.properties.country_code);
    geoJsonLayer.features = geoJsonLayer.features.filter((obj) => countriesIso2
      .indexOf(obj.properties.iso2) !== -1 && obj.properties.iso2 !== 'EH');
    firstChange = false;
  }
  setCountriesData();
  checkGeoJSON();
}

function createIsoList() {
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
}

function filterCountriesByIso() {
  const countriesIso3 = countriesIso.map((obj) => obj.iso3);
  geoJsonLayer.features = geoJsonLayer.features.filter((obj) => countriesIso3
    .indexOf(obj.properties.ISO_A3) !== -1);
  geoJsonLayer.features = geoJsonLayer.features.map((obj) => {
    const country = obj;
    country.properties.iso2 = countriesIso[countriesIso3.indexOf(obj.properties.ISO_A3)].iso2;
    return country;
  });
}

async function getGeoJsonData() {
  geoJsonLayer = await getData(PATHS.json);
  countriesIso = await getData(PATHS.locations);
  createIsoList();
  filterCountriesByIso();
}

function setSelectListener() {
  document.querySelector('#countries').addEventListener('change', async (e) => {
    currentCountryId = e.target.value;
    countriesData = await getData(PATHS.geo, currentCountryId);
    setDataDate(countriesData.dataset_last_updated);
    setDataSummary(countriesData.summary);
    collectCountriesData();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getGeoJsonData();
  setSelectListener();
});

/* eslint-disable new-cap */
/* eslint-disable no-undef */
import createMainWithMap from './htmlview';
import '../../assets/map/leaflet';
import '../../assets/fullscreen/Control.FullScreen';
import { getData, PATHS } from './apis';
import { setDataDate } from './date';
import { style } from './style';
import { setDataSummary, initStatusesCounters } from './summary';

const showdown = require('showdown');

let map;
let countriesSelect;
const converter = new showdown.Converter();
const currentCountryInfo = L.control({ position: 'topright' });

const ACCESS_TOKEN = 'pk.eyJ1IjoiZ3VwYWxlbmtvcm9tYW4iLCJhIjoiY2tpeWkwMDhtMWRzbzJybXd1bWs0YWh2NCJ9.7v50Tvi4ariDNbW5wstlBw';

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

const layer = new L.TileLayer(
    `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`,
    {
        maxZoom: 18,
        minZoom: 1,
        id: 'mapbox/dark-v10',
        tileSize: 512,
        zoomOffset: -1,
        ACCESS_TOKEN,
        crossOrigin: true,
    },
);

const initMap = () => {
    map = new L.map('covid-map', mapOptions);
    const bounds = map.getBounds();
    map.setMaxBounds(bounds);
    map.on('drag', () => {
        map.panInsideBounds(bounds, { animate: false });
    });

    map.setView([53.0282, 27.3137], 3);

    map.addLayer(layer);
    L.control.zoom({
        position: 'bottomright',
    }).addTo(map);
    map.createPane('paneForGeoJSON').style.zIndex = 200;

    currentCountryInfo.onAdd = (() => {
        currentCountryInfo.div = L.DomUtil.create('div', 'current-country-info');
        currentCountryInfo.update();
        return currentCountryInfo.div;
    });

    currentCountryInfo.update = ((countryName) => {
        currentCountryInfo.div.innerHTML = `<span class="material-icons">room</span><span>From: ${countryName || 'Choose country or region'}</span>`;
    });

    currentCountryInfo.addTo(map);
};

let geojson;
let currentCountryId;
let countriesData;
let countriesIso;
let geoJsonLayer;
let countriesIso2;
let firstChange = true;
let countryRestrictionsBlock;

function initRestrictionsBlock() {
    countryRestrictionsBlock = document.createElement('div');
    countryRestrictionsBlock.classList.add('country-restrictions-wrapper', 'hidden');
    document.querySelector('#covid-map').append(countryRestrictionsBlock);
}

function addCloseListener() {
    document.querySelector('#popup-close').addEventListener('click', () => {
        countryRestrictionsBlock.classList.add('hidden');
    });
}

const STATUS_ICONS = {
    MODERATE: 'error',
    MAJOR: 'cancel',
    LOW: 'check_circle',
    UNKNOWN: 'help',
};

const ARROWS = {
    down: 'trending_down',
    up: 'trending_up',
};

function showCountryRestrictionsInfo(e) {
    const { target } = e;

    if (countryRestrictionsBlock.classList.contains('hidden')) { countryRestrictionsBlock.classList.remove('hidden'); }

    countryRestrictionsBlock.innerHTML = `<div class="country-restrictions-info">
    <section class="popup-title-close-button">
      <span class="restrictions-status ${STATUS_ICONS[target.feature.properties.restrictions.master_travel_status]}"><span class="material-icons">${STATUS_ICONS[target.feature.properties.restrictions.entry_restrictions]}</span>${target.feature.properties.restrictions.entry_restrictions_translation} restrictions</span>
      <span class="popup-close" id="popup-close">x</span>
    </section>
    <section class="popup-country-name">
      <span class="country-name">${target.feature.properties.ADMIN}</span>
    </section>
    <section class="popup-additional-info">
      <article class="quarantine">
        <p class="material-icons">flight_takeoff</p>
        <p class="arrival-info">
          <span class="info-title">On arrival in ${target.feature.properties.ADMIN}</span>
          <span class="info-description">${target.feature.properties.restrictions.destination_self_isolation_translation}</span>
        </p>
      </article>
      <article class="quarantine">
        <p class="material-icons">flight_land</p>
        <p class="arrival-info">
          <span class="info-title">On arrival to ${countriesSelect.selectedOptions[0].textContent}</span>
          <span class="info-description">${target.feature.properties.restrictions.return_self_isolation_translation}</span>
        </p>
      </article>
      <article class="popup-covid-info">
        <p class="covid-info-title">New COVID-19 cases this week</p>
        <p class="covid-info-cases">
          <span class="cases-flex"><span class="material-icons">coronavirus</span>${target.feature.properties.restrictions.destination_safety_status.epiPrevalenceRecent.toFixed(1)}</span>
          <span>out of 100,000 people</span>
        </p>
        <p class="covid-info-cases">
          <span class="cases-flex">
            <span class="material-icons">${target.feature.properties.restrictions.destination_safety_status.casesDeltaPercent7Days >= 0 ? ARROWS.up : ARROWS.down}</span>
            ${target.feature.properties.restrictions.destination_safety_status.casesDeltaPercent7Days >= 0 ? `Up ${target.feature.properties.restrictions.destination_safety_status.casesDeltaPercent7Days}%` : `Down ${Math.abs(target.feature.properties.restrictions.destination_safety_status.casesDeltaPercent7Days)}%`}</span>
          <span>${target.feature.properties.restrictions.destination_safety_status.casesDeltaPercent7Days >= 0 ? `up from ${target.feature.properties.restrictions.destination_safety_status.epiPrevalencePrevious.toFixed(1)} last week` : `down from ${target.feature.properties.restrictions.destination_safety_status.epiPrevalencePrevious.toFixed(1)} last week`}</span>
        </p>
      </article>
      <p class="additional-info">${converter.makeHtml(target.feature.properties.restrictions.destination_restrictions_commentary_translation)}</p>
    </section>
  </div>`;

    addCloseListener();
}

const MAP_HOVER_LAYER_STYLES = {
    opacity: 1,
    fillOpacity: 0.25,
};

function highlightFeature(e) {
    const countryLayer = e.target;
    countryLayer.setStyle(MAP_HOVER_LAYER_STYLES);
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
        click: showCountryRestrictionsInfo,
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
    countriesSelect.addEventListener('change', async (e) => {
        currentCountryId = e.target.value;
        countriesData = await getData(PATHS.geo, currentCountryId);
        setDataDate(countriesData.dataset_last_updated);
        setDataSummary(countriesData.summary);
        collectCountriesData();
        currentCountryInfo.update(countriesSelect.selectedOptions[0].textContent);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createMainWithMap();
    initMap();
    initRestrictionsBlock();
    initStatusesCounters();
    getGeoJsonData();
    countriesSelect = document.querySelector('#countries');
    setSelectListener();
});

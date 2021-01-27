import './scripts/init';
import './scripts/styles-imports';
import './scripts/flightSearch/controller/flightSearchControll';
import './scripts/header/controller/headerControll';
import { UserlocationClass } from './apis/userLocation';
import { FlightSearchView } from './scripts/flightSearch/view/flightSearchView';
import { HeaderView } from './scripts/header/view/headerView';
import { CountryClass } from './apis/country';
import { SearchCashView } from './scripts/searchCash/view/searchCash';
import './js/covid-map/map';

const User = new UserlocationClass();
const Country = new CountryClass();
const Header = new HeaderView();
const Cash = new SearchCashView();

window.addEventListener('load', () => {
    const flightSearchView = new FlightSearchView();
    flightSearchView.dateView(document.getElementById('departDate'), 8);
    flightSearchView.dateView(document.getElementById('returnDate'), 15);
    flightSearchView.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    Header.headerInit();
    Cash.init();
});

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('userCountry')) {
        User.getUserLocation();
    }
    Country.getCountries();
    document.getElementById('round').checked = true;
});

import './styles/style.scss';
import './styles/nullStyle.scss';
import './scripts/flightSearch/controller/flightSearchControll';
import './scripts/header/controller/headerControll';
import './scripts/bookinPage/controll/bookingPageControll';
import './scripts/flightResult/controller/flightresultControll';
import { UserlocationClass } from './apis/userLocation';
import { FlightSearchView } from './scripts/flightSearch/view/flightSearchView';
import { HeaderView } from './scripts/header/view/headerView';
import { CountryClass } from './apis/country';

const User = new UserlocationClass();
const Country = new CountryClass();
const Header = new HeaderView();

window.addEventListener('load', () => {
    const flightSearchView = new FlightSearchView();
    flightSearchView.dateView(document.getElementById('departDate'), 8);
    flightSearchView.dateView(document.getElementById('returnDate'), 15);
    flightSearchView.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    Header.headerInit();
});

document.addEventListener('DOMContentLoaded', () => {
    User.getUserLocation();
    Country.getCountries();
    document.getElementById('round').checked = true;
});

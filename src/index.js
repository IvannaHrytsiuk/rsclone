import './styles/style.scss';
import './styles/nullStyle.scss';
import { UserlocationClass, country } from './apis/userLocation';
import { FlightSearchClass } from './apis/flightSEarch';
import { CurrencyClass } from './apis/currency';
import { CountryClass } from './apis/country';
import { SearchFlightView } from './scripts/flightSearch/view/searchView';

const User = new UserlocationClass();
User.getUserLocation();
const Countries = new CountryClass();
Countries.getCountries();
const Currency = new CurrencyClass();
Currency.getCurrencies();
Currency.gettravel();
const Flight = new FlightSearchClass();
Flight.getListPlaces();
window.addEventListener('load', () => {
    console.log(country);
    const searchFlightView = new SearchFlightView();
    searchFlightView.paintSearch();
});

import './styles/style.scss';
import { UserlocationClass, country } from './apis/userLocation';
import { FlightSearchClass } from './apis/flightSEarch';
import { CurrencyClass } from './apis/currency';
import { CountryClass } from './apis/country';

const User = new UserlocationClass();
User.getUserLocation();
const Countries = new CountryClass();
Countries.getCountries();
const Currency = new CurrencyClass();
Currency.getCurrencies();
const Flight = new FlightSearchClass();
Flight.getListPlaces();
window.addEventListener('load', () => {
    console.log(country);
});

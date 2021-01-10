import { FlightSearchClass } from '../../../apis/flightSEarch';
import { userCountry } from '../../../apis/userLocation';
import { FlightSearchView } from '../view/flightSearchView';

const searchFrom = document.getElementById('searchFrom');
const searchTo = document.getElementById('searchTo');

searchFrom.addEventListener('keyup', (e) => {
    const flightSearchClass = new FlightSearchClass();
    flightSearchClass.getAirports(e.target.value);
    const view = new FlightSearchView();
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchFrom.addEventListener('focus', () => {
    document.querySelector('.airportSearchTo').innerHTML = '';
    searchFrom.value = '';
    const flightSearchClass = new FlightSearchClass();
    flightSearchClass.getAirports(userCountry.country);
    const view = new FlightSearchView();
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchTo.addEventListener('keyup', (e) => {
    const flightSearchClass = new FlightSearchClass();
    flightSearchClass.getAirports(e.target.value);
    const view = new FlightSearchView();
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});
searchTo.addEventListener('focus', () => {
    document.querySelector('.airportSearchFrom').innerHTML = '';
    searchTo.value = '';
    const flightSearchClass = new FlightSearchClass();
    flightSearchClass.getAirports(userCountry.country);
    const view = new FlightSearchView();
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});

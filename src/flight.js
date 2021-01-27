import './scripts/initFlight';
import './scripts/header/controller/headerControll';
import './scripts/flightSearch/controller/flightSearchControll';
import { FlightSearchClass } from './apis/flightSEarch';
import { AirportNameClass } from './apis/airportsName';
import { HeaderView } from './scripts/header/view/headerView';
import { CountryClass } from './apis/country';
import { FlightSearchView } from './scripts/flightSearch/view/flightSearchView';

const flightSearchClass = new FlightSearchClass();
const Header = new HeaderView();
const airportNameClass = new AirportNameClass();
const Country = new CountryClass();
const flightSearchView = new FlightSearchView();

document.addEventListener('DOMContentLoaded', () => {
    Country.getCountries();
    Header.headerInit();
    const arr = JSON.parse(localStorage.getItem('search'));
    if (arr[arr.length - 1].route === 'oneway') {
        document.getElementsByName('flight-type')[1].checked = true;
        document.getElementById('searchFrom').value = arr[arr.length - 1].from;
        document.getElementById('searchTo').value = arr[arr.length - 1].to;
        document.getElementById('departDate').value = `${arr[arr.length - 1].date.slice(10, 14)}-${arr[arr.length - 1].date.slice(5, 7)}-${arr[arr.length - 1].date.slice(0, 2)}`;
        document.getElementById('returnDate').disabled = true;
        document.getElementById('adultsCount').value = arr[arr.length - 1].adults;
        document.getElementById('childCount').value = arr[arr.length - 1].child;
        airportNameClass.getName(document.querySelector('.airportSearchFrom'), arr[arr.length - 1].from);
        airportNameClass.getName(document.querySelector('.airportSearchTo'), arr[arr.length - 1].to);
        flightSearchView.counterView(arr[arr.length - 1].adults, arr[arr.length - 1].child);
        flightSearchClass.getAirplinesListOneWay(arr[arr.length - 1].from, arr[arr.length - 1].to, arr[arr.length - 1].date, arr[arr.length - 1].adults, arr[arr.length - 1].child, arr[arr.length - 1].curr);
    } else {
        document.getElementsByName('flight-type')[0].checked = true;
        document.getElementById('searchFrom').value = arr[arr.length - 1].from;
        document.getElementById('searchTo').value = arr[arr.length - 1].to;
        document.getElementById('departDate').value = `${arr[arr.length - 1].date1.slice(10, 14)}-${arr[arr.length - 1].date1.slice(5, 7)}-${arr[arr.length - 1].date1.slice(0, 2)}`;
        document.getElementById('returnDate').value = `${arr[arr.length - 1].date2.slice(10, 14)}-${arr[arr.length - 1].date2.slice(5, 7)}-${arr[arr.length - 1].date2.slice(0, 2)}`;
        document.getElementById('adultsCount').value = arr[arr.length - 1].adults;
        document.getElementById('childCount').value = arr[arr.length - 1].child;
        airportNameClass.getName(document.querySelector('.airportSearchFrom'), arr[arr.length - 1].from);
        airportNameClass.getName(document.querySelector('.airportSearchTo'), arr[arr.length - 1].to);
        flightSearchView.counterView(arr[arr.length - 1].adults, arr[arr.length - 1].child);
        flightSearchClass.getAirplinesListReturn(arr[arr.length - 1].from, arr[arr.length - 1].to, arr[arr.length - 1].date1, arr[arr.length - 1].date2, arr[arr.length - 1].adults, arr[arr.length - 1].child, arr[arr.length - 1].curr, arr[arr.length - 1].days);
    }
});

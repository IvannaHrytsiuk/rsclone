import { FlightSearchClass } from '../../../apis/flightSEarch';
import { userCountry } from '../../../apis/userLocation';
import { FlightSearchView } from '../view/flightSearchView';
import { FlightSearchModel } from '../model/flightSearchMolel';

const searchFrom = document.getElementById('searchFrom');
const searchTo = document.getElementById('searchTo');
const flightSearchModel = new FlightSearchModel();
const view = new FlightSearchView();

searchFrom.addEventListener('keyup', (e) => {
    const flightSearchClass = new FlightSearchClass();
    flightSearchClass.getAirports(e.target.value);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchFrom.addEventListener('focus', () => {
    document.querySelector('.airportSearchTo').innerHTML = '';
    searchFrom.value = '';
    const flightSearchClass = new FlightSearchClass();
    flightSearchClass.getAirports(userCountry.country);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchTo.addEventListener('keyup', (e) => {
    const flightSearchClass = new FlightSearchClass();
    flightSearchClass.getAirports(e.target.value);
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});
searchTo.addEventListener('focus', () => {
    document.querySelector('.airportSearchFrom').innerHTML = '';
    searchTo.value = '';
    const flightSearchClass = new FlightSearchClass();
    flightSearchClass.getAirports(userCountry.country);
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});

document.getElementById('classAdultsInp').addEventListener('click', () => {
    document.querySelector('.classAdultsModal').style.display = 'block';
});
document.querySelector('.closeBtn').addEventListener('click', () => {
    document.querySelector('.classAdultsModal').style.display = 'none';
});

document.getElementById('adultsPlus').addEventListener('click', () => {
    flightSearchModel.counterPlus(document.getElementById('adultsCount'));
    view.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    flightSearchModel.manageDisableAdults();
});
document.getElementById('adultsMinus').addEventListener('click', () => {
    flightSearchModel.counterMinus(document.getElementById('adultsCount'));
    view.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    flightSearchModel.manageDisableAdults();
});
document.getElementById('childPlus').addEventListener('click', () => {
    flightSearchModel.counterPlus(document.getElementById('childCount'));
    view.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    flightSearchModel.manageDisableChild();
    view.childAge();
});
document.getElementById('childMinus').addEventListener('click', () => {
    flightSearchModel.counterMinus(document.getElementById('childCount'));
    view.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    flightSearchModel.manageDisableChild();
    view.childAge();
});

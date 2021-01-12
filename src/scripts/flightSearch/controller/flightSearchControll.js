import { FlightSearchClass } from '../../../apis/flightSEarch';
import { userCountry } from '../../../apis/userLocation';
import { FlightSearchView, fromAirport, toAirport } from '../view/flightSearchView';
import { FlightSearchModel } from '../model/flightSearchMolel';

const searchFrom = document.getElementById('searchFrom');
const searchTo = document.getElementById('searchTo');
const flightSearchModel = new FlightSearchModel();
const view = new FlightSearchView();
const flightSearchClass = new FlightSearchClass();

searchFrom.addEventListener('keyup', (e) => {
    flightSearchClass.getAirports(e.target.value);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchFrom.addEventListener('focus', () => {
    document.querySelector('.airportSearchTo').innerHTML = '';
    searchFrom.value = '';
    flightSearchClass.getAirports(userCountry.country);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchTo.addEventListener('keyup', (e) => {
    flightSearchClass.getAirports(e.target.value);
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});
searchTo.addEventListener('focus', () => {
    document.querySelector('.airportSearchFrom').innerHTML = '';
    searchTo.value = '';
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

for (let i = 0; i < document.getElementsByName('flight-type').length; i += 1) {
    document.getElementsByName('flight-type')[i].addEventListener('click', () => {
        flightSearchModel.manageSearchViewDependsOnRoute(document.getElementsByName('flight-type')[i].value);
    });
}

document.querySelector('.searchFlightBtn').addEventListener('click', () => {
    for (let i = 0; i < document.getElementsByName('flight-type').length; i += 1) {
        if (document.getElementsByName('flight-type')[i].value === '1') {
            let dateFrom = document.getElementById('departDate').value;
            dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
            flightSearchClass.getAirplinesListOneWay(fromAirport.PlaceId, toAirport.PlaceId, dateFrom, document.getElementById('adultsCount').value, document.getElementById('childCount').value);
        }
    }
});

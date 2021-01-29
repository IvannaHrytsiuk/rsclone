import { FlightSearchClass } from '../../../apis/flightSEarch';
import { FlightSearchView, fromAirport, toAirport } from '../view/flightSearchView';
import { FlightSearchModel } from '../model/flightSearchMolel';

const searchFrom = document.getElementById('searchFrom');
const searchTo = document.getElementById('searchTo');
const flightSearchModel = new FlightSearchModel();
const view = new FlightSearchView();
const flightSearchClass = new FlightSearchClass();

searchFrom.addEventListener('keyup', (e) => {
    flightSearchClass.getAirports(e.target.value);
    document.querySelector('.loadingio-spinner-bars-mcasxxfwlf').style.display = 'inline-block';
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchFrom.addEventListener('focus', () => {
    document.querySelector('.loadingio-spinner-bars-mcasxxfwlf').style.display = 'inline-block';
    document.querySelector('.airportSearchTo').innerHTML = '';
    searchFrom.value = '';
    flightSearchClass.getAirports(document.getElementById('selectCountry').value);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchTo.addEventListener('keyup', (e) => {
    flightSearchClass.getAirports(e.target.value);
    document.querySelector('.loadingio-spinner-bars-mcasxxfwlf2').style.display = 'inline-block';
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});
searchTo.addEventListener('focus', () => {
    document.querySelector('.loadingio-spinner-bars-mcasxxfwlf2').style.display = 'inline-block';
    document.querySelector('.airportSearchFrom').innerHTML = '';
    searchTo.value = '';
    flightSearchClass.getAirports(document.getElementById('selectCountry').value);
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
    // eslint-disable-next-line no-loop-func
    document.getElementsByName('flight-type')[i].addEventListener('click', () => {
        document.getElementsByName('flight-type')[i].checked = true;
        flightSearchModel.manageSearchViewDependsOnRoute(document.getElementsByName('flight-type')[i].value);
    });
}

document.querySelector('.searchFlightBtn').addEventListener('click', () => {
    if (window.location.href.includes('index.html')) {
        if (flightSearchModel.ifChecked() === '1') {
            let dateFrom = document.getElementById('departDate').value;
            dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
            let a = [];
            a = JSON.parse(localStorage.getItem('search')) || [];
            if (a.length > 3) {
                a.shift();
            }
            a.push({
                route: 'oneway',
                from: fromAirport.PlaceId,
                to: toAirport.PlaceId,
                date: dateFrom,
                adults: document.getElementById('adultsCount').value,
                child: document.getElementById('childCount').value,
                curr: localStorage.getItem('userCurrency'),
                cityFrom: fromAirport.PlaceName,
                cityTo: toAirport.PlaceName,
            });
            localStorage.setItem('search', JSON.stringify(a));
        } else if (flightSearchModel.ifChecked() === '2') {
            let dateFrom = document.getElementById('departDate').value;
            let dateTo = document.getElementById('returnDate').value;
            dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
            dateTo = `${dateTo.slice(8, 10)}%2F${dateTo.slice(5, 7)}%2F${dateTo.slice(0, 4)}`;
            let a = [];
            a = JSON.parse(localStorage.getItem('search')) || [];
            if (a.length > 3) {
                a.shift();
            }
            a.push({
                route: 'return',
                from: fromAirport.PlaceId,
                to: toAirport.PlaceId,
                date1: dateFrom,
                date2: dateTo,
                adults: document.getElementById('adultsCount').value,
                child: document.getElementById('childCount').value,
                curr: localStorage.getItem('userCurrency'),
                cityFrom: fromAirport.PlaceName,
                cityTo: toAirport.PlaceName,
                days: flightSearchModel.calculateDays(document.getElementById('departDate').value, document.getElementById('returnDate').value),
            });
            localStorage.setItem('search', JSON.stringify(a));
        }
    }
});

document.querySelector('.switch-button').addEventListener('click', () => {
    const fromV = document.getElementById('searchFrom').value;
    const toV = document.getElementById('searchTo').value;
    document.getElementById('searchFrom').value = toV;
    document.getElementById('searchTo').value = fromV;
});

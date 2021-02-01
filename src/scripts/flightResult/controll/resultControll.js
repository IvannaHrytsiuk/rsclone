import { fromAirport, toAirport } from '../../flightSearch/view/flightSearchView';
import { FlightSearchModel } from '../../flightSearch/model/flightSearchMolel';
import { AirportNameClass } from '../../../apis/airportsName';
import { FlightSearchClass } from '../../../apis/flightSEarch';

document.querySelector('.searchFlightBtn').addEventListener('click', () => {
    if (window.location.href.includes('flight.html')) {
        const flightSearchModel = new FlightSearchModel();
        const airportNameClass = new AirportNameClass();
        const flightSearchClass = new FlightSearchClass();
        let valueFrom;
        let valueTo;
        if (toAirport === undefined) {
            valueTo = document.getElementById('searchTo').value;
        } else {
            valueTo = toAirport.PlaceId;
        }
        if (fromAirport === undefined) {
            valueFrom = document.getElementById('searchFrom').value;
        } else {
            valueFrom = fromAirport.PlaceId;
        }
        document.getElementById('contentResult').innerHTML = '<div class="lds-ripple"><div></div><div></div></div>';
        if (document.getElementsByName('flight-type')[1].checked) {
            let dateFrom = document.getElementById('departDate').value;
            dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
            airportNameClass.getName(document.querySelector('.airportSearchFrom'), valueFrom);
            airportNameClass.getName(document.querySelector('.airportSearchTo'), valueTo);
            flightSearchClass.getAirplinesListOneWay(valueFrom, valueTo, dateFrom, document.getElementById('adultsCount').value, document.getElementById('childCount').value, localStorage.getItem('userCurrency'));
        } else {
            let dateFrom = document.getElementById('departDate').value;
            let dateTo = document.getElementById('returnDate').value;
            dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
            dateTo = `${dateTo.slice(8, 10)}%2F${dateTo.slice(5, 7)}%2F${dateTo.slice(0, 4)}`;
            const days = flightSearchModel.calculateDays(document.getElementById('departDate').value, document.getElementById('returnDate').value);
            airportNameClass.getName(document.querySelector('.airportSearchFrom'), valueFrom);
            airportNameClass.getName(document.querySelector('.airportSearchTo'), valueTo);
            flightSearchClass.getAirplinesListReturn(valueFrom, valueTo, dateFrom, dateTo, document.getElementById('adultsCount').value, document.getElementById('childCount').value, localStorage.getItem('userCurrency'), days);
        }
    }
});

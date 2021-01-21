import { FlightSearchClass } from '../../../apis/flightSEarch';
import { FlightSearchModel } from '../../flightSearch/model/flightSearchMolel';

const flight = new FlightSearchClass();
const flightModel = new FlightSearchModel();
export const SearchCashView = class {
    init() {
        if (localStorage.getItem('search')) {
            const storageArr = JSON.parse(localStorage.getItem('search'));
            for (let i = 0; i < storageArr.length; i += 1) {
                const div = document.createElement('div');
                div.classList.add('col-sm-3', 'cashBlock');
                div.innerHTML = `
                        <div class="routeBlock">
                            <span>${storageArr[i].data[0].cityFrom}</span>
                            <span>${storageArr[i].data[0].route.length === 1 ? '→' : '↔'}</span>
                            <span>${storageArr[i].data[0].cityTo}</span>
                        </div>
                        <p>${storageArr[i].data[0].route.length === 1 ? `${this.getDate(storageArr[i].data[0].route[0].local_departure)}` : `${this.getDate(storageArr[i].data[0].route[0].local_departure)} - ${this.getDate(storageArr[i].data[0].route[1].local_departure)}`}</p>
                        <div class="pasangersCountBlock">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-person-64.png?alt=media&token=bcd3db7e-8ae5-4d1b-bc63-334de322bd0d">
                            <span>${storageArr[i].search_params.seats.passengers}</span>
                        </div>
                `;
                document.querySelector('.rowBlockSearchCash').appendChild(div);
                // eslint-disable-next-line no-loop-func
                div.addEventListener('click', () => {
                    if (storageArr[i].data[0].route.length === 1) {
                        document.getElementsByName('flight-type')[1].click();
                    } else {
                        document.getElementsByName('flight-type')[0].click();
                    }
                    // document.querySelector('.bookingWrapper').style.display = 'block';
                    // document.querySelector('.wrapperSearch').classList.add('bookingMood');
                    if (document.getElementsByName('flight-type')[1].checked) {
                        let dateFrom = new Date(storageArr[i].data[0].route[0].local_departure);
                        dateFrom = `${dateFrom.getDate() < 10 ? `0${dateFrom.getDate()}` : dateFrom.getDate()}%2F${dateFrom.getMonth() + 1 < 10 ? `0${dateFrom.getMonth() + 1}` : dateFrom.getMonth() + 1}%2F${dateFrom.getFullYear()}`;
                        flight.getAirplinesListOneWay(storageArr[i].data[0].cityCodeFrom, storageArr[i].data[0].cityCodeTo, dateFrom, storageArr[i].search_params.seats.adults, storageArr[i].search_params.seats.children, storageArr[i].currency);
                    } else if (document.getElementsByName('flight-type')[0].checked) {
                        let dateFrom = new Date(storageArr[i].data[0].route[0].local_departure);
                        let dateTo = new Date(storageArr[i].data[0].route[1].local_departure);
                        dateFrom = `${dateFrom.getDate() < 10 ? `0${dateFrom.getDate()}` : dateFrom.getDate()}%2F${dateFrom.getMonth() + 1 < 10 ? `0${dateFrom.getMonth() + 1}` : dateFrom.getMonth() + 1}%2F${dateFrom.getFullYear()}`;
                        dateTo = `${dateTo.getDate() < 10 ? `0${dateTo.getDate()}` : dateTo.getDate()}%2F${dateTo.getMonth() + 1 < 10 ? `0${dateTo.getMonth() + 1}` : dateTo.getMonth() + 1}%2F${dateTo.getFullYear()}`;
                        flight.getAirplinesListReturn(storageArr[i].data[0].cityCodeFrom, storageArr[i].data[0].cityCodeTo, dateFrom, dateTo, storageArr[i].search_params.seats.adults, storageArr[i].search_params.seats.children, storageArr[i].currency, flightModel.calculateDays(storageArr[i].data[0].route[0].local_departure, storageArr[i].data[0].route[1].local_departure));
                    }
                });
            }
        }
    }

    getDate(date) {
        const dateformat = new Date(date);
        return dateformat.toDateString();
    }
};

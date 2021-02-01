// import { FlightResultModel } from '../../flightResult/model/flightresultModel';
const json = require('../../airlines.json');

export const BookingView = class {
    paintBookingResult(result) {
        document.querySelector('.routeDetails').innerHTML = '';
        if (localStorage.getItem('choosenTicket')) {
            // const flightres = new FlightResultModel();
            const dateDepTo = new Date(result.route[0].local_departure);
            const dateDTo = dateDepTo.toDateString();
            const timeDepTo = dateDepTo.toTimeString();
            const dateDepArr = new Date(result.route[0].local_arrival);
            const timeDepArr = dateDepArr.toTimeString();
            const dateDepFrom = new Date(result.route[1].local_departure);
            const dateDFrom = dateDepFrom.toDateString();
            const timeDepFrom = dateDepFrom.toTimeString();
            const dateFromArr = new Date(result.route[1].local_arrival);
            const timeFromArr = dateFromArr.toTimeString();
            document.querySelector('.routeDetails').innerHTML = `${result.cityFrom} → ${result.cityTo} and back`;
            document.querySelector('.ticketDetails').innerHTML = '';
            document.querySelector('.ticketDetails').innerHTML = `
                <p class="ticketSummary">Trip summary</p>
                <div class="row">
                    <div class=" col-sm-6 ticketTo ticketsBlocks">
                        <p class="departTime"><span>DEPARTURE</span> Duration: ${this.secondsInHours(result.duration.departure)}</p>
                        <div class="col-sm-12 detailsBlock">
                            <div class="details">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
                                <span>${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</span>
                            </div>
                            <div>
                                <p class="economy">Economy</p>
                            </div>
                        </div>
                        <div class="col-sm-12 txtBlock">
                            <div class="col-sm-8">
                                <p>${timeDepTo.slice(0, 2)}:${timeDepTo.slice(3, 5)} <span>${result.cityFrom} ${result.cityCodeFrom}</span></p>
                                <p>${timeDepArr.slice(0, 2)}:${timeDepArr.slice(3, 5)} <span>${result.cityTo} ${result.cityCodeTo}</span></p>
                            </div>
                            <div class="col-sm-4">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[0].airline}.png">
                            </div>
                        </div>
                        <div>
                            <div class="flightnumber">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[0].airline}.png">
                                <span>Aerline: ${this.jsonSearch(result.route[0].airline)}</span>
                            </div>
                            <div class="flightnumber">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no: ${result.route[0].airline}${result.route[0].flight_no}</span>
                            </div>
                        </div>
                    </div>
                    <div class=" col-sm-6 ticketsBloks">
                        <p class="departTime"><span>RETURN</span> Duration: ${this.secondsInHours(result.duration.return)}</p>
                        <div class="col-sm-12 detailsBlock">
                            <div class="details">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
                                <span>${dateDFrom.slice(0, 3)}, ${dateDFrom.slice(8, 10)} ${dateDFrom.slice(4, 7)}</span>
                            </div>
                            <div>
                                <p class="economy">Economy</p>
                            </div>
                        </div>
                        <div class="col-sm-12 txtBlock">
                            <div class="col-sm-8">
                                <p>${timeDepFrom.slice(0, 2)}:${timeDepFrom.slice(3, 5)} <span>${result.cityTo} ${result.cityCodeTo}</span></p>
                                <p>${timeFromArr.slice(0, 2)}:${timeFromArr.slice(3, 5)} <span>${result.cityFrom} ${result.cityCodeFrom}</span></p>
                            </div>
                            <div class="col-sm-4">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[1].airline}.png">
                            </div>
                        </div>
                        <div>
                            <div class="flightnumber">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[1].airline}.png">
                                <span>Aerline: ${this.jsonSearch(result.route[1].airline)}</span>
                            </div>
                            <div class="flightnumber">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no: ${result.route[1].airline}${result.route[1].flight_no}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            const dateDepTo = new Date(result.route[0].local_departure);
            const dateDTo = dateDepTo.toDateString();
            const timeDepTo = dateDepTo.toTimeString();
            const dateDepArr = new Date(result.route[0].local_arrival);
            const timeDepArr = dateDepArr.toTimeString();
            document.querySelector('.routeDetails').innerHTML = `${result.cityFrom} → ${result.cityTo}`;
            document.querySelector('.ticketDetails').innerHTML = '';
            document.querySelector('.ticketDetails').innerHTML = `
                <p class="ticketSummary">Trip summary</p>
                <div class="row">
                    <div class=" col-sm-6 ticketTo">
                        <p class="departTime"><span>DEPARTURE</span> Duration: ${this.secondsInHours(result.duration.departure)}</p>
                        <div class="col-sm-12 detailsBlock">
                            <div class="details">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
                                <span>${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</span>
                            </div>
                            <div>
                                <p class="economy">Economy</p>
                            </div>
                        </div>
                        <div class="col-sm-12 txtBlock">
                            <div class="col-sm-8">
                                <p>${timeDepTo.slice(0, 2)}:${timeDepTo.slice(3, 5)} <span>${result.cityFrom} ${result.cityCodeFrom}</span></p>
                                <p>${timeDepArr.slice(0, 2)}:${timeDepArr.slice(3, 5)} <span>${result.cityTo} ${result.cityCodeTo}</span></p>
                            </div>
                            <div class="col-sm-4">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[0].airline}.png">
                            </div>
                        </div>
                        <div>
                            <div class="flightnumber">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[0].airline}.png">
                                <span>Aerline: ${this.jsonSearch(result.route[0].airline)}</span>
                            </div>
                            <div class="flightnumber">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no: ${result.route[0].airline}${result.route[0].flight_no}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        document.querySelector('.allPrice').innerHTML = '';
        document.querySelector('.allPrice').innerHTML = `
            <div class="priceContainer">
                <div>
                    <span>${localStorage.getItem('passengers')} x passanger</span>
                    <span>${result.price}${document.getElementById('selectCurrency').value}</span>
                </div>
                <hr>
                <div>
                    <span>Total (${document.getElementById('selectCurrency').value})</span>
                    <span style="font-weight:700;">${localStorage.getItem('passengers') * result.price} ${document.getElementById('selectCurrency').value}</span>
                </div>
            </div>`;
    }

    secondsInHours(num) {
        const hours = Math.floor(num / 3600);
        // eslint-disable-next-line no-param-reassign
        num %= 3600;
        const minutes = Math.floor(num / 60);
        return `${hours}h ${minutes}m`;
    }

    jsonSearch(value) {
        let jsonname;
        json.forEach((elem) => {
            if (elem.iata === value) {
                jsonname = elem.name;
            }
        });
        return jsonname;
    }
};

import { flightResult } from '../../../apis/flightSEarch';
import { airportsNameTo, airportsNameFrom } from '../../../apis/airportsName';
import { FlightSearchModel } from '../../flightSearch/model/flightSearchMolel';
import { country } from '../../../apis/country';

export let chooseTicket;

const json = require('../../airlines.json');

const flightSearchModel = new FlightSearchModel();
export const FlightResultModel = class {
    paintResultView(num) {
        for (let i = 0; i < num; i += 1) {
            const dateDepTo = new Date(flightResult.data[i].route[0].local_departure);
            const dateDTo = dateDepTo.toDateString();
            const timeDepTo = dateDepTo.toTimeString();
            const dateDepArr = new Date(flightResult.data[i].route[0].local_arrival);
            const dateDArr = dateDepArr.toDateString();
            const timeDepArr = dateDepArr.toTimeString();

            const dateDepFrom = new Date(flightResult.data[i].route[1].local_departure);
            const dateDFrom = dateDepFrom.toDateString();
            const timeDepFrom = dateDepFrom.toTimeString();
            const dateFromArr = new Date(flightResult.data[i].route[1].local_arrival);
            const dateFArr = dateFromArr.toDateString();
            const timeFromArr = dateFromArr.toTimeString();

            const div = document.createElement('div');
            div.classList.add('dataBlock', 'dataBlockReturn');
            div.setAttribute('data-bs-toggle', 'modal');
            div.setAttribute('data-bs-target', '#detailsModal');
            // eslint-disable-next-line no-loop-func
            div.addEventListener('click', () => {
                chooseTicket = flightResult.data[i];
                this.paintModalReturn(flightResult.data[i], dateDTo, timeDepTo, timeDepArr, dateDepArr, dateDepFrom, dateDFrom, timeDepFrom, timeFromArr);
            });
            div.innerHTML += `
            <div class="firstBlock">
                <p class="yearTime">${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</p>
                <div class="flightDetails">
                    <div class="routeIco">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D1%96%D0%BC%D0%B5%D0%BD%D1%96.png?alt=media&token=1cba4112-0dfe-4f6d-aa63-a931be23be53">
                    </div>
                    <div class="information">
                        <p><strong>${timeDepTo.slice(0, 2)}:${timeDepTo.slice(3, 5)} ${flightResult.data[i].route[0].cityFrom}</strong><span> ${flightResult.data[i].route[0].cityCodeFrom}</span></p>
                        <div class="middleDetails">
                            <div class="detailDuration"><span>${this.secondsInHours(flightResult.data[i].duration.departure)}</span></div>
                                <img src="https://images.kiwi.com/airlines/64/${flightResult.data[i].route[0].airline}.png">
                                <div class="aerineIco">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                            </div>
                        </div>
                        <p><strong>${timeDepArr.slice(0, 2)}:${timeDepArr.slice(3, 5)} ${flightResult.data[i].route[0].cityTo}</strong><span> ${flightResult.data[i].route[0].cityCodeTo}</span></p>
                    </div>
                </div>
                <p class="yearTime" style="color:rgb(95, 115, 140); padding-bottom:10px;">${dateDArr.slice(0, 3)}, ${dateDArr.slice(8, 10)} ${dateDArr.slice(4, 7)}</p>
                
                <p class="nightIn">${flightSearchModel.calculateDays(dateDepArr, dateDepFrom)} nights in ${flightResult.data[i].route[0].cityTo}</p>
                
                <p class="yearTime">${dateDFrom.slice(0, 3)}, ${dateDFrom.slice(8, 10)} ${dateDFrom.slice(4, 7)}</p>
                <div class="flightDetails">
                    <div class="routeIco">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D1%96%D0%BC%D0%B5%D0%BD%D1%96.png?alt=media&token=1cba4112-0dfe-4f6d-aa63-a931be23be53">
                    </div>
                    <div class="information">
                        <p><strong>${timeDepFrom.slice(0, 2)}:${timeDepFrom.slice(3, 5)} ${flightResult.data[i].route[1].cityFrom}</strong><span> ${flightResult.data[i].route[1].cityCodeFrom}</span></p>
                        <div class="middleDetails">
                            <div class="detailDuration"><span>${this.secondsInHours(flightResult.data[i].duration.return)}</span></div>
                                <img src="https://images.kiwi.com/airlines/64/${flightResult.data[i].route[1].airline}.png">
                                <div class="aerineIco">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                            </div>
                        </div>
                        <p><strong>${timeFromArr.slice(0, 2)}:${timeFromArr.slice(3, 5)} ${flightResult.data[i].route[1].cityTo}</strong><span> ${flightResult.data[i].route[1].cityCodeTo}</span></p>
                    </div>
                </div>
                <p class="yearTime" style="color:rgb(95, 115, 140); border-bottom: 1px solid lightgray; padding-bottom:10px;">${dateFArr.slice(0, 3)}, ${dateFArr.slice(8, 10)} ${dateFArr.slice(4, 7)}</p>
                <div class="fightDetailsBtns">
                    <div class="detailBag">
                        <div><span>Economy</span></div>
                        <div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/handbag.png?alt=media&token=e249d143-4f28-4960-981e-7e7643443a57"><span>${flightResult.data[i].baglimit.hand_weight}kg</span></div>
                        <div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/suitcase.png?alt=media&token=13e999bb-e561-42be-a0ff-ec64d9501347"><span>${flightResult.data[i].baglimit.hold_weight}kg</span></div>
                    </div>
                    <div class="detailInform">
                        <div><span class="btn">Show more</span></div>
                    </div>
                </div>
            </div>
            <div class="priceBlock">
                <div style="height:415px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/star.png?alt=media&token=55f97bd9-a67e-4342-af57-cfd41d1de5a4">
                    <p>${flightResult.data[i].price}${this.countryCurrency()}</p>
                </div>
                <div class="btn bookbtn"><span>Book</span></div>
            </div>`;
            document.getElementById('contentResult').appendChild(div);
        }
    }

    paintResultViewOne(num) {
        for (let i = 0; i < num; i += 1) {
            const date = new Date(flightResult.data[i].local_departure);
            const dateDep = date.toDateString();
            const time = date.toTimeString();
            const dateTo = new Date(flightResult.data[i].local_arrival);
            const dateTodate = dateTo.toDateString();
            const timeTo = dateTo.toTimeString();

            const div = document.createElement('div');
            div.classList.add('dataBlock', 'dataBlockOne');
            div.setAttribute('data-bs-toggle', 'modal');
            div.setAttribute('data-bs-target', '#detailsModal');
            // eslint-disable-next-line no-loop-func
            div.addEventListener('click', () => {
                chooseTicket = flightResult.data[i];
                this.paintModalOneway(flightResult.data[i], dateDep, time, timeTo);
            });
            div.innerHTML += `<div class="firstBlock">
                <p class="yearTime">${dateDep.slice(0, 3)}, ${dateDep.slice(8, 10)} ${dateDep.slice(4, 7)}</p>
                <div class="flightDetails">
                <div class="routeIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D1%96%D0%BC%D0%B5%D0%BD%D1%96.png?alt=media&token=1cba4112-0dfe-4f6d-aa63-a931be23be53">
                </div>
                <div class="information">
                    <p><strong>${time.slice(0, 2)}:${time.slice(3, 5)} ${flightResult.data[i].cityFrom}</strong><span> ${flightResult.data[i].cityCodeFrom}</span></p>
                    <div class="middleDetails">
                    <div class="detailDuration"><span>${this.secondsInHours(flightResult.data[i].duration.departure)}</span></div>
                    <img src="https://images.kiwi.com/airlines/64/${flightResult.data[i].airlines[0]}.png">
                    <div class="aerineIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                    </div>
                    </div>
                <p><strong>${timeTo.slice(0, 2)}:${timeTo.slice(3, 5)} ${flightResult.data[i].cityTo}</strong><span> ${flightResult.data[i].cityCodeTo}</span></p>
                </div>
            </div>
            <p class="yearTime" style="color:rgb(95, 115, 140); border-bottom: 1px solid lightgray; padding-bottom:10px;">${dateTodate.slice(0, 3)}, ${dateTodate.slice(8, 10)} ${dateTodate.slice(4, 7)}</p>
            <div class="fightDetailsBtns">
                <div class="detailBag">
                    <div><span>Economy</span></div>
                    <div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/handbag.png?alt=media&token=e249d143-4f28-4960-981e-7e7643443a57"><span>${flightResult.data[i].baglimit.hand_weight}kg</span></div>
                    <div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/suitcase.png?alt=media&token=13e999bb-e561-42be-a0ff-ec64d9501347"><span>${flightResult.data[i].baglimit.hold_weight}kg</span></div>
                </div>
                <div class="detailInform">
                <div><spanclass="btn">Show more</spanclass=></div>
                </div>
                </div>
            </div>
            <div class="priceBlock">
                <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/star.png?alt=media&token=55f97bd9-a67e-4342-af57-cfd41d1de5a4">
                    <p>${flightResult.data[i].price}${this.countryCurrency()}</p>
                </div>
                <div class="bookbtn btn"><span>Book</span></div>
            </div>
            </div>`;
            document.getElementById('contentResult').appendChild(div);
        }
    }

    countryCurrency() {
        let symbol;
        country.forEach((item) => {
            if (item.currencies[0].code === flightResult.currency) {
                symbol = item.currencies[0].symbol;
            }
        });
        return symbol;
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

    paintModalOneway(data, dateDep, time, timeTo) {
        document.querySelector('.modal-body').innerHTML = '';
        document.querySelector('.modal-body').innerHTML = `
            <h2>To ${data.route[0].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDep.slice(0, 3)}, ${dateDep.slice(8, 10)} ${dateDep.slice(4, 7)}</span>
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${time.slice(0, 2)}:${time.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${data.route[0].cityFrom}</p>
                        <p class="modalAirportName">${airportsNameFrom} (${data.route[0].cityCodeFrom})</p>
                    </div>
                </div>
                <div class="modalDetailsRow second row">
                    <div class="first"></div>
                    <div class="second">
                        <p>Economy</p>
                    </div>
                </div>
                <div class="modalDetailsRow third row" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div class="first">
                        <img src="https://images.kiwi.com/airlines/64/${data.route[0].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(data.route[0].airline)}</span></div>
                        <div class="modal3flightTime"><span>${this.secondsInHours(data.duration.departure)}</span></div>
                        <p>▼</p>
                    </div>
                </div>
                <div class="collapse row modalDetailsRow" id="collapseExample">
                    <div class="first"></div>
                    <div class="second">
                        <h4>Connection info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://images.kiwi.com/airlines/64/${data.route[0].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(data.route[0].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${data.route[0].airline} ${data.route[0].flight_no}</p>
                            </div>
                        </div>
                        <h4>Seating info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat pitch</span>
                            </div>
                            <div class="second">
                                <p>78 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat width</span>
                            </div>
                            <div class="second">
                                <p>48 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat recline</span>
                            </div>
                            <div class="second">
                                <p>7 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-wi-fi-48.png?alt=media&token=8f7892fa-ba65-4175-a579-a866c7f40d54">
                                <span>Wi-Fi on board</span>
                            </div>
                            <div class="second">
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeTo.slice(0, 2)}:${timeTo.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(data.route[0].airline)}</p>
                        <p class="modalAirportName">${airportsNameTo} (${data.route[0].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                </div>
                <div class="destitArriveTxt">
                    <p class="destitArriveTxtUp">Arrive at destination</p>
                    <p class="destitArriveTxtDown">${data.route[0].cityTo}</p>
                </div>
            </div>`;
    }

    paintModalReturn(data, dateDTo, timeDepTo, timeDepArr, dateDepArr, dateDepFrom, dateDFrom, timeDepFrom, timeFromArr) {
        document.querySelector('.modal-body').innerHTML = '';
        document.querySelector('.modal-body').innerHTML = `
            <h2>To ${data.route[0].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</span>
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeDepTo.slice(0, 2)}:${timeDepTo.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${data.route[0].cityFrom}</p>
                        <p class="modalAirportName">${airportsNameFrom} (${data.route[0].cityCodeFrom})</p>
                    </div>
                </div>
                <div class="modalDetailsRow second row">
                    <div class="first"></div>
                    <div class="second">
                        <p>Economy</p>
                    </div>
                </div>
                <div class="modalDetailsRow third row" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div class="first">
                        <img src="https://images.kiwi.com/airlines/64/${data.route[0].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(data.route[0].airline)}</span></div>
                        <div class="modal3flightTime"><span>${this.secondsInHours(data.duration.departure)}</span></div>
                        <p>▼</p>
                    </div>
                </div>
                <div class="collapse row modalDetailsRow" id="collapseExample">
                    <div class="first"></div>
                    <div class="second">
                        <h4>Connection info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://images.kiwi.com/airlines/64/${data.route[0].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(data.route[0].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${data.route[0].airline} ${data.route[0].flight_no}</p>
                            </div>
                        </div>
                        <h4>Seating info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat pitch</span>
                            </div>
                            <div class="second">
                                <p>78 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat width</span>
                            </div>
                            <div class="second">
                                <p>48 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat recline</span>
                            </div>
                            <div class="second">
                                <p>7 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-wi-fi-48.png?alt=media&token=8f7892fa-ba65-4175-a579-a866c7f40d54">
                                <span>Wi-Fi on board</span>
                            </div>
                            <div class="second">
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeDepArr.slice(0, 2)}:${timeDepArr.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(data.route[0].airline)}</p>
                        <p class="modalAirportName">${airportsNameTo} (${data.route[0].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                </div>
                <div class="destitArriveTxt">
                    <p class="destitArriveTxtUp">Arrive at destination</p>
                    <p class="destitArriveTxtDown">${data.route[0].cityTo}</p>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-empty-bed-100.png?alt=media&token=4ead69b8-18b0-44d9-ba23-b9346de83c1c">
                </div>
                <div class="destitArriveTxt">
                    <p class="destitArriveTxtDown destitArriveTxtDownOne">${flightSearchModel.calculateDays(dateDepArr, dateDepFrom)} nights in destitation</p>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-external-link-48.png?alt=media&token=b86d2ba6-9b61-4ca2-9feb-9d9c27e74adc">
                </div>
                <div class="destitArriveTxt">
                    <a href="https://www.booking.com/" target=”_blank” class="destitArriveTxtDown destitArriveTxtDownOne">Check accommodation prices  <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/Booking-Logo-PNG.png?alt=media&token=6035f8c9-d861-4e60-aef6-875157738926"></a>
                </div>
            </div>

            <h2>To ${data.route[1].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDFrom.slice(0, 3)}, ${dateDFrom.slice(8, 10)} ${dateDFrom.slice(4, 7)}</span>
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeDepFrom.slice(0, 2)}:${timeDepFrom.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${data.route[1].cityFrom}</p>
                        <p class="modalAirportName">${airportsNameTo} (${data.route[1].cityCodeFrom})</p>
                    </div>
                </div>
                <div class="modalDetailsRow second row">
                    <div class="first"></div>
                    <div class="second">
                        <p>Economy</p>
                    </div>
                </div>
                <div class="modalDetailsRow third row" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div class="first">
                        <img src="https://images.kiwi.com/airlines/64/${data.route[1].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(data.route[1].airline)}</span></div>
                        <div class="modal3flightTime"><span>${this.secondsInHours(data.duration.return)}</span></div>
                        <p>▼</p>
                    </div>
                </div>
                <div class="collapse row modalDetailsRow" id="collapseExample">
                    <div class="first"></div>
                    <div class="second">
                        <h4>Connection info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://images.kiwi.com/airlines/64/${data.route[1].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(data.route[1].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${data.route[1].airline} ${data.route[1].flight_no}</p>
                            </div>
                        </div>
                        <h4>Seating info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat pitch</span>
                            </div>
                            <div class="second">
                                <p>78 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat width</span>
                            </div>
                            <div class="second">
                                <p>48 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat recline</span>
                            </div>
                            <div class="second">
                                <p>7 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-wi-fi-48.png?alt=media&token=8f7892fa-ba65-4175-a579-a866c7f40d54">
                                <span>Wi-Fi on board</span>
                            </div>
                            <div class="second">
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeFromArr.slice(0, 2)}:${timeFromArr.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(data.route[1].airline)}</p>
                        <p class="modalAirportName">${airportsNameFrom} (${data.route[1].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                </div>
                <div class="destitArriveTxt">
                    <p class="destitArriveTxtUp">Arrive at destination</p>
                    <p class="destitArriveTxtDown">${data.route[1].cityTo}</p>
                </div>
            </div>
            `;
    }
};

import { flightResult } from '../../../apis/flightSEarch';
import { names } from '../../../apis/airportsName';
import { FlightSearchModel } from '../../flightSearch/model/flightSearchMolel';
import { country } from '../../../apis/country';

const json = require('../../airlines.json');

const flightSearchModel = new FlightSearchModel();
export const FlightResultModel = class {
    paintResultView(num) {
        for (let i = 0; i < num; i += 1) {
            const index = this.findIndex(flightResult.data[i].cityTo, flightResult.data[i]);
            const indexReturn = (flightResult.data[i].route.length - 1) - (index + 1);

            const dateDepTo = new Date(flightResult.data[i].route[0].local_departure);
            const dateDTo = dateDepTo.toDateString();
            const timeDepTo = dateDepTo.toISOString();

            const dateDepArr = new Date(flightResult.data[i].route[index].local_arrival);
            const dateDArr = dateDepArr.toDateString();
            const timeDepArr = dateDepArr.toISOString();
            const dateDepFrom = new Date(flightResult.data[i].route[index + 1].local_departure);
            const dateDepFromBack = dateDepFrom.toDateString();
            const dateDepBack = new Date(flightResult.data[i].route[index + 1].local_departure);
            const dateDBack = dateDepBack.toDateString();
            const timeDepBack = dateDepBack.toISOString();

            const dateDepArrBack = new Date(flightResult.data[i].route[flightResult.data[i].route.length - 1].local_arrival);
            const timeDepArrBack = dateDepArrBack.toISOString();
            const dateDepArrBackDate = dateDepArrBack.toDateString();

            const div = document.createElement('div');
            div.classList.add('dataBlock', 'dataBlockReturn');
            div.setAttribute('data-bs-toggle', 'modal');
            div.setAttribute('data-bs-target', '#detailsModal');
            // eslint-disable-next-line no-loop-func
            div.addEventListener('click', () => {
                localStorage.setItem('choosenTicket', JSON.stringify(flightResult.data[i]));
                localStorage.setItem('passengers', flightResult.search_params.seats.passengers);
                this.paintModalReturn(flightResult.data[i], index, dateDTo, dateDepArr, dateDepFrom, dateDepFromBack);
            });
            div.innerHTML += `
            <div class="firstBlock">
                <p class="yearTime">${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</p>
                <div class="flightDetails">
                    <div class="routeIco">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/route.png?alt=media&token=7153600a-0d67-47a4-9840-a1d8e21998e1">
                    </div>
                    <div class="information">
                        <p><strong>${timeDepTo.slice(11, 13)}:${timeDepTo.slice(14, 16)} ${flightResult.data[i].route[0].cityFrom}</strong><span> ${flightResult.data[i].route[0].cityCodeFrom}</span></p>
                        <div class="middleDetails">
                            <div class="detailDuration"><span>${this.secondsInHours(flightResult.data[i].duration.departure)}</span></div>
                            <img src="https://images.kiwi.com/airlines/64/${flightResult.data[i].route[0].airline}.png">    
                            <div class="aerineIco">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                            </div>
                            ${index > 0 ? `<div class="stopsTo">${index} stop</div>` : ''}
                        </div>
                        <p><strong>${timeDepArr.slice(11, 13)}:${timeDepArr.slice(14, 16)} ${flightResult.data[i].route[index].cityTo}</strong><span> ${flightResult.data[i].route[index].cityCodeTo}</span></p>
                    </div>
                </div>
                <p class="yearTime" style="color:rgb(95, 115, 140); padding-bottom:10px;">${dateDArr.slice(0, 3)}, ${dateDArr.slice(8, 10)} ${dateDArr.slice(4, 7)}</p>
                <p class="nightIn">${flightSearchModel.calculateDays(dateDepArr, dateDepFrom)} nights in ${flightResult.data[i].cityTo}</p>
                
                <p class="yearTime">${dateDBack.slice(0, 3)}, ${dateDBack.slice(8, 10)} ${dateDBack.slice(4, 7)}</p>
                <div class="flightDetails">
                    <div class="routeIco">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/route.png?alt=media&token=7153600a-0d67-47a4-9840-a1d8e21998e1">
                    </div>
                    <div class="information">
                        <p><strong>${timeDepBack.slice(11, 13)}:${timeDepBack.slice(14, 16)} ${flightResult.data[i].cityTo}</strong><span> ${flightResult.data[i].cityCodeTo}</span></p>
                        <div class="middleDetails">
                            <div class="detailDuration"><span>${this.secondsInHours(flightResult.data[i].duration.return)}</span></div>
                            <img src="https://images.kiwi.com/airlines/64/${flightResult.data[i].route[index + 1].airline}.png">    
                            <div class="aerineIco">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                            </div>
                            ${indexReturn > 0 ? `<div class="stopsTo">${indexReturn} stop</div>` : ''}
                        </div>
                        <p><strong>${timeDepArrBack.slice(11, 13)}:${timeDepArrBack.slice(14, 16)} ${flightResult.data[i].cityFrom}</strong><span> ${flightResult.data[i].cityCodeFrom}</span></p>
                    </div>
                </div>
                <p class="yearTime" style="color:rgb(95, 115, 140); padding-bottom:10px;">${dateDepArrBackDate.slice(0, 3)}, ${dateDepArrBackDate.slice(8, 10)} ${dateDepArrBackDate.slice(4, 7)}</p>
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
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/star.png?alt=media&token=55f97bd9-a67e-4342-af57-cfd41d1de5a4">
                    <p>${flightResult.data[i].price}${this.countryCurrency()}</p>
                </div>
                <div class="btn bookbtn"><span>Book</span></div>
            </div>
            `;
            document.getElementById('contentResult').appendChild(div);
        }
    }

    paintResultViewOne(num) {
        for (let i = 0; i < num; i += 1) {
            const index = this.findIndex(flightResult.data[i].cityTo, flightResult.data[i]);
            const date = new Date(flightResult.data[i].route[0].local_departure);
            const dateDep = date.toDateString();
            const time = date.toISOString();
            const dateTo = new Date(flightResult.data[i].route[index].local_arrival);
            const dateTodate = dateTo.toDateString();
            const timeTo = dateTo.toISOString();

            const div = document.createElement('div');
            div.classList.add('dataBlock', 'dataBlockOne');
            div.setAttribute('data-bs-toggle', 'modal');
            div.setAttribute('data-bs-target', '#detailsModal');
            // eslint-disable-next-line no-loop-func
            div.addEventListener('click', () => {
                localStorage.setItem('choosenTicket', JSON.stringify(flightResult.data[i]));
                this.paintModalOneway(flightResult.data[i], dateDep);
            });
            div.innerHTML += `
            <div class="firstBlock">
                <p class="yearTime">${dateDep.slice(0, 3)}, ${dateDep.slice(8, 10)} ${dateDep.slice(4, 7)}</p>
                <div class="flightDetails">
                    <div class="routeIco">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/route.png?alt=media&token=7153600a-0d67-47a4-9840-a1d8e21998e1">
                    </div>
                    <div class="information">
                        <p><strong>${time.slice(11, 13)}:${time.slice(14, 16)} ${flightResult.data[i].cityFrom}</strong><span> ${flightResult.data[i].cityCodeFrom}</span></p>
                        <div class="middleDetails">
                            <div class="detailDuration"><span>${this.secondsInHours(flightResult.data[i].duration.departure)}</span></div>
                            <img src="https://images.kiwi.com/airlines/64/${flightResult.data[i].route[0].airline}.png">    
                            <div class="aerineIco">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                            </div>
                            ${index > 0 ? `<div class="stopsTo">${index} stop</div>` : ''}
                        </div>
                        <p><strong>${timeTo.slice(11, 13)}:${timeTo.slice(14, 16)} ${flightResult.data[i].route[index].cityTo}</strong><span> ${flightResult.data[i].route[index].cityCodeTo}</span></p>
                    </div>
                </div>
                <p class="yearTime" style="color:rgb(95, 115, 140); padding-bottom:10px;">${dateTodate.slice(0, 3)}, ${dateTodate.slice(8, 10)} ${dateTodate.slice(4, 7)}</p>
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
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/star.png?alt=media&token=55f97bd9-a67e-4342-af57-cfd41d1de5a4">
                    <p>${flightResult.data[i].price}${this.countryCurrency()}</p>
                </div>
                <div class="btn bookbtn"><span>Book</span></div>
            </div>
            `;
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

    paintModalOneway(data, dateDep) {
        document.querySelector('.modalDet').innerHTML = '';
        document.querySelector('.modalDet').innerHTML = `
            <h2>To ${data.route[0].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDep.slice(0, 3)}, ${dateDep.slice(8, 10)} ${dateDep.slice(4, 7)}</span>
        `;
        for (let i = 0; i < data.route.length; i += 1) {
            const date = new Date(data.route[i].local_departure);
            const time = date.toISOString();
            const dateArr = new Date(data.route[i].local_arrival);
            const timeArr = dateArr.toISOString();
            let airportname;
            let airportnameTo;
            names.forEach((el) => {
                if (el.iata === data.route[i].cityCodeFrom) {
                    airportname = el.name;
                }
            });
            names.forEach((el) => {
                if (el.iata === data.route[i].cityCodeTo) {
                    airportnameTo = el.name;
                }
            });
            document.querySelector('.modalDet').innerHTML += `
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${time.slice(11, 13)}:${time.slice(14, 16)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${data.route[i].cityFrom}</p>
                        <p class="modalAirportName">${airportname} (${data.route[i].cityCodeFrom})</p>
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
                        <img src="https://images.kiwi.com/airlines/64/${data.route[i].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(data.route[i].airline)}</span></div>
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
                                <img src="https://images.kiwi.com/airlines/64/${data.route[i].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(data.route[i].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${data.route[i].airline} ${data.route[i].flight_no}</p>
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
                        <p>${timeArr.slice(11, 13)}:${timeArr.slice(14, 16)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(data.route[i].airline)}</p>
                        <p class="modalAirportName">${airportnameTo} (${data.route[i].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            `;
            if (i === data.route.length - 1) {
                document.querySelector('.modalDet').innerHTML += `
                    <div class="destitArrive">
                        <div class="destitArriveIco">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                        </div>
                        <div class="destitArriveTxt">
                            <p class="destitArriveTxtUp">Arrive at destination</p>
                            <p class="destitArriveTxtDown">${data.route[0].cityTo}</p>
                        </div>
                    </div>
                    `;
            } else {
                document.querySelector('.modalDet').innerHTML += `
                    <div class="destitArrive">
                        <div class="destitArriveIco">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-clock-48.png?alt=media&token=ecb40a2c-9213-4f64-9dbc-f220b4fc3991">
                        </div>
                        <div class="destitArriveTxt">
                            <p class="destitArriveTxtUp">${this.calculateLayover(data.route[i].local_arrival, data.route[i + 1].local_departure)} layover</p>
                            <p class="destitArriveTxtUp">Connection protected by the carrier</p>
                        </div>
                    </div>`;
            }
        }
    }

    paintModalReturn(data, index, dateDTo, dateDepArr, dateDepFrom, dateDepFromBack) {
        const arrTo = [];
        const arrFrom = [];
        for (let i = 0; i < data.route.length; i += 1) {
            if (i <= index) {
                arrTo.push(data.route[i]);
            } else {
                arrFrom.push(data.route[i]);
            }
        }
        document.querySelector('.modalDet').innerHTML = '';
        document.querySelector('.modalDet').innerHTML = `
            <h2>To ${data.route[index].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</span>
        `;
        for (let i = 0; i < arrTo.length; i += 1) {
            const dateTo = new Date(data.route[i].local_departure);
            const timeTo = dateTo.toISOString();
            const dateArrTo = new Date(data.route[i].local_arrival);
            const timeArrTo = dateArrTo.toISOString();
            let airportnameFrom;
            let airportnameTo;
            // eslint-disable-next-line no-loop-func
            names.forEach((el) => {
                if (el.iata === arrTo[i].cityCodeFrom) {
                    airportnameFrom = el.name;
                }
            });
            names.forEach((el) => {
                if (el.iata === arrTo[i].cityCodeTo) {
                    airportnameTo = el.name;
                }
            });
            document.querySelector('.modalDet').innerHTML += `
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeTo.slice(11, 13)}:${timeTo.slice(14, 16)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${arrTo[i].cityFrom}</p>
                        <p class="modalAirportName">${airportnameFrom} (${arrTo[i].cityCodeFrom})</p>
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
                        <img src="https://images.kiwi.com/airlines/64/${arrTo[i].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(arrTo[i].airline)}</span></div>
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
                                <img src="https://images.kiwi.com/airlines/64/${arrTo[i].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(arrTo[i].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${arrTo[i].airline} ${arrTo[i].flight_no}</p>
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
                        <p>${timeArrTo.slice(11, 13)}:${timeArrTo.slice(14, 16)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(arrTo[i].airline)}</p>
                        <p class="modalAirportName">${airportnameTo} (${arrTo[i].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            `;
            if (i === arrTo.length - 1) {
                document.querySelector('.modalDet').innerHTML += `
                    <div class="destitArrive">
                        <div class="destitArriveIco">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                        </div>
                        <div class="destitArriveTxt">
                            <p class="destitArriveTxtUp">Arrive at destination</p>
                            <p class="destitArriveTxtDown">${arrTo[i].cityTo}</p>
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
                    </div>`;
            } else {
                document.querySelector('.modalDet').innerHTML += `
                    <div class="destitArrive">
                        <div class="destitArriveIco">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-clock-48.png?alt=media&token=ecb40a2c-9213-4f64-9dbc-f220b4fc3991">
                        </div>
                        <div class="destitArriveTxt">
                            <p class="destitArriveTxtUp">${this.calculateLayover(arrTo[i].local_arrival, arrTo[i + 1].local_departure)} layover</p>
                            <p class="destitArriveTxtUp">Connection protected by the carrier</p>
                        </div>
                    </div>`;
            }
        }
        document.querySelector('.modalDet').innerHTML += `
            <h2>To ${data.route[data.route.length - 1].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDepFromBack.slice(0, 3)}, ${dateDepFromBack.slice(8, 10)} ${dateDepFromBack.slice(4, 7)}</span>
        `;
        for (let i = 0; i < arrFrom.length; i += 1) {
            const dateTo = new Date(arrFrom[i].local_departure);
            const timeTo = dateTo.toISOString();
            const dateArrTo = new Date(arrFrom[i].local_arrival);
            const timeArrTo = dateArrTo.toISOString();
            let airportnameFrom;
            let airportnameTo;
            // eslint-disable-next-line no-loop-func
            names.forEach((el) => {
                if (el.iata === arrFrom[i].cityCodeFrom) {
                    airportnameFrom = el.name;
                }
            });
            names.forEach((el) => {
                if (el.iata === arrFrom[i].cityCodeTo) {
                    airportnameTo = el.name;
                }
            });
            document.querySelector('.modalDet').innerHTML += `
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeTo.slice(11, 13)}:${timeTo.slice(14, 16)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${arrFrom[i].cityFrom}</p>
                        <p class="modalAirportName">${airportnameFrom} (${arrFrom[i].cityCodeFrom})</p>
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
                        <img src="https://images.kiwi.com/airlines/64/${arrFrom[i].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(arrFrom[i].airline)}</span></div>
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
                                <img src="https://images.kiwi.com/airlines/64/${arrFrom[i].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(arrFrom[i].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${arrFrom[i].airline} ${arrFrom[i].flight_no}</p>
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
                        <p>${timeArrTo.slice(11, 13)}:${timeArrTo.slice(14, 16)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(arrFrom[i].airline)}</p>
                        <p class="modalAirportName">${airportnameTo} (${arrFrom[i].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            `;
            if (i === arrFrom.length - 1) {
                document.querySelector('.modalDet').innerHTML += `
                    <div class="destitArrive">
                        <div class="destitArriveIco">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                        </div>
                        <div class="destitArriveTxt">
                            <p class="destitArriveTxtUp">Arrive at destination</p>
                            <p class="destitArriveTxtDown">${arrFrom[i].cityTo}</p>
                        </div>
                    </div>`;
            } else {
                document.querySelector('.modalDet').innerHTML += `
                    <div class="destitArrive">
                        <div class="destitArriveIco">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-clock-48.png?alt=media&token=ecb40a2c-9213-4f64-9dbc-f220b4fc3991">
                        </div>
                        <div class="destitArriveTxt">
                            <p class="destitArriveTxtUp">${this.calculateLayover(arrFrom[i].local_arrival, arrFrom[i + 1].local_departure)} layover</p>
                            <p class="destitArriveTxtUp">Connection protected by the carrier</p>
                        </div>
                    </div>`;
            }
        }
    }

    findIndex(city, data) {
        return data.route.findIndex((elem) => elem.cityTo === city);
    }

    calculateLayover(date1, date2) {
        const diff = Math.abs(new Date(date2) - new Date(date1));
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        return `${hours}h ${minutes}m`;
    }
};

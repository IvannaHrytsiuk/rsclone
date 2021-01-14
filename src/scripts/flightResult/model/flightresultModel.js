import { flightResult } from '../../../apis/flightSEarch';
import { FlightSearchModel } from '../../flightSearch/model/flightSearchMolel';

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

            document.getElementById('contentResult').innerHTML += `<div class="dataBlock dataBlockReturn">
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
                        <div><span>Show more</span></div>
                    </div>
                </div>
            </div>
            <div class="priceBlock">
                <div style="height:415px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/star.png?alt=media&token=55f97bd9-a67e-4342-af57-cfd41d1de5a4">
                    <p>${flightResult.data[i].price}$</p>
                </div>
                <div class="bookbtn"><span>Book</span></div>
            </div>
            </div>`;
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

            document.getElementById('contentResult').innerHTML += `<div class="dataBlock dataBlockOne">
            <div class="firstBlock">
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
                <div><span>Show more</span></div>
                </div>
                </div>
            </div>
            <div class="priceBlock">
                <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/star.png?alt=media&token=55f97bd9-a67e-4342-af57-cfd41d1de5a4">
                    <p>${flightResult.data[i].price}$</p>
                </div>
                <div class="bookbtn"><span>Book</span></div>
            </div>
            </div>`;
        }
    }

    secondsInHours(num) {
        console.log(num);
        const hours = Math.floor(num / 3600);
        // eslint-disable-next-line no-param-reassign
        num %= 3600;
        const minutes = Math.floor(num / 60);
        return `${hours}h ${minutes}m`;
    }
};

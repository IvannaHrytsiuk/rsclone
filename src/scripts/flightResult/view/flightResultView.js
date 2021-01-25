import { flightResult } from '../../../apis/flightSEarch';
import { FlightResultModel } from '../model/flightresultModel';

const flightResultModel = new FlightResultModel();
export const FlightResultView = class {
    paintSearchDataBlocks(value) {
        document.querySelector('.bookingWrapper').innerHTML = `
        <div class="bookingFlex">
            <div class="bookingFlexContent" id="filtersContent"></div>
            <div class="bookingFlexContent" id="contentResult"></div>
            <div class="bookingFlexContent" id="oneAd"></div>
        </div>`;
        if (value === 'oneway') {
            this.paintSearchDataOne();
        } else {
            this.paintSearchDataReturn();
        }
        this.paintAds();
    }

    paintSearchDataReturn() {
        document.getElementById('contentResult').innerHTML = '';
        if (flightResult.data.length > 50) {
            flightResultModel.paintResultView(50);
        } else {
            flightResultModel.paintResultView(flightResult.data.length);
        }
    }

    paintSearchDataOne() {
        document.getElementById('contentResult').innerHTML = '';
        if (flightResult.data.length > 50) {
            flightResultModel.paintResultViewOne(50);
        } else {
            flightResultModel.paintResultViewOne(flightResult.data.length);
        }
    }

    paintAds() {
        document.getElementById('oneAd').innerHTML = `
        <div class="block">
            <div class="row">
                <div class="col-sm-6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/kiwi.png?alt=media&token=3e0973af-c018-4feb-99d6-73bf4c284add">
                    <a href="https://kiwi.com/">kiwi.com</a>
                </div>
                <div class="col-sm-6 icoBlock">
                    <div class="ico"><span>Ad</span></div>
                </div>
            </div>
            <h3>Fly Cheaply - Prices From $11</h3>
            <p>Discover The Best Offers To Enywhere. Find The Best Prices!</p>
            <div class="btnBlock">
                <a href="https://kiwi.com/" class="btn">Visit site</a>
            </div>
        </div>
        <div class="block">
            <div class="row">
                <div class="col-sm-6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/esky.png?alt=media&token=ecc3f0e2-ba76-4806-8f1c-112aff7c9dac">
                    <a href="https://esky.com/">esky.com</a>
                </div>
                <div class="col-sm-6 icoBlock">
                    <div class="ico"><span>Ad</span></div>
                </div>
            </div>
            <h3>Cheap flights from $9 - Search, compare & book</h3>
            <p>Airline tickets at great prices. Booking Your cheap flights with eSky!</p>
            <div class="btnBlock">
                <a href="https://esky.com/" class="btn">Visit site</a>
            </div>
        </div>
        <div class="block">
            <div class="row">
                <div class="col-sm-6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/quater.png?alt=media&token=43bca0ec-04b3-4ac2-b9ef-b7b0cbd1f0f5">
                    <a href="https://www.qatarairways.com/">qatarairways.com</a>
                </div>
                <div class="col-sm-6 icoBlock">
                    <div class="ico"><span>Ad</span></div>
                </div>
            </div>
            <h3>Explore the world’s beaches - fly With Qatar Airways</h3>
            <p>Special Online Fares with Qatar Airways. Book Now!</p>
            <div class="btnBlock">
                <a href="https://www.qatarairways.com/" class="btn">Visit site</a>
            </div>
        </div>
        <div class="block">
            <div class="row">
                <div class="col-sm-6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/vietjet.png?alt=media&token=1a18f8e6-078a-4b98-9f91-9769632fff70">
                    <a href="https://www.vietjetair.com/">vietjetair.com</a>
                </div>
                <div class="col-sm-6 icoBlock">
                    <div class="ico"><span>Ad</span></div>
                </div>
            </div>
            <h3>VietjetAir Airline - Affordable Price Enjoy Flying</h3>
            <p>Better travel expience with new aircraft and attractive price</p>
            <div class="btnBlock">
                <a href="https://www.vietjetair.com/" class="btn">Visit site</a>
            </div>
        </div>
        <div class="block">
            <div class="row">
                <div class="col-sm-6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/cheat.png?alt=media&token=d361aded-de66-441d-9e92-94ef2dafbc6e">
                    <a href="https://www.cheapoair.com/">cheapoair.com</a>
                </div>
                <div class="col-sm-6 icoBlock">
                    <div class="ico"><span>Ad</span></div>
                </div>
            </div>
            <h3>Cheap Flights - Our Price Match Promise</h3>
            <p>Grab Our Cheap Flights. Book Your Tickets Today on CheapOair®!</p>
            <div class="btnBlock">
                <a href="https://www.cheapoair.com/" class="btn">Visit site</a>
            </div>
        </div>
        `;
    }
};

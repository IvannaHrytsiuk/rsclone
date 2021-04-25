import { flightResult, link, FlightSearchClass } from '../../../apis/flightSEarch';
import { FlightResultModel } from '../model/flightresultModel';

const flightResultModel = new FlightResultModel();
let count = 0;
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
        this.paintFilters();
    }

    paintSearchDataReturn() {
        if (flightResult.data.length === 0) {
            document.getElementById('contentResult').innerHTML = "<h3 class='noData'>Sorry, we couldn't find any results</h3><p class='noDataP'>It looks like you recently applied some filters.<br> Reset them below to get results.</p>";
        } else {
            document.getElementById('contentResult').innerHTML = '';
            if (flightResult.data.length > 50) {
                flightResultModel.paintResultView(50);
            } else {
                flightResultModel.paintResultView(flightResult.data.length);
            }
        }
    }

    paintSearchDataOne() {
        if (flightResult.data.length === 0) {
            document.getElementById('contentResult').innerHTML = "<h3 class='noData'>Sorry, we couldn't find any results</h3><p class='noDataP'>It looks like you recently applied some filters.<br> Reset them below to get results.</p>";
        } else {
            document.getElementById('contentResult').innerHTML = '';
            if (flightResult.data.length > 50) {
                flightResultModel.paintResultViewOne(50);
            } else {
                flightResultModel.paintResultViewOne(flightResult.data.length);
            }
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

    paintFilters() {
        document.getElementById('filtersContent').innerHTML = `
        <button class="btn btn-outline-primary filterBtn">Filters</button>
        <form name="filterForm" id="filterForm">    
            <div class="blockFilter">
                <h3>Sort by:</h3>
                <select class="form-select" aria-label="Default select example" id="selectSort">
                    <option selected value="price">Price</option>
                    <option value="duration">Duration</option>
                    <option value="quality">Quality</option>
                    <option value="date">Date</option>
                </select>
            </div>
            <div class="blockFilter">
                <h3>Max journey duration:</h3>
                <input type="range" class="form-range" min="0" max="100" step="1" value="0" id="duration">
                <label id="durationLabel"></label>
            </div>
            <div class="blockFilter">
                <h3>Max stops:</h3>
                <input type="range" class="form-range" min="0" max="5" step="1" value="0" id="stops">
                <label id="stopsLabel"></label>
            </div>
            <div class="blockFilter">
                <h3>Stopover:</h3>
                <input type="range" class="form-range" min="0" max="25" step="1" value="0" id="stopover">
                <label id="stopoverLabel"></label>
            </div>
        </form>
        `;
        document.querySelector('.filterBtn').addEventListener('click', () => {
            if (count === 0) {
                document.getElementById('filterForm').classList.add('show');
                document.getElementById('filterForm').style.display = 'block';
                count = 1;
                setTimeout(() => {
                    document.getElementById('filterForm').classList.remove('show');
                }, 1000);
            } else {
                document.getElementById('filterForm').classList.add('exit');
                setTimeout(() => {
                    document.getElementById('filterForm').style.display = 'none';
                    document.getElementById('filterForm').classList.remove('exit');
                }, 1000);
                count = 0;
            }
        });
        document.getElementById('filterForm').addEventListener('change', (e) => {
            document.getElementById('contentResult').innerHTML = '<div class="lds-ripple"><div></div><div></div></div>';
            let url;
            const flight = new FlightSearchClass();
            // eslint-disable-next-line default-case
            switch (e.target) {
            case document.getElementById('selectSort'):
                if (link.includes('&sort=')) {
                    const arr = link.split('&');
                    for (let i = 0; i < arr.length; i += 1) {
                        if (arr[i].includes('sort=')) {
                            arr[i] = `sort=${document.getElementById('selectSort').value}`;
                        }
                    }
                    url = arr.join('&');
                } else {
                    url = `${link}&sort=${document.getElementById('selectSort').value}`;
                }
                break;
            case document.getElementById('duration'):
                if (link.includes('&max_fly_duration=')) {
                    const arr = link.split('&');
                    for (let i = 0; i < arr.length; i += 1) {
                        if (arr[i].includes('max_fly_duration=')) {
                            arr[i] = `max_fly_duration=${document.getElementById('duration').value}`;
                        }
                    }
                    url = arr.join('&');
                } else {
                    url = `${link}&max_fly_duration=${document.getElementById('duration').value}`;
                }
                break;
            case document.getElementById('stops'):
                if (link.includes('&max_stopovers=')) {
                    const arr = link.split('&');
                    for (let i = 0; i < arr.length; i += 1) {
                        if (arr[i].includes('max_stopovers=')) {
                            arr[i] = `max_stopovers=${document.getElementById('stops').value}`;
                        }
                    }
                    url = arr.join('&');
                } else {
                    url = `${link}&max_stopovers=${document.getElementById('stops').value}`;
                }
                break;
            case document.getElementById('stopover'):
                if (link.includes('&stopover_to=')) {
                    const arr = link.split('&');
                    for (let i = 0; i < arr.length; i += 1) {
                        if (arr[i].includes('stopover_to=')) {
                            arr[i] = `stopover_to=${document.getElementById('stopover').value}`;
                        }
                    }
                    url = arr.join('&');
                } else {
                    url = `${link}&stopover_to=${document.getElementById('stopover').value}`;
                }
                break;
            }
            const way = document.getElementsByName('flight-type')[0].checked ? 'return' : 'oneway';
            flight.getFilteredFlight(url, way);
        });
        document.getElementById('duration').addEventListener('change', () => {
            document.getElementById('durationLabel').innerHTML = `${document.getElementById('duration').value} ${document.getElementById('duration').value > 1 ? 'hours' : 'hour'}`;
        });
        document.getElementById('stops').addEventListener('change', () => {
            document.getElementById('stopsLabel').innerHTML = `${document.getElementById('stops').value} ${document.getElementById('stops').value > 1 ? 'stops' : 'stop'}`;
        });
        document.getElementById('stopover').addEventListener('change', () => {
            document.getElementById('stopoverLabel').innerHTML = `${document.getElementById('stopover').value} ${document.getElementById('stopover').value > 1 ? 'hours' : 'hour'}`;
        });
    }
};

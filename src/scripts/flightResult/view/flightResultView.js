import { flightResult } from '../../../apis/flightSEarch';
import { FlightResultModel } from '../model/flightresultModel';

export const FlightResultView = class {
    paintSearchDataBlocks(value) {
        document.querySelector('.bookingWrapper').innerHTML = '<div class="bookingFlex"><div class="bookingFlexContent"></div><div class="bookingFlexContent" id="contentResult"></div><div class="bookingFlexContent"></div></div>';
        if (value === 'oneway') {
            this.paintSearchDataOne();
        } else {
            this.paintSearchDataReturn();
        }
    }

    paintSearchDataReturn() {
        document.getElementById('contentResult').innerHTML = '';
        if (flightResult.data.length > 30) {
            const flightResultModel = new FlightResultModel();
            flightResultModel.paintResultView(30);
        } else {
            const flightResultModel = new FlightResultModel();
            flightResultModel.paintResultView(flightResult.data.length);
        }
    }

    paintSearchDataOne() {
        document.getElementById('contentResult').innerHTML = '';
        if (flightResult.data.length > 30) {
            flightResultModel.paintResultViewOne(30);
        } else {
            flightResultModel.paintResultViewOne(flightResult.data.length);
        }
    }
};

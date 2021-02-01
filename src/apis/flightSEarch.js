// eslint-disable-next-line import/named
import { FlightResultView } from '../scripts/flightResult/view/flightResultView';

export let searchAirportList;
export let flightResult;
export let link;

const flightResultView = new FlightResultView();
export const FlightSearchClass = class {
    async getListPlaces() {
        try {
            this.res = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm', {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                    'x-rapidapi-key': 'd40f871e56msh6454e5315fba4b0p1d7c22jsnb8c09fe2a985',
                },
            });
            this.data = await this.res.json();
            if (this.data) {
                // country = this.data;
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAirports(id) {
        try {
            this.res = await fetch(`https://skyscanner-server-airport.herokuapp.com/${id}`);
            this.data = await this.res.json();
            if (this.data) {
                document.querySelector('.loadingio-spinner-bars-mcasxxfwlf').style.display = 'none';
                document.querySelector('.loadingio-spinner-bars-mcasxxfwlf2').style.display = 'none';
            }
            searchAirportList = this.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getAirplinesListOneWay(from, to, datefrom, adults, children, currency) {
        try {
            this.res = await fetch(`https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&date_from=${datefrom}&date_to=${datefrom}&flight_type=oneway&adults=${adults}&children=${children}&selected_cabins=M&only_working_days=false&only_weekends=false&partner_market=ua&curr=${currency}&vehicle_type=aircraft`, {
                headers: {
                    Accept: 'application/json',
                    Apikey: '-d9YzR50PN8Qh_4UZCwoDO2abTqdVGm1',
                },
            });
            this.data = await this.res.json();
            link = `https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&date_from=${datefrom}&date_to=${datefrom}&flight_type=oneway&adults=${adults}&children=${children}&selected_cabins=M&only_working_days=false&only_weekends=false&partner_market=ua&curr=${currency}&vehicle_type=aircraft`;
            if (this.data) {
                flightResult = this.data;
                document.querySelector('.lds-ripple').style.display = 'none';
                flightResultView.paintSearchDataBlocks('oneway');
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAirplinesListReturn(from, to, datefrom, dateto, adults, children, currency, daysCount) {
        try {
            this.res = await fetch(`https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&date_from=${datefrom}&date_to=${datefrom}&return_from=${dateto}&return_to=${dateto}&nights_in_dst_from=${daysCount}&nights_in_dst_to=${daysCount}&flight_type=round&adults=${adults}&children=${children}&selected_cabins=M&only_working_days=false&only_weekends=false&partner_market=ua&curr=${currency}&vehicle_type=aircraft`, {
                headers: {
                    Accept: 'application/json',
                    Apikey: '-d9YzR50PN8Qh_4UZCwoDO2abTqdVGm1',
                },
            });
            link = `https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&date_from=${datefrom}&date_to=${datefrom}&return_from=${dateto}&return_to=${dateto}&nights_in_dst_from=${daysCount}&nights_in_dst_to=${daysCount}&flight_type=round&adults=${adults}&children=${children}&selected_cabins=M&only_working_days=false&only_weekends=false&partner_market=ua&curr=${currency}&vehicle_type=aircraft`;
            this.data = await this.res.json();
            if (this.data) {
                flightResult = this.data;
                document.querySelector('.lds-ripple').style.display = 'none';
                flightResultView.paintSearchDataBlocks('return');
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getFilteredFlight(url, way) {
        try {
            this.res = await fetch(`https://tequila-api.kiwi.com/v2/search?${url}`, {
                headers: {
                    Accept: 'application/json',
                    Apikey: '-d9YzR50PN8Qh_4UZCwoDO2abTqdVGm1',
                },
            });
            link = url;
            this.data = await this.res.json();
            if (this.data) {
                flightResult = this.data;
                document.querySelector('.lds-ripple').style.display = 'none';
                if (way === 'oneway') {
                    flightResultView.paintSearchDataOne();
                } else {
                    flightResultView.paintSearchDataReturn();
                }
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};

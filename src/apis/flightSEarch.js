// eslint-disable-next-line import/no-mutable-exports
export let searchAirportList;

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
            this.res = await fetch(`https://skyscanner-server.herokuapp.com/airport/name/${id}`);
            this.data = await this.res.json();
            searchAirportList = this.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getAirplinesListOneWay(from, to, datefrom, adults, children) {
        try {
            this.res = await fetch(`https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&date_from=${datefrom}&date_to=${datefrom}&flight_type=oneway&adults=${adults}&children=${children}&selected_cabins=M&only_working_days=false&only_weekends=false&partner_market=ua&vehicle_type=aircraft`, {
                headers: {
                    Accept: 'application/json',
                    Apikey: '-d9YzR50PN8Qh_4UZCwoDO2abTqdVGm1',
                },
            });
            this.data = await this.res.json();
            if (this.data) {
                console.log(this.data);
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};

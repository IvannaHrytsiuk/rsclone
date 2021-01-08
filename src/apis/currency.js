// eslint-disable-next-line import/prefer-default-export
export const CurrencyClass = class {
    async getCurrencies() {
        try {
            this.res = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies', {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                    'x-rapidapi-key': 'd40f871e56msh6454e5315fba4b0p1d7c22jsnb8c09fe2a985',
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

    async gettravel() {
        try {
            this.res = await fetch('https://cors-anywhere.herokuapp.com/https://www.skyscanner.co.th/g/can-i-go-map-api/map/feature-collection-translated?isMobile=false&locale=en-GB&market=TH&originId=29475320', {
                method: 'GET',
                headers: {
                    origin: '127.0.0.1',
                },
            });
            this.data = await this.res.json();
            console.log(this.data);
        } catch (error) {
            console.log(error);
        }
    }
};

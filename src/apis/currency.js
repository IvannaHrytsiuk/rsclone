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

    async gettravel(id) {
        try {
            this.res = await fetch(`http://localhost:3000/travelInfo/${id}`);
            this.data = await this.res.json();
            console.log(this.data);
        } catch (error) {
            console.log(error);
        }
    }
};

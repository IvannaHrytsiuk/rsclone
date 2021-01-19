// eslint-disable-next-line import/no-mutable-exports
export let country;
// eslint-disable-next-line import/prefer-default-export
export const CountryClass = class {
    async getCountries() {
        try {
            this.res = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US', {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                    'x-rapidapi-key': 'd40f871e56msh6454e5315fba4b0p1d7c22jsnb8c09fe2a985',
                },
            });
            this.data = await this.res.json();
            if (this.data) {
                country = this.data;
                // console.log(country);
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};

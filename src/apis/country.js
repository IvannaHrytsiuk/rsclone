export let country;

export const CountryClass = class {
    async getCountries() {
        try {
            this.res = await fetch('https://restcountries.eu/rest/v2/all');
            this.data = await this.res.json();
            if (this.data) {
                country = this.data;
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};

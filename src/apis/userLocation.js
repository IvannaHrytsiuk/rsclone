export let userCountry;

export const UserlocationClass = class {
    async getUserLocation() {
        try {
            this.url = 'https://extreme-ip-lookup.com/json/';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            if (this.data) {
                userCountry = this.data;

                localStorage.setItem('userCountry', this.data.country);
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};

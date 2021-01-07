// eslint-disable-next-line import/no-mutable-exports
export let country;

export const UserlocationClass = class {
    async getUserLocation() {
        try {
            this.url = 'https://extreme-ip-lookup.com/json/';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            if (this.data) {
                country = this.data;
                console.log(country);
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};

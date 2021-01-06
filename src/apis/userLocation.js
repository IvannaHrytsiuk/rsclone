// eslint-disable-next-line import/no-mutable-exports
export let country;

// fetch('https://extreme-ip-lookup.com/json/')
//   .then((res) => res.json())
//   .then((response) => {
//     console.log(response);
//     country = response.country;
//   })
//   .catch((data, status) => {
//     console.log('Request failed', data, status);
//   });
// console.log(country);

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

export let airportsNameFrom;
export let airportsNameTo;

export const AirportNameClass = class {
    async getName(elem, iataCode) {
        try {
            this.url = 'https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            if (this.data) {
                this.data.forEach((element) => {
                    if (element.iata === iataCode) {
                        if (elem === document.querySelector('.airportSearchFrom')) {
                            airportsNameFrom = element.name;
                        } else {
                            airportsNameTo = element.name;
                        }
                    }
                });
            } else {
                throw Error();
            }
        } catch (error) {
            console.log(error);
        }
    }
};

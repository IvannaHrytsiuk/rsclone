const recomend = require('../../destination.json');

export const RecomendModel = class {
    generateUniqueArr() {
        const arr = [];
        while (arr.length < 4) {
            const r = Math.floor(Math.random() * recomend.length);
            if (arr.indexOf(recomend[r]) === -1) arr.push(recomend[r]);
        }
        return arr;
    }

    searchFlight(item) {
        let arr;
        recomend.forEach((el) => {
            if (el.id === item) {
                arr = el;
            }
        });
        const dateFrom = '01%2F04%2F2021';
        const dateTo = '15%2F04%2F2021';
        let a = [];
        a = JSON.parse(localStorage.getItem('search')) || [];
        if (a.length > 4) {
            a.shift();
        }
        a.push({
            route: 'return',
            from: localStorage.getItem('userCountryCode'),
            to: arr.code,
            date1: dateFrom,
            date2: dateTo,
            adults: 1,
            child: 0,
            curr: localStorage.getItem('userCurrency'),
            cityFrom: localStorage.getItem('userCountry'),
            cityTo: arr.country.name,
            days: 14,
        });
        localStorage.setItem('search', JSON.stringify(a));
    }
};

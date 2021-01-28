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
};

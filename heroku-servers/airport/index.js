const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/:id', (req, res, next) => {
    const { id } = req.params;
    request({
        uri: `https://www.skyscanner.co.th/g/autosuggest-flights/BY/en-US/${id}`,
        followAllRedirects: true,
        method: 'GET',
        qs: {
            isDestination: 'false',
            enable_general_search_v2: 'true',
        },
        headers: {
            'User-Agent': 'PostmanRuntime/7.26.8',
            'Content-Type': 'application/json; charset=utf-8',
        },
    }).pipe(res);
});

app.listen(process.env.PORT, () => {
    console.log(`Listen as PORT: ${process.env.PORT}`);
});

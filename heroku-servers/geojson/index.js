const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/:id', (req, res) => {
    const { id } = req.params;

    if (id && id !== 'favicon.ico') {
        request({
            uri: 'https://www.skyscanner.co.th/g/can-i-go-map-api/map/feature-collection-translated',
            followAllRedirects: true,
            method: 'GET',
            qs: {
                isMobile: 'false',
                locale: 'en-US',
                market: 'BY',
                originId: id,
            },
            headers: {
                'User-Agent': 'PostmanRuntime/7.26.8',
                'Content-Type': 'application/json; charset=utf-8',
            },
        }).pipe(res);
    }
});

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Listen as PORT: ${PORT}`);
});

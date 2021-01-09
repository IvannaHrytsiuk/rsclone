const express = require('express');

const app = express();
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

// app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(3000);

// eslint-disable-next-line no-unused-vars
app.get('/travelInfo/:id', (req, res, next) => {
  const { id } = req.params;
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
    },
  }).pipe(res);
});

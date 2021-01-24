/* eslint-disable no-unused-vars */
const express = require('express');
const request = require('request');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/geojson/:id', (req, res, next) => {
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
            'Content-Type': 'application/json; charset=utf-8',
        },
    }).pipe(res);
});

app.get('/airport/name/:id', (req, res, next) => {
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

app.get('/confirmBooking/:email', (req, res) => {
    const { email } = req.params;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        method: 'POST',
        secure: true,
        port: 465,
        auth: {
            user: 'testrsclone@gmail.com',
            pass: '123qaz123qaz',
        },
    });
    const mailOptions = {
        from: 'testrsclone@gmail.com',
        to: email,
        subject: 'Your booking details',
        text: `
        Hello!
        
        Thank you for your interest in our project :)
        
        Unfortunately, we can't book your ticket, because for each reservation we have to pay, and this project, at the moment, is made only for learning purposes.
        
        Thank you for your understanding and see you in the future!
        
        Good luck :)`,
    };
    transporter.sendMail(mailOptions, (_, info) => {
        res.status(200).send({ message: 'Message sent!', message_id: info.messageId, response: info.response });
        transporter.close();
    });
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

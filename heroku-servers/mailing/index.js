const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/:email', (req, res) => {
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

app.listen(process.env.PORT, () => {
    console.log(`Listen as PORT: ${process.env.PORT}`);
});

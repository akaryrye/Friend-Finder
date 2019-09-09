//==============| Configuration |===============
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//==============| Routes |======================

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'pub/index.html'));
});

app.get('/portfolio', function (req, res) {
    res.sendFile(path.join(__dirname, 'pub/portfolio.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'pub/about.html'));
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'pub/contact.html'));
});


//==============| Initialize Server |===========
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
//==============================================

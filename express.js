const moment = require('moment');
const request = require('request');
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
require('moment-timezone');
require('date-utils')
moment.tz.setDefault("Asia/Seoul");

//set dateData
var todayDate = moment().format("YYYY/MM/DD")
var todayYear = moment().format("YYYY")
var todayMonth = moment().format("MM")
var todayDay = moment().format("DD")
var tomorrowDate = moment().add(1, "days").format("YYYY/MM/DD")
var tomorrowYear = moment().add(1, "days").format("YYYY")
var tomorrowMonth = moment().add(1, "days").format("MM")
var tomorrowDay = moment().add(1, "days").format("DD")

//web-server set
var app = express();
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

//정적 콘텐츠 제공
app.use(express.static('views'));

app.get('/', function(req, res) {
    res.render("pages/index", {
        header: 'header',
        head: 'head',
        footer: 'footer'
    });
});

app.get('/about', function(req, res) {
    res.render("pages/about", {
        header: 'header',
        head: 'head',
        footer: 'footer'
    });
});

app.listen(3500);
console.log('set proxy to 3500');
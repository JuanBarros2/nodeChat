let express = require('express');
let consign = require('consign');
let bodyparser = require('body-parser');
let validator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyparser.urlencoded({extended: true}));

app.use(validator());
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;

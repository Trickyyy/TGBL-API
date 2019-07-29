require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models/db');
const routes = require('./routes');
const bearerToken = require('express-bearer-token');
const app = express();
const port = process.env.PORT || 3000;
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(routes);

app.use(bearerToken({
    signed: true,
    secret: process.env.JWT_SECRET
}));

app.locals.db = db;

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app;
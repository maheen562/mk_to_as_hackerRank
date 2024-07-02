
const userRouter = require('./routers/user-router');

const express = require('express');
const bodyParser  = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', userRouter);

module.exports = app;
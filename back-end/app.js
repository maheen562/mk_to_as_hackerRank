
const userRouter = require('./routers/user-router');

const express = require('express');
const cors = require('cors');
const bodyParser  = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:4200', // Allow requests from this origin
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));

app.use('/', userRouter);

module.exports = app;
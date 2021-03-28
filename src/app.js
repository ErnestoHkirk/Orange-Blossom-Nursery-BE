require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const morganOp = (process.env.NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganOp));
app.use(helmet());
app.use(cors());

app.get('/', (req, res)=>{
  res.send('hi');
})

module.exports = app;

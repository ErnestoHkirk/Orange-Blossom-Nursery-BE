require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const venderRouter = require('./routes/vendor/vender-route');

const app = express();

const morganOp = (process.env.NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganOp));
app.use(helmet());
app.use(cors());

app.get('/', (req, res)=>{
  res.send('hi');
});
app.use('/api/vendor', venderRouter);



app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production')
    response = { error: { message: 'server error' } };
  else 
    response = { message: error.message, error };
  res.status(500).json(response);
});

module.exports = app;

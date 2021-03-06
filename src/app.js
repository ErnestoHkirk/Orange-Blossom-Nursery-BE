require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('./routes/auth/auth-route');
const venderRouter = require('./routes/vendor/vender-route');
const userRouter = require('./routes/user/user-route');
const plantRouter = require('./routes/plant/plant-route');
const customerRouter = require('./routes/customer/customer-route');
const orderRouter = require('./routes/order/order-route');
const statementRouter = require('./routes/statement/statement-route');

const { NODE_ENV } = require('./config');

const app = express();

const morganOp = (process.env.NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganOp));
app.use(helmet());
app.use(cors());

app.get('/', (req, res)=>{
  res.send('hi');
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/vendor', venderRouter);
app.use('/api/plant', plantRouter);
app.use('/api/customer', customerRouter);
app.use('/api/order', orderRouter);
app.use('/api/statement', statementRouter);




app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production')
    response = { error: { message: 'server error' } };
  else 
    response = { message: error.message, error };
  res.status(500).json(response);
});

module.exports = app;

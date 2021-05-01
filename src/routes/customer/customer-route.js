const express = require('express');
const customerService = require('./customer-service');
const { requireAuth } = require('../../middleware/jwt-auth');
const { validateCustomerRequest } = require('../../helper/errorHandling');

const customerRouter = express.Router();
const jsonParser = express.json();

customerRouter
  .route('/')
  .get(async(req, res, next) => {
    try {
      const customerList = await customerService.getAllCustomers(req.app.get('db'));
      res.json(customerList);
    } catch (error) {
      next(error);
    }
  })
  .post(jsonParser, async (req, res, next)=>{
      try {
        const { email_address, billing_account, client_contact, client_address, client_city, client_state, client_zip, client_phone, client_name, client_account_manager } = req.body;
        const { isError, error } =  validateCustomerRequest(req.body);

        if (isError)
            throw error;
        else {
            const data = {email_address, billing_account, client_contact, client_address, client_city, client_state, client_zip, client_phone, client_name, client_account_manager};
           console.log(data)
            await customerService.addCustomer(req.app.get('db'), data);
            res.status(201).json('customer created');
        }
      } catch (error) {
        next(error);
      }
  });

module.exports = customerRouter;
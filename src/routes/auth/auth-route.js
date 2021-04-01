const express = require('express');
const AuthService = require('./auth-service');
const { requireAuth } = require('../../middleware/jwt-auth');

const authRouter = express.Router();
const parser = express.json();

const validateAuthRequest = (body) => {
  let result = {
    isError: false,
    error: ''
  };

  for (const key of ['user_name', 'password']) {
    if (!body[key]) {
      result.isError = true;
      result.error = `Missing ${key} in request body`;
      return result;
    }

    if (body.key === null) {
      result.isError = true;
      result.error = `Missing a value for "${key}"`;
      return result;
    }
  }
  return result;
};

authRouter
  .route('/')
  .post(parser, (req, res, next) => {
    const { user_name, password } = req.body;
    const { error, isError } = validateAuthRequest(req.body);
    const db = req.app.get('db');
    const incorrectInput = 'Incorrect username or password';

    if(isError)
      return res.status(400).send({error});
    else
      AuthService
        .getEmployee(db, user_name)
        .then(employee => {
          if(!employee)
            return res.status(400).send({error: incorrectInput});
          return employee;
        })
        .then( async employee => {
          const validatePassword = await AuthService.comparePassword(password, employee.employee_password);
         
          if(!validatePassword)
            return res.status(400).send({ error: incorrectInput });
          return employee;
        })
        .then(employee => {
          const sub = employee.employee_username;
          const payload = {
            user_id: employee.id,
            name: employee.employee_name,
          };
          res.send({ authToken: AuthService.createJsonWebToken(sub, payload) })
        })
        .catch(next);
  }).put(requireAuth, (req, res, next) => {
    try{
      const sub = req.user.employee_username;
      const payload = {
        user_id: req.user.id,
        name: req.user.employee_name
      };
      res.send({ authToken: AuthService.createJsonWebToken(sub, payload) });
    } catch (error) {
      next(error);
    }
  });

module.exports = authRouter;
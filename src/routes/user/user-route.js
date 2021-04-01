const express = require('express');
const userRouter = express.Router();
const parser = express.json();
const UserService = require('./user-service');
const AuthService = require('../auth/auth-service');
const { requireAuth } = require('../../middleware/jwt-auth');
const { validatePassword, validateUserRequest } = require('../../helper-function/errorHandler');

userRouter
  .route('/')
  .get((req, res, next) => {
    UserService
      .getUsers(req.app.get('db'))
      .then(employees => {
        !employees
          ? res.status(400).send({ error: 'Can not get employee from the database' })
          : res.status(200).send(employees);
      })
      .catch(next);
  })
  .post(parser, (req, res, next) => {
    const { employee_password, employee_username, employee_name, employee_phone} = req.body;
    const db = req.app.get('db');
    const { isError, error } = validateUserRequest(req.body);

    if (isError)
      return res.status(400).send(error);
    else {
      UserService
        .hashPassword(employee_password)
        .then(hash => {
          console.log(hash);
          const passwordError = validatePassword(employee_password);

          if (passwordError)
            return res.status(400).send({ error: passwordError });

          return {
            employee_phone,
            employee_username,
            employee_name,
            employee_password: hash
          };
        })
        .then(async (newEmployee) => {
          
          await UserService.validateUserName(db, newEmployee.employee_username)
            ? res.status(400).send({ error: 'Username already taken' })
            : UserService.insertEmployee(db, newEmployee);
          return newEmployee;
        })
        .then(employee => {
          const sub = employee.employee_username;
          const payload = {
            user_id: employee.id,
            name: employee.employee_name
          };
          res.send({ authToken: AuthService.createJsonWebToken(sub, payload) });
        })
        .catch(next);
    }
  });

module.exports = userRouter;
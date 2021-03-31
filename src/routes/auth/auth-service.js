const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const config = require('./../../config');

const AuthService = {
  getEmployee(db, employee_username){
    return db('employee')
      .where({ employee_username })
      .first();
  },
  getEmployeeWithUsername(db, employee_username){
    return db('employee')
      .where({employee_username})
      .first();
  },
  comparePassword(password, hash) {
    return bcrypt.compare(password,hash);
  },
  createJsonWebToken(subject, payload) {
    return jsonwebtoken.sign(payload, config.JWT_SECRET, {
      subject,
      expiresIn: config.JWT_EXPIRY,
      algorithm: 'HS256'
    });
  },
  verifyJsonWebToken(token){
    return jsonwebtoken.verify(token, config.JWT_SECRET, {
      algorithms: ['HS256']
    });
  }
};

module.exports = AuthService;
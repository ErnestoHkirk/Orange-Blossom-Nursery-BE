const bcrypt = require('bcryptjs');

const userService = {

  hashPassword(password) {
    return bcrypt.hash(password, 12);
  },

  getUsers(db) {
    return db
      .select('*')
      .from('employee');
  },

  validateUserName(db, employee_username) {
    return db('employee')
      .where({ employee_username })
      .first()
      .then(employee => !!employee);
  },

  insertEmployee(db, newEmployee) {
    return db
      .insert(newEmployee)
      .into('employee')
      .returning('*')
      .then(([employee]) => employee );
  },

  serializeEmployee(employee) {
    return {
      id: employee.id,
      full_name: employee.employee_name,
      user_name: employee.employee_username
    };
  }
};

module.exports = userService;
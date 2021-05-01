const CustomerService = {
  getAllCustomers(db) {
    return db.from('client')
      .select('*');
  },
  addCustomer(db, data) {
    return db
      .insert(data)
      .into('client');
  }
};

module.exports = CustomerService;
const VenderService = {
  getAllVendors(db){
    return db
      .from('vendor')
      .select('*');
  },
  addVendor(db, data){
    return db
      .insert(data)
      .into('vendor');
  }
};

module.exports = VenderService;
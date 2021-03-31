const VenderService = {
  getAllVendors(db){
    return db
      .from('vendor')
      .select('*');
  }
};

module.exports = VenderService;
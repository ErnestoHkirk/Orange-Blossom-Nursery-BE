const PlantService = {
  getAllPlants(db){
    return db
      .from('plant')
      .select('*');
  }
};
  
module.exports = PlantService;
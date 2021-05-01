const PlantService = {
  getAllPlants(db){
    return db
      .from('plant')
      .select('*');
  },
  addPlant(db, data){
    return db
      .insert(data)
      .into('plant');
  }
};
  
module.exports = PlantService;
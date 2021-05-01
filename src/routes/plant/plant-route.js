const express = require('express');
const PlantService = require('./plant-service');
const jsonParser = express.json();
const PlantRouter = express.Router();
const { validatePlantRequest } = require('../../helper/errorHandling');

PlantRouter
  .route('/')
  .get((req, res, next) => {
    try {
      PlantService.getAllPlants(req.app.get('db'))
        .then(plants => {
          res.json(plants);
        });
    }catch(error){
      next(error);
    }
  })
  .post(jsonParser, async (req,res,next) => {
    try {
      const {plant_name, plant_time, plant_desc, plant_price} = req.body;
      const {isError, error} = validatePlantRequest(req.body);
     
      if(isError)
        throw error;
      else {
        const data = {plant_name, plant_time, plant_desc, plant_price};
        await PlantService.addPlant(req.app.get('db'), data);
        res.status(201).json('plant created');
      }

    } catch(error){
      next(error);
    }
  });


module.exports = PlantRouter;
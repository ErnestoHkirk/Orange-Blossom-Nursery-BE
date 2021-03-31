const express = require('express');
const PlantService = require('./plant-service');
const jsonParser = express.json();
const PlantRouter = express.Router();

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
  });


module.exports = PlantRouter;
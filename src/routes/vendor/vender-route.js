const express = require('express');
const VenderService = require('./vender-service');
const jsonParser = express.json();
const VendorRouter = express.Router();

VendorRouter
  .route('/')
  .get((req, res, next)=>{
    try {
      VenderService.getAllVendors(req.app.get('db'))
        .then(venders => {
          res.json(venders);
        });
    }catch(error){
      next(error);
    };
  });


module.exports = VendorRouter;
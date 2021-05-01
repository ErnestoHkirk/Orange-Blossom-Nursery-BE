const express = require('express');
const VenderService = require('./vender-service');
const jsonParser = express.json();
const VendorRouter = express.Router();

VendorRouter
  .route('/')
  .get(async(req, res, next)=>{
    try {
      const vendorList = await VenderService.getAllVendors(req.app.get('db'));
      res.json(vendorList);
        
    } catch(error){
      next(error);
    };
  })
  .post(jsonParser, async function (req,res,next) {
    try{
      const {vendor_name, vendor_address, city, vendor_state, zip_code, accounting_manager} = req.body;
      const {isError, error} = validateVendorRequest(req.body);
    
      if(isError)
        throw error;
      else {
        const data = { vendor_name, vendor_address, city, vendor_state, zip_code, accounting_manager };
        await VenderService.addVendor(req.app.get('db'), data);
      }
    } catch(error){
      next(error);
    }

  });


module.exports = VendorRouter;
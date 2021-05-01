const errorHandling = {
  validateCustomerRequest(body) {
    let result = {
      isError: false,
      error: ''
    };
    
    for (const key of [ 'email_address', 'billing_account', 'client_contact', 'client_address', 'client_city', 'client_state', 'client_zip', 'client_phone', 'client_name', 'client_account_manager']) {
      if (!body[key]) {
        result.error = `Missing '${key}' in request body`;
        result.isError = true;
        return result;
      }
    }
    return result;
  },
  validatePlantRequest(body) {
    let result = {
      isError: false,
      error: ''
    };
    
    for (const key of [ 'plant_name', 'plant_time', 'plant_desc', 'plant_price']) {
      if (!body[key]) {
        result.error = `Missing '${key}' in request body`;
        result.isError = true;
        return result;
      }
    }
    return result;
  },
  validateVendorRequest(body) {
    let result = {
      isError: false,
      error: ''
    };
      
    for (const key of ['vendor_name', 'vendor_address', 'city', 'vendor_state', 'zip_code', 'accounting_manager']) {
      if (!body[key]) {
        result.error = `Missing '${key}' in request body`;
        result.isError = true;
        return result;
      }
    }
    return result;
  }
};
 
module.exports = errorHandling;
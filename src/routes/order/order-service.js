const OrderService = {
  addNewOrder(db, data){
    return  db.insert(data)
      .into('orders')
      .returning('id');
  },
  addNewPlantOrder(db, data){
    return db.insert(data).into('plant_order');
  },
  addDelivery(db,data){
    return db.insert(data).into('delivery');
  },
  addOrderAmount(db, order_id, total){
    return db.insert({order_id:order_id, total:total}).into('payment');
  }
};

module.exports = OrderService;
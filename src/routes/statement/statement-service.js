const StatementService = {
  getOpenStatements(db) {
    return db.from('payment')
      .where('paid', false).leftJoin('orders','payment.order_id', 'orders.id');
  },
  updateStatement(db,id,data){
    return db.into('payment').where('order_id', id).update(data);
  },
  deletePayment(db, order_id){
    return db.into('payment').where({order_id}).delete();
  },
  deletePlantOrders(db, order_id){
    return db.into('plant_order').where('order_id', order_id).delete();
  },
  deleteDelivery(db, order_id){
    return db.into('delivery').where('order_id', order_id).delete();
  },
  deleteOrderID(db, order_id){
    return db.into('orders').where({id:order_id}).delete();
  }
};

module.exports = StatementService;
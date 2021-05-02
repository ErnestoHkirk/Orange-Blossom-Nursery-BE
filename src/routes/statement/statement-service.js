const StatementService = {
    getOpenStatements(db) {
    return db.from('payment')
    .where('paid', false).leftJoin('orders','payment.order_id', 'orders.id');
  },
  updateStatement(db,id,data){
    return db.into('payment').where('order_id', id).update(data);
  }
};

module.exports = StatementService;
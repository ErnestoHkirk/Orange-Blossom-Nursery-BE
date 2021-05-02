const express = require('express');
const OrderService = require('./order-service');
const jsonParser = express.json();
const OrderRouter = express.Router();
const {requireAuth} = require('../../middleware/jwt-auth');

OrderRouter
    .route('/')
    .post(requireAuth, jsonParser, async (req,res,next) => {
        try {
            const {order, customer, delivery} = req.body;
            const {id} = req.user;
          
            const orderEntry = {
                employee_id: id,
                client_id: customer,
            }
            
            console.log('here')
            const newOrderID = await OrderService.addNewOrder(req.app.get('db'),orderEntry);
            const newID = newOrderID[0];
            let purchaseAmount = 0;

            order.forEach(async order => {
                const data = {
                    order_id: newID,
                    plant_id: order.id,
                    quantity: order.quantity
                }
                const amount = order.quantity * order.plant_price;
                purchaseAmount+= amount;
                console.log('data',data)
                await OrderService.addNewPlantOrder(req.app.get('db'), data);
            })
            console.log( 'tesst ', newID, purchaseAmount)
            await OrderService.addOrderAmount(req.app.get('db'), newID ,purchaseAmount);
            
            delivery.order_id = newID;
            console.log('del', delivery)
            await OrderService.addDelivery(req.app.get('db'), delivery);

            res.status(201).json('complete');
        } catch (error){
            next(error);
        }

    }
);

module.exports = OrderRouter;
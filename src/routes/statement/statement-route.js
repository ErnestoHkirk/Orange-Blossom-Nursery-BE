const express = require('express');
const StatementService = require('./statement-service');
const StatementRouter = express.Router();
const jsonParser = express.json();
const { requireAuth } = require('../../middleware/jwt-auth');

StatementRouter
    .route('/')
    .get(async (req, res, next) => {
        console.log('hi')
        const openStatements = await StatementService.getOpenStatements(req.app.get('db'));
        res.status(200).json(openStatements);

    });
StatementRouter 
    .route('/:sessionID')
    .patch(requireAuth, jsonParser,  async (req, res, next) => {
        try{
            const id = req.params.sessionID;
            const data = {
                amount_paid: req.body.amount_paid,
                interest_rate: req.body.interest_rate,
                paid: req.body.paid
            }
            await StatementService.updateStatement(req.app.get('db'), id, data);
            res.status(200).json('completed');
     
        } catch(error){
            next(error)
        }
    });
module.exports = StatementRouter;
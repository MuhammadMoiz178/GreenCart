import express from 'express'
import authUser from '../middlewares/auth.middleware.js';
import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from '../controllers/order.controller.js';
import authSeller from '../middlewares/authseller.middleware.js';

const orderRouter = express.Router();

orderRouter.post('/cod',authUser,placeOrderCOD)
orderRouter.get('/user',authUser,getUserOrders)
orderRouter.get('/seller',authSeller,getAllOrders)
orderRouter.post('/stripe',authUser,placeOrderStripe)
export default orderRouter;
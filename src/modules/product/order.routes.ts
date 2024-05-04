import express from 'express';
import * as orderController from './order.controller';

const router = express.Router();

router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrderDetail);

export default router;
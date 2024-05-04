import { Request, Response } from 'express';
import Order, { IOrder } from './order.module';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order: IOrder = new Order({
      id: req.body.id,
      productName: req.body.productName,
      quantity: req.body.quantity,
      price: req.body.price,
      buyerName: req.body.buyerName,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      paymentMethod: req.body.paymentMethod,
      paymentResult: req.body.paymentResult,
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrderDetail = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order == null) {
      return res.status(404).json({ message: 'Cannot find order' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
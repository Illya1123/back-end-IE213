"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderDetail = exports.createOrder = void 0;
const order_module_1 = __importDefault(require("./order.module"));
const createOrder = async (req, res) => {
    try {
        const order = new order_module_1.default({
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
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createOrder = createOrder;
const getOrderDetail = async (req, res) => {
    try {
        const order = await order_module_1.default.findById(req.params.id);
        if (order == null) {
            return res.status(404).json({ message: 'Cannot find order' });
        }
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getOrderDetail = getOrderDetail;
//# sourceMappingURL=order.controller.js.map
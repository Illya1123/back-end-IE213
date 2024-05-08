"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/orders', (req, res) => {
    const orders = req.body;
    res.status(201).json(orders);
});
app.get('/payment/:id', (req, res, next) => {
    const paymentId = req.params.id;
    const payment = { id: paymentId, amount: 100 };
    res.json(payment);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=order.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.post('/api/payment', (req, res) => {
    const { method, bankAccount, name, cardNumber, expiryDate, cvv } = req.body;
    if (method === 'cash') {
        res.json({ result: 'Payment successful.' });
    }
    else if (method === 'bankTransfer') {
        res.json({ result: 'Bank transfer successful.' });
    }
    else if (method === 'atmCard' || method === 'internationalCard') {
        res.json({ result: 'Card payment successful.' });
    }
    else if (method === 'qrCode') {
        res.json({ result: 'QR code payment successful.' });
    }
    else if (method === 'ewallet') {
        res.json({ result: 'Ewallet payment successful.' });
    }
    else {
        res.status(400).json({ error: 'Invalid payment method.' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=payment.js.map
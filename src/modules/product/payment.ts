import express from 'express';

interface PaymentMethod {
  method: string;
  bankAccount?: string;
  name?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}
const app = express();
const port = 3001;

app.use(express.json());

app.post('/api/payment', (req, res) => {
  const { method, bankAccount, name, cardNumber, expiryDate, cvv } = req.body;

  // Payment processing logic based on the received data from the client
  if (method === 'cash') {

    res.json({ result: 'Payment successful.' });
  } else if (method === 'bankTransfer') {

    res.json({ result: 'Bank transfer successful.' });
  } else if (method === 'atmCard' || method === 'internationalCard') {

    res.json({ result: 'Card payment successful.' });
  } else if (method === 'qrCode') {
    res.json({ result: 'QR code payment successful.' });
  } else if (method === 'ewallet') {
    res.json({ result: 'Ewallet payment successful.' });
  }else {
    res.status(400).json({ error: 'Invalid payment method.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
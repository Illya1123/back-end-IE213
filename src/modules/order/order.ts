import express, { Request, Response, NextFunction } from 'express';
const app = express();
const port = 3000;
app.use(express.json());


app.post('/orders', (req: Request, res: Response) => {
  const orders = req.body;
  res.status(201).json(orders);
});

app.get('/payment/:id', (req: Request, res: Response, next: NextFunction) => {
  const paymentId = req.params.id;
  const payment = { id: paymentId, amount: 100 }; 
  res.json(payment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
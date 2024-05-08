import express, { Request, Response, NextFunction } from 'express';
const app = express();
const port = 3001;
interface Product {
  name: string;
}

app.get('/products/:id', (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.id;


  const productName: string = 'Example Product Name';

  const product: Product = { name: productName };

  res.json(product);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
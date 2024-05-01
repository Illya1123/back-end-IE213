// product.ts

import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const PORT = 5000;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Endpoint for retrieving all products
app.get('/api/products', (req: Request, res: Response) => {
  // Read the product information from the JSON file
  const rawdata = fs.readFileSync('product_details.json');
  const products: Product[] = JSON.parse(rawdata.toString());

  // Simulating a delay before sending the response
  setTimeout(() => {
    res.json(products);
  }, 2000);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3001;


app.get('/products/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cart API
app.post('/cart', async (req: express.Request, res: express.Response) => {
  const { product } = req.body;
  try {
    const response = await axios.post('http://localhost:3000/cart', { product });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.patch('/cart/products/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const response = await axios.patch(`http://localhost:3000/cart/products/${id}`, { quantity });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/cart/products/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await axios.delete(`http://localhost:3000/cart/products/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/cart', async (req: express.Request, res: express.Response) => {
  try {
    const response = await axios.get('http://localhost:3000/cart');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/orders', async (req: express.Request, res: express.Response) => {
  const { cart } = req.body;
  try {
    const response = await axios.post('http://localhost:3000/orders', { cart });
    res.json(response.data); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
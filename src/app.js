import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/cart.router.js';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);




app.listen(PORT,()=>console.log(`Listening on ${PORT}`));



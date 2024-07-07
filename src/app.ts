
// all the imports here
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/product/product.routes';

// call the express app
const app:Application = express();

// use parser
app.use(express.json());
app.use(cors());


// all the product routes
app.use('/api/products/', productRoutes);


// testing routes
app.get('/testRoutes', (req:Request, res: Response) => {
    res.send('Hello programmers, welcome to the world of programming!')
});


// all the exports here
export default app;

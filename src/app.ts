
// all the imports here
import express, { Application, Request, Response } from 'express';

// call the express app
const app:Application = express();

// use parser
app.use(express.json());


// testing routes
app.get('/testRoutes', (req:Request, res: Response) => {
    res.send('Hello programmers, welcome to the world of programming!')
});


// all the exports here
export default app;


// all the imports here
import { Router } from "express";
import { orderControllers } from "./order.controller";

// creating router object
const router = Router();


// create order
router.post('/orders', orderControllers.createOrder);

// export the router object as order router
export const orderRoutes = router;
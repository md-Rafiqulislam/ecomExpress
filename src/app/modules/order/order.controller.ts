
// all the imports here
import { Request, Response } from "express";
import { orderServices } from "./order.service";


// create order
const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const result = await orderServices.createOrderIntoDb(orderData);

        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Order can not created for something unusal',
        });
    }
};


// get all orders
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrdersFromDb();

        res.status(200).json({
            success: true,
            message: 'Order fetched successfully!',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Order can not fetched for something unusal',
        });
    }
}


// all the exports here
export const orderControllers = {
    createOrder,
    getAllOrders,
}
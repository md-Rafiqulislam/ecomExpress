
// all the imports here
import { Request, Response } from "express";
import { productServices } from "./product.service"


// create product into database
const createproduct = async (req: Request, res: Response) => {
    try {
        const product = await req.body;
        const result = await productServices.createProductIntoDb(product);


        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
}


// get single product
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = await req.params;
        const result = await productServices.getSingleProductFromDb(productId);

        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Product can not created for something unusual",
        })
    }

};


// get all the products
const getAllProuducts = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getAllProductsFromDb();
        
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Products can not fetch for something unusal',
        });
    }
}


// all the exports here
export const productControllers = {
    createproduct,
    getSingleProduct,
    getAllProuducts,
};

// all the imports here
import { TProduct } from "./product.interface";
import { Product } from "./product.model"


// create product into database
const createProductIntoDb = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
};


// get single product form db
const getSingleProductFromDb = async (id: string) => {
    const result = await Product.findOne({_id: id});
    return result;
};


// get all the products from db
const getAllProductsFromDb = async () => {
    const result = await Product.find();
    return result;
};


// delete product from db
// const deleteProductFromDb = async (productId: string, payload: Partial<TProduct>) => {
//     const product = Product.findOneAndUpdate({_id: productId});
// };


// all the exports here
export const productServices = {
    createProductIntoDb,
    getSingleProductFromDb,
    getAllProductsFromDb,
    // deleteProductFromDb,
};
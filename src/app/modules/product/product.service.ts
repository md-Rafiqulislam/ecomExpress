
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
    const result = await Product.findById({_id: id});
    if(result?.isDeleted) {
        throw new Error ('The product is not in the data base');
    }
    return result;
};


// get all the products from db
const getAllProductsFromDb = async () => {
    const result = await Product.find({isDeleted: false});
    return result;
};


// delete product from db
const deleteProductFromDb = async (productId: string) => {
    const product = await Product.findOneAndUpdate({_id: productId}, {isDeleted: true});
    return {};
};


// update product into database
const updateProductIntoDb = async (productId: string, payload: Partial<TProduct>) => {
    const product = await Product.findById({_id: productId});
    
    if(!product) {
        throw new Error ('The product is not in the data base');
    }

    if(product?.isDeleted) {
        throw new Error ('The product is not in the data base');
    }

    const result = await Product.findByIdAndUpdate({_id: productId}, payload, {new: true});
    return result;

};


// all the exports here
export const productServices = {
    createProductIntoDb,
    getSingleProductFromDb,
    getAllProductsFromDb,
    deleteProductFromDb,
    updateProductIntoDb,
};
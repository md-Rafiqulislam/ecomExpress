
// all the imports here
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";


// create order into database
const createOrderIntoDb = async (payload: TOrder) => {
    const {productId, quantity} = payload;

    if(!productId) {
        throw new Error('you do not give any valid product id');
    }

    const product = await Product.findById(productId);
    if(!product) {
        throw new Error('the product is not found.');
    }

    if(product.isDeleted) {
        throw new Error('the product is already deleted.');
    }

    let productQuantity = product.inventory.quantity;
    if(productQuantity < quantity) {
        throw new Error('the product stock is insufficient.');
    }


    const result = await Order.create(payload);
    productQuantity -= quantity;

    await Product.findByIdAndUpdate({_id: productId}, {'inventory.quantity': productQuantity}, {new: true});

    return result;
};


// get all the orders
const getAllOrdersFromDb = async () => {
    const result = await Order.find();
    return result;
};


// all the exports here
export const orderServices = {
    createOrderIntoDb,
    getAllOrdersFromDb,
}
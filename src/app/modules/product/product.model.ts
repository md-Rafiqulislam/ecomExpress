
// all the imports here
import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVarient } from "./product.interface";


// varient schema
const varientSchema = new Schema<TVarient>({
    type: {
        type: String,
        requried: true,
    },
    value: {
        type: String,
        required: true,
    },
});


// inventory schema
const inventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    }
});


// proudct schema
const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: [
        {
            type: String,
            required: true,
        }
    ],
    variants: {
        type: [varientSchema],
        required: true,
    },
    inventory: {
        type: inventorySchema,
        required: true,
    },
});


// create product model and export
export const Product = model<TProduct>('Product', productSchema);

// all the imports here
import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVarient } from "./product.interface";


// varient schema
const varientSchema = new Schema<TVarient>({
    type: {
        type: String,
        requried: [true, 'Product varient type is required.'],
    },
    value: {
        type: String,
        required: [true, 'Product varient value is required.'],
    },
});


// inventory schema
const inventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required.'],
    },
    inStock: {
        type: Boolean,
        default: true,
    }
});


// proudct schema
const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: [true, 'Product name is required.'],
    },
    description: {
        type: String,
        required: [true, 'Product description is required.'],
    },
    price: {
        type: Number,
        required: [true, 'Product price is required.'],
    },
    category: {
        type: String,
        required: [true, 'Product category is required.'],
    },
    tags: [
        {
            type: String,
            required: [true, 'Product tag is required.'],
        }
    ],
    variants: {
        type: [varientSchema],
        required: [true, 'Product varient is required.'],
    },
    inventory: {
        type: inventorySchema,
        required: [true, 'Product inventory description is required.'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});


// create product model and export
export const Product = model<TProduct>('Product', productSchema);
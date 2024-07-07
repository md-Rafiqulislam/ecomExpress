
// all the imports here
import { Router } from "express";
import { productControllers } from "./product.controller";


// create product router object
const router = Router();


// get single product
router.get('/:productId', productControllers.getSingleProduct);

// create product into database
router.post('/', productControllers.createproduct);

// get all the products
router.get('/', productControllers.getAllProuducts);

// delete product
// router.put('/:productId');


// export the product router objecr
export const productRoutes = router;
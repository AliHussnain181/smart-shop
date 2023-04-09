import express from "express"
import { addProduct, deleteProduct, getProduct, getProductDetails, updateProduct } from "../Controllers/Product.js";
import { isAuthenticated } from "../Middlewares/auth.js";

const router = express.Router();

router.get("/product",getProduct);
router.post("/addproduct",addProduct)
router.get ("/product/:id",getProductDetails);
router.delete("/delete/:id",deleteProduct)
router.put("/update/:id",updateProduct);



export default router
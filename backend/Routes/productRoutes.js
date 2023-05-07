import express from "express"
import { addProduct, deleteProduct, getDetails, getProduct, getStats, updateProduct } from "../Controllers/Product.js";
import { isAuthenticated } from "../Middlewares/auth.js";
import { isAdmin } from "../Middlewares/auth.js";

const router = express.Router();

router.get("/product",getProduct);
router.post("/add",isAuthenticated,isAdmin,addProduct)
router.get ("/product/:id",getDetails);
router.delete("/product/:id",isAuthenticated,isAdmin,deleteProduct)
router.put("/product/:id",updateProduct);
router.get("/pd",isAuthenticated,isAdmin,getStats)




export default router
import express from "express";
import { forgetPassword, getMyProfile, login, logout, register, resetPassword } from "../Controllers/User.js";
import { isAuthenticated } from "../Middlewares/auth.js";

const router = express.Router()

router.post("/login",login)
router.post("/register",register)
router.get("/logout",logout)
router.get("/me",isAuthenticated,getMyProfile)
router.post("/forget", isAuthenticated, forgetPassword)
router.put("/resetpassword/:token",resetPassword)



export default router;

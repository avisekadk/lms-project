import express from "express";
import { register, verifyOTP, login, logout, getUser, forgotPassword, resetPassword, updatePassword } from "../controllers/authControllers.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register",register);
router.post("/verify-otp",verifyOTP);
router.post("/login",login);
router.post("/logout",isAuthenticated, logout);
router.post("/me",isAuthenticated, getUser);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.put("/password/update",isAuthenticated, updatePassword);

export default router;
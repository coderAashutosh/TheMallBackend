import express from "express";
import {
    createOrder,
    getAdminOrders,
    getMyOrders,
    getOrderDetails,
    proccessOrder,
    deleteOrder,
    processPayment,
} from "../controllers/order.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, createOrder);
router.post("/payment", isAuthenticated, processPayment);

router.get("/myOrders", isAuthenticated, getMyOrders);
router.get("/admin", isAuthenticated, isAdmin, getAdminOrders);

router
    .route("/single/:id")
    .get(isAuthenticated, getOrderDetails)
    .put(isAuthenticated, isAdmin, proccessOrder);

router.route("/single/:id").delete(isAuthenticated, isAdmin, deleteOrder);

export default router;
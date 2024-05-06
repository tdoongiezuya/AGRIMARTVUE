const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const reviewRoutes = require("./reviewRoutes");
const productRoutes = require("./productRoutes");
const addressRoutes = require("./addressRoutes");
const cartItemRoutes = require("./cartItemRoutes");

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewRoutes);
router.use("/address", addressRoutes);
router.use("/cart", cartItemRoutes);

module.exports = router;
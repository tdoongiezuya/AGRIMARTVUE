const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const reviewRoutes = require("./reviewRoutes");
const productRoutes = require("./productRoutes");
const addressRoutes = require("./addressRoutes");
const cartItemRoutes = require("./cartItemRoutes");
const chatRoutes = require("./chatRoutes");

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewRoutes);
router.use("/address", addressRoutes);
router.use("/cart", cartItemRoutes);
router.use("/chat", chatRoutes);

module.exports = router;
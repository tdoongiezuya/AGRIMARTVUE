const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const reviewRoutes = require("./reviewRoutes");
const productRoutes = require("./productRoutes");

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
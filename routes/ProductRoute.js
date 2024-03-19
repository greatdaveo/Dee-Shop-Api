const express = require("express");
const { createProduct } = require("../controller/productController");
const { protect, adminOnly } = require("../Middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, adminOnly, createProduct);

module.exports = router;


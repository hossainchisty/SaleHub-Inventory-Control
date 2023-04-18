// 👤 Import Express and product controller
const express = require("express");
const productController = require("../controllers/productController");

// 👀 Create product router
const productRouter = express.Router();

// Public route for retrieving all products
productRouter.get("/", productController.getAllProducts); 

// Public route for retrieving a product by ID
productRouter.get("/:productId", productController.getProductById);

// Private route for creating a new product
productRouter.post("/", productController.createProduct); 

// Private route for updating a product by ID
productRouter.put("/:productId", productController.updateProductById); 

// Private route for deleting a product by ID
productRouter.delete("/:productId", productController.deleteProductById); 

// 📝 Export product router
module.exports = productRouter;

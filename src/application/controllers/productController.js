// 👤 Import product service
const productService = require("../../domain/services/productService");

// 💡 Controller function for retrieving all products
async function getAllProducts(req, res, next) {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

// 💡 Controller function for retrieving a product by ID
async function getProductById(req, res, next) {
  try {
    const productId = req.params.productId;
    const product = await productService.getProductById(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

// 💡 Controller function for creating a new product
async function createProduct(req, res, next) {
  try {
    const productData = req.body;
    const newProduct = await productService.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
}

// 💡 Controller function for updating a product by ID
async function updateProductById(req, res, next) {
  try {
    const productId = req.params.productId;
    const productData = req.body;
    const updatedProduct = await productService.updateProductById(
      productId,
      productData
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
}

// 💡 Controller function for deleting a product by ID
async function deleteProductById(req, res, next) {
  try {
    const productId = req.params.productId;
    const deletedProduct = await productService.deleteProductById(productId);
    res.status(200).json(deletedProduct);
  } catch (error) {
    next(error);
  }
}

// 📝 Export product controller functions
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};

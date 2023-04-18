// 👤 Import product repository
const productRepository = require("../../infrastructure/repositories/productRepository");

// 💡 Service function for retrieving all products
async function getAllProducts() {
  return productRepository.getAllProducts();
}

// 💡 Service function for retrieving a product by ID
async function getProductById(productId) {
  return productRepository.getProductById(productId);
}

// 💡 Service function for creating a new product
async function createProduct(productData) {
  return productRepository.createProduct(productData);
}

// 💡 Service function for updating a product by ID
async function updateProductById(productId, productData) {
  return productRepository.updateProductById(productId, productData);
}

// 💡 Service function for deleting a product by ID
async function deleteProductById(productId) {
  return productRepository.deleteProductById(productId);
}

// 📝 Export product service functions
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};

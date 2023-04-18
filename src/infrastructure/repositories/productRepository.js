// 👤 Import Mongoose and Product model
const Product = require('../../domain/models/product.models');

// 💡 Repository function for retrieving all products
async function getAllProducts() {
  return Product.find();
}

// 💡 Repository function for retrieving a product by ID
async function getProductById(productId) {
  return Product.findById(productId);
}

// 💡 Repository function for creating a new product
async function createProduct(productData) {
  const newProduct = new Product(productData);
  return newProduct.save();
}

// 💡 Repository function for updating a product by ID
async function updateProductById(productId, productData) {
  return Product.findByIdAndUpdate(productId, productData, { new: true });
}

// 💡 Repository function for deleting a product by ID
async function deleteProductById(productId) {
  return Product.findByIdAndDelete(productId);
}

// 📝 Export product repository functions
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById
};

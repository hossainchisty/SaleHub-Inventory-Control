const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

productSchema.pre("save", function (next) {
  const product = this;
  product.productId = "PROD-" + Math.floor(Math.random() * 10000);
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

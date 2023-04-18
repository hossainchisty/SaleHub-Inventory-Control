// 👤 Import Express and other required modules
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

// 🔌 Connect to database
const connectDB = require("./src/infrastructure/configs/db.config");
connectDB();

const userRouter = require("./src/application/routers/userRouter");
const productRouter = require("./src/application/routers/productRouter");

// 💡 Create Express app instance
const app = express();

//  ⚙ｍ Middlewares
app.use(express.json());

// 🚀 Bind router to server
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

// 💡 Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

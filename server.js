// 👤 Import Express and other required modules
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

// 📮 Database connection with mongoose
const connectDB = require("./src/infrastructure/configs/db.config");
connectDB();

const userRouter = require('./src/application/routers/userRouter');

// 💡 Create Express app instance
const app = express();


// User router
app.use('/api/v1/users', userRouter);

// 💡 Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// 👤 Import Express and User controller
const express = require("express");
const userController = require("../controllers/userController");

// 💡 Router for handling user-related routes
const router = express.Router();

// 🌐 PUBLIC: Route for creating a new user
router.post("/register", userController.createUser);

// 🔒 PRIVATE: Route for getting all users
router.get("/", userController.getAllUsers);

// 🔒 PRIVATE: Route for getting a user by ID
router.get("/:userId", userController.getUserById);

// 🔒 PRIVATE: Route for updating a user by ID
router.put("/:userId", userController.updateUserById);

// 🔒 PRIVATE: Route for deleting a user by ID
router.delete("/:userId", userController.deleteUserById);

// 📝 Export user router
module.exports = router;

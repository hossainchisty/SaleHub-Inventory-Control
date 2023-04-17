// 👤 Import User service
const userService = require("../../domain/services/userService");

// 💡 Controller function for getting all users
const getAllUsers = async (req, res) => {
  try {
    // 📝 Call service to fetch all users
    const users = await userService.getAllUsers();
    // ✅ Return success response with users
    return res.status(200).json(users);
  } catch (error) {
    // ❌ Return error response
    return res.status(500).json({ error: error.message });
  }
};

// 💡 Controller function for getting a user by ID
const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    // 📝 Call service to fetch user by ID
    const user = await userService.getUserById(userId);
    if (!user) {
      // ❌ Return error response if user not found
      return res.status(404).json({ error: "User not found" });
    }
    // ✅ Return success response with user
    return res.status(200).json(user);
  } catch (error) {
    // ❌ Return error response
    return res.status(500).json({ error: error.message });
  }
};

// 💡 Controller function for creating a new user
const createUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    // 📝 Call service to create a new user
    const newUser = await userService.createUser(username, password, role);
    // ✅ Return success response with created user
    return res.status(201).json(newUser);
  } catch (error) {
    // ❌ Return error response
    return res.status(500).json({ error: error.message });
  }
};

// 💡 Controller function for updating a user by ID
const updateUserById = async (req, res) => {
  const userId = req.params.id;
  const { username, password, role } = req.body;
  try {
    // 📝 Call service to update user by ID
    const updatedUser = await userService.updateUserById(
      userId,
      username,
      password,
      role
    );
    if (!updatedUser) {
      // ❌ Return error response if user not found
      return res.status(404).json({ error: "User not found" });
    }
    // ✅ Return success response with updated user
    return res.status(200).json(updatedUser);
  } catch (error) {
    // ❌ Return error response
    return res.status(500).json({ error: error.message });
  }
};

// 💡 Controller function for deleting a user by ID
const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    // 📝 Call service to delete user by ID
    const deletedUser = await userService.deleteUserById(userId);
    if (!deletedUser) {
      // ❌ Return error response if user not found
      return res.status(404).json({ error: "User not found" });
    }
    // ✅ Return success response with deleted user
    return res.status(200).json(deletedUser);
  } catch (error) {
    // ❌ Return error response
    return res.status(500).json({ error: error.message });
  }
};

// 📝 Export controller functions
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

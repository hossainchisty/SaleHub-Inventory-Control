// 👤 Import User model
const User = require("../../domain/models/user.models");

// 💡 Repository function for getting all users
const getAllUsers = async () => {
  // 📝 Call User model to find all users
  const users = await User.find();
  // ✅ Return fetched users
  return users;
};

// 💡 Repository function for getting a user by ID
const getUserById = async (userId) => {
  // 📝 Call User model to find user by ID
  const user = await User.findById(userId);
  // ✅ Return fetched user
  return user;
};

// 💡 Repository function for creating a new user
const createUser = async (username, password, role) => {
  // 📝 Create a new User instance
  const newUser = new User({
    username,
    password,
    role,
  });
  // 📝 Call User model to save the new user
  const createdUser = await newUser.save();
  // ✅ Return created user
  return createdUser;
};

// 💡 Repository function for updating a user by ID
const updateUserById = async (userId, username, password, role) => {
  // 📝 Call User model to find and update user by ID
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      username,
      password,
      role,
    },
    { new: true }
  );
  // ✅ Return updated user
  return updatedUser;
};

// 💡 Repository function for deleting a user by ID
const deleteUserById = async (userId) => {
  // 📝 Call User model to find and delete user by ID
  const deletedUser = await User.findByIdAndDelete(userId);
  // ✅ Return deleted user
  return deletedUser;
};

// 📝 Export repository functions
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

// 👤 Import User repository
const userRepository = require("../../infrastructure/repositories/userRepository");

// 💡 Service function for getting all users
const getAllUsers = async () => {
  // 📝 Call repository to fetch all users
  const users = await userRepository.getAllUsers();
  // ✅ Return fetched users
  return users;
};

// 💡 Service function for getting a user by ID
const getUserById = async (userId) => {
  // 📝 Call repository to fetch user by ID
  const user = await userRepository.getUserById(userId);
  // ✅ Return fetched user
  return user;
};

// 💡 Service function for creating a new user
const createUser = async (username, password, role) => {
  // 📝 Call repository to create a new user
  const newUser = await userRepository.createUser(username, password, role);
  // ✅ Return created user
  return newUser;
};

// 💡 Service function for updating a user by ID
const updateUserById = async (userId, username, password, role) => {
  // 📝 Call repository to update user by ID
  const updatedUser = await userRepository.updateUserById(
    userId,
    username,
    password,
    role
  );
  // ✅ Return updated user
  return updatedUser;
};

// 💡 Service function for deleting a user by ID
const deleteUserById = async (userId) => {
  // 📝 Call repository to delete user by ID
  const deletedUser = await userRepository.deleteUserById(userId);
  // ✅ Return deleted user
  return deletedUser;
};

// 📝 Export service functions
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

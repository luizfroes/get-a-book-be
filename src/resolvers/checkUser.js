const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");

const checkUser = async (_, __, { user }) => {
  if (user) {
    const userFromDb = await User.findById(user.id);
    return userFromDb;
  }
  throw new AuthenticationError("Unauthorized access");
};

module.exports = checkUser;

const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const { signToken } = require("../utils/auth");

const userLogin = async (_, { user }) => {
  const userFromDb = await User.findOne({ email: user.email });

  if (!userFromDb) {
    console.log("[ERROR]: Failed to login. User does not exist.");
    throw new AuthenticationError("Failed to login.");
  }

  const isValidPassword = await userFromDb.checkPassword(user.password);

  if (!isValidPassword) {
    console.log("[ERROR]: Failed to login. Incorrect password.");
    throw new AuthenticationError("Failed to login.");
  }

  return {
    token: signToken(userFromDb),
    user: userFromDb,
  };
};

module.exports = userLogin;

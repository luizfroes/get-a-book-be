const { ApolloError } = require("apollo-server");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const addUser = async (_, { user }) => {
  try {
    const newUser = await User.create(user);

    return {
      token: signToken(newUser),
      user: newUser,
    };
  } catch (error) {
    console.log(`[ERROR]: Failed to add user | ${error.message}`);
    throw new ApolloError("Failed to add user.");
  }
};

module.exports = addUser;

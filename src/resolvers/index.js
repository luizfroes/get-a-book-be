const userLogin = require("./userLogin");
const addUser = require("./addUser");
const saveBook = require("./saveBook");
const removeBook = require("./removeBook");
const checkUser = require("./checkUser");

console.log(addUser);

const resolvers = {
  Query: {
    checkUser,
  },
  Mutation: { userLogin, addUser, saveBook, removeBook },
};

module.exports = resolvers;

const userLogin = require("./userLogin");
const addUser = require("./addUser");
const saveBook = require("./saveBook");
const removeBook = require("./removeBook");
const me = require("./me");

console.log(addUser);

const resolvers = {
  Query: {
    me,
  },
  Mutation: { userLogin, addUser, saveBook, removeBook },
};

module.exports = resolvers;

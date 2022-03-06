require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { authMiddleware } = require("./utils/auth");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const init = async () => {
  try {
    const connectionUrl =
      process.env.MONGODB_URI ||
      `mongodb://localhost:27017/${process.env.DB_NAME}`;

    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { url } = await server.listen({
      port: process.env.PORT || 4000,
    });
    console.log(`Server running on ${url}`);
  } catch (error) {
    console.log(`[ERROR]: Failed to connect to DB | ${error.message}`);
  }
};

init();

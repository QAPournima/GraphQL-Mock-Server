const { readFileSync } = require('fs');
const { join } = require('path');
const { createServer } = require('@graphql-yoga/node');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const resolvers = require('./resolvers');

// Define the type definitions
const typeDefs = readFileSync(join(__dirname, "schema.graphql"), {
  encoding: "utf-8",
});

// Create the executable schema
const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers,
});

// Create the server
const server = createServer({
  schema,
});

// Start the server and listen on port 4000
server.start().then(() => {
  console.log("Server started on http://localhost:4000");
});
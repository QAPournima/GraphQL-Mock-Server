// Import the listTemplates resolver function
const listTemplates = require('./query');

// Import the fetchWAMessage resolver function
const fetchWAMessage = require('./fetchWAMessage');

// Import the Mutation resolvers
const Mutation = require('./mutation');

// Import the custom scalar type resolver
const AWSDateTime = require('./scalars');

// Define the Query resolvers
const Query = {
  listTemplates, // Resolver for the listTemplates query
  fetchWAMessage // Resolver for the fetchWAMessage query
};

// Combine all resolvers into a single object
const resolvers = {
  Query, // Query resolvers
  Mutation, // Mutation resolvers
  AWSDateTime // Custom scalar type resolvers
};

// Export the resolvers object
module.exports = resolvers;
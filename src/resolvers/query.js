// Import utility functions
const { formatDate, getRandomTemplateName, getRandomCompanyID } = require('../utils');

// Define the listTemplates resolver function
const listTemplates = (_, { input }) => {
  // Mock implementation of listTemplates
  const result = {
    pageInfo: {
      hasNextPage: true, // Mock hasNextPage value
      endCursor: "cursor123" // Mock endCursor value
    },
    templates: [
      {
        ID: "template1", // Mock template ID
        name: getRandomTemplateName(), // Use a random template name
        status: "ACTIVE", // Mock status value
        companyID: getRandomCompanyID(), // Use a random company ID
        updatedAtTimestamp: formatDate(new Date(1620000000000)), // Use a formatted date for updatedAtTimestamp
        createdAtTimestamp: formatDate(new Date(1610000000000)), // Use a formatted date for createdAtTimestamp
        type: "template", // Mock type value
        wabaID: "waba1", // Mock wabaID value
        parameterFormat: "POSITIONAL", // Mock parameterFormat value
        components: [], // Mock components value
        language: "en", // Mock language value
        category: "CATEGORY1", // Mock category value
        subCategory: null, // Mock subCategory value
        libraryTemplateName: null, // Mock libraryTemplateName value
        messageSendTtlSeconds: 3600 // Mock messageSendTtlSeconds value
      }
    ]
  };

  // Log the result to the console
  console.log("ListTemplates Result:", result);

  // Return the result
  return result;
};

// Export the listTemplates function
module.exports = listTemplates;
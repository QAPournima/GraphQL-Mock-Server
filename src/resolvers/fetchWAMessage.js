// Import utility functions and dotenv for environment variables
const { formatDate, getRandomText, getRandomTemplateName } = require('../utils');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Get the channel value from environment variables or use a default value
const channel = process.env.CHANNEL || 'default_channel';

// Define the fetchWAMessage resolver function
const fetchWAMessage = (_, { input }) => {
  // Mock implementation of fetchWAMessage
  const result = {
    channel: channel, // Use the channel value from environment variables
    lineID: input.lineID, // Use the lineID from the input
    externalNumber: input.externalNumber, // Use the externalNumber from the input
    agent: "AGENT1", // Mock agent value
    direction: "INBOUND", // Mock direction value
    status: "DELIVERED", // Mock status value
    undeliveredReason: null, // Mock undeliveredReason value
    hasUnsupportedContent: false, // Mock hasUnsupportedContent value
    createdAt: formatDate(new Date()), // Use the current date formatted as ddmmyyyy
    type: "template", // Mock type value
    text: getRandomText(), // Use a random text message
    mediaDetails: [], // Mock mediaDetails value
    templateDetails: {
      ID: "template1", // Mock template ID
      name: getRandomTemplateName(), // Use a random template name
      type: "template", // Mock template type
      components: [] // Mock components value
    },
    locationDetails: null, // Mock locationDetails value
    contactDetails: null, // Mock contactDetails value
    buttonDetails: null // Mock buttonDetails value
  };

  // Log the result to the console
  console.log("FetchWAMessage Result:", result);

  // Return the result
  return result;
};

// Export the fetchWAMessage function
module.exports = fetchWAMessage;
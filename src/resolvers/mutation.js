// Import utility functions
const { getRandomValue } = require('../utils');

// Parse environment variables as arrays
const bandwidthList = (process.env.BANDWIDTH || "0").split(',').map(value => parseFloat(value.trim()));
const deviceList = (process.env.DEVICE || "Unknown Device").split(',').map(value => value.trim());
const networkTypeList = (process.env.NETWORK_TYPE || "Unknown Network Type").split(',').map(value => value.trim());

// Define the Mutation resolvers
const Mutation = {
  // Define the saveNetworkDiagnostic resolver function
  saveNetworkDiagnostic: (_, { input }) => {
    // Use random values from environment variable arrays
    const result = {
      success: true, // Mock success value
      bandwidth: getRandomValue(bandwidthList), // Use a random bandwidth value
      device: getRandomValue(deviceList), // Use a random device value
      networkType: getRandomValue(networkTypeList), // Use a random network type value
      ipAddress: input.ipAddress, // Use the ipAddress from the input
      isTurnRequired: input.isTurnRequired, // Use the isTurnRequired from the input
      jitter: input.jitter, // Use the jitter from the input
      mosScore: input.mosScore, // Use the mosScore from the input
      percentagePacketLoss: input.percentagePacketLoss, // Use the percentagePacketLoss from the input
      percentageVolumeIn: input.percentageVolumeIn, // Use the percentageVolumeIn from the input
      percentageVolumeOut: input.percentageVolumeOut, // Use the percentageVolumeOut from the input
      protocol: input.protocol, // Use the protocol from the input
      rtt: input.rtt, // Use the rtt from the input
    };

    // Log the result to the console
    console.log("Result:", result);

    // Return the result
    return result;
  },
  // Define the sendMessage resolver function
  sendMessage: (_, { input }) => {
    // Mock implementation of sendMessage
    const result = {
      success: true, // Mock success value
      message: `Message sent to ${input.externalNumber} via ${input.channel || 'native'}` // Mock message value
    };

    // Log the result to the console
    console.log("SendMessage Result:", result);

    // Return the result
    return result;
  }
};

// Export the Mutation object
module.exports = Mutation;
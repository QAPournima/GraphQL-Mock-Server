const formatDate = require('./formatDate');

const getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomText = () => {
  const messages = [
    "Hello, this is a test message.",
    "This is another random message.",
    "Sample text message for testing.",
    "Random message content here.",
    "Test message with random text."
  ];
  return getRandomValue(messages);
};

const getRandomTemplateName = () => {
  const names = [
    "Template Alpha",
    "Template Beta",
    "Template Gamma",
    "Template Delta",
    "Template Epsilon"
  ];
  return getRandomValue(names);
};

const getRandomCompanyID = () => {
  return Math.floor(Math.random() * 100) + 1; // Random integer between 1 and 100
};

module.exports = {
  formatDate,
  getRandomValue,
  getRandomText,
  getRandomTemplateName,
  getRandomCompanyID
};
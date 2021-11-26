const path = require('path');
require('dotenv').config({ path: path.resolve('.env') });
module.exports = {
  DEV_TO_API_KEY: process.env.DEV_TO_API_KEY,
};

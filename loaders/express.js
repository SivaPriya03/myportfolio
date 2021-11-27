const configureClientPath = require('../routes/client');
const configureApi = require('../routes/api');

const express = (app) => {
  configureClientPath(app);
  configureApi(app);
};
module.exports = express;

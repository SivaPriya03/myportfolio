const { getCWD } = require('../../utils');

const configureAPI = (app) => {
  app.get('/api/mydata', (_, res) => {
    const path = require('path');
    res.sendFile(path.resolve('data/myprofile.json'));
  });
};

module.exports = configureAPI;

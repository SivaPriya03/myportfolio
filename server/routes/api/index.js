const { getCWD } = require('../../utils');

const configureAPI = (app) => {
  app.get('/api/mydata', (_, res) => {
    const mydata = require('../../data/myprofile');
    res.send(mydata);
  });
};

module.exports = configureAPI;

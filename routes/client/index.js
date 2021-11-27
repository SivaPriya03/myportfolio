const express = require('express');
const path = require('path');
const { getCWD } = require('../../utils');

const configureClientPath = (app) => {
  const rootPath = getCWD();
  const clientFolder = path.resolve(rootPath, './client');
  app.get('/', (req, rootResponse) => {
    const sendProductionHTML = () => {
      rootResponse.sendFile(clientFolder + '/dist/index.html');
    };
    sendProductionHTML();
  });
  app.use('/assets', express.static('assets'));
  app.use(express.static(clientFolder + '/dist'));
};
module.exports = configureClientPath;

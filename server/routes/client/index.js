const express = require('express');
const path = require('path');
const { getHTMLFromDevURL, forwardRequests } = require('../../proxies');
const { getCWD } = require('../../utils');

const configureClientPath = (app) => {
  const rootPath = getCWD();
  const clientFolder = path.resolve(rootPath, '../client');
  const devURL = global.DEV_URL;
  app.get('/', (req, rootResponse) => {
    const sendProductionHTML = () => {
      rootResponse.sendFile(clientFolder + '/dist/index.html');
    };
    if (devURL) {
      // Always false
      getHTMLFromDevURL(devURL, (data, error) => {
        if (error) {
          sendProductionHTML();
        } else {
          rootResponse.send(data);
        }
      });
    } else {
      sendProductionHTML();
    }
  });

  if (!devURL) {
    app.use(express.static(clientFolder + '/dist'));
  } else {
    app.get(['/*.js', '/*.css'], (request, response) => {
      console.log(request.path);
      forwardRequests(devURL, request.path, (data, error) => {
        console.log(data);
        if (data) {
          response.send(data);
        } else {
          console.error('Error in acquiring the file');
        }
      });
    });
  }
};
module.exports = configureClientPath;

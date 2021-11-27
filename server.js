const express = require('express');

const port = process.env.PORT || 3001;
function startServer() {
  const app = express();
  const configureLoaders = require('./loaders');
  configureLoaders(app);

  app.listen(port, () => {
    console.log('Your app is listening on port 3000');
  });
}

startServer();

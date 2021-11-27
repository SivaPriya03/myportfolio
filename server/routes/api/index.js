const express = require('express');
const { body } = require('express-validator');
const saveMessage = require('../../utils/saveMessage');

const configureAPI = (app) => {
  app.use(express.json());
  app.get('/api/mydata', (_, res) => {
    const mydata = require('../../data/myprofile');
    const { getMyBlogs } = require('../../actions');
    const afterFetch = (blogs, error) => {
      if (error) {
        console.log('Unexpected error while fetching blogs', error);
        res.send({ ...mydata, blogs: [] });
      } else {
        res.send({ ...mydata, blogs });
      }
    };
    getMyBlogs(afterFetch);
  });
  app.post(
    '/api/contact',
    body('email').isEmail().normalizeEmail(),
    body('name').not().isEmpty().trim().escape(),
    body('message').not().isEmpty().trim().escape(),
    (request, response) => {
      saveMessage(request.body);
      setTimeout(() => {
        response.sendStatus(200); // TODO: Need to remove
      }, 3000);
    }
  );
};

module.exports = configureAPI;

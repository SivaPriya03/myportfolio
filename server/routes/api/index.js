const { getCWD } = require('../../utils');

const configureAPI = (app) => {
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
};

module.exports = configureAPI;

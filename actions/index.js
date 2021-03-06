const { DEV_TO_API_KEY } = require('../config/envvars');

const getMyBlogs = (done) => {
  try {
    const https = require('https');
    https.get(
      'https://dev.to/api/articles/me?per_page=5',
      {
        headers: {
          'api-key': DEV_TO_API_KEY,
          'User-Agent': 'Node HTTPS',
        },
      },
      (response) => {
        let data = '';
        // A chunk of data has been received.
        response.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        response.on('end', () => {
          try {
            const posts = JSON.parse(data);
            done(
              posts.map((post) => {
                return {
                  url: post.url,
                  publishedTime: post.published_at,
                  image: post.cover_image,
                  title: post.title,
                  summary: post.description,
                  readingTime: post.reading_time_minutes,
                };
              }),
              null
            );
          } catch (e) {
            done(null, { error: 'Error While JSON parse', e });
          }
        });
        response.on('error', (error) => {
          done(null, { error: 'Error while fetching', error });
        });
      }
    );
  } catch (e) {
    done(null, { error: 'Error --> Exception', e });
  }
};

module.exports = {
  getMyBlogs,
};

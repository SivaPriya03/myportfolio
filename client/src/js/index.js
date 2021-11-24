import '../css/index.css';
import generateHTMLStr from '../html/generateHTMLStr';
import { getPortFolioData, loadCssResource } from './getData';

const rootElement = document.getElementById('root');

const showData = () => {
  getPortFolioData()
    .then((data) => {
      const htmlStr = generateHTMLStr(data);
      console.log({ htmlStr });
      rootElement.innerHTML = htmlStr;
    })
    .catch((err) => {
      console.log('Error', err);
    });
};
loadCssResource(
  'https://unicons.iconscout.com/release/v4.0.0/css/thinline.css',
  showData
);

import '../css/index.css';
import generateHTMLStr from '../html/generateHTMLStr';
import { getPortFolioData, loadCssResource } from './getData';
import enableScrollAnimation from './enableScrollAnimation';
import handleAnimation from './handleAnimation';

const rootElement = document.getElementById('root');

const showData = () => {
  getPortFolioData()
    .then((data) => {
      const htmlStr = generateHTMLStr(data);
      rootElement.innerHTML = htmlStr;
      enableScrollAnimation();
      handleAnimation();
    })
    .catch((err) => {
      console.log('Error', err);
    });
};
loadCssResource(
  'https://unicons.iconscout.com/release/v4.0.0/css/line.css',
  showData
);

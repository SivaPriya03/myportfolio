export const getPortFolioData = () => {
  return fetch('/api/mydata').then((res) => res.json());
};

export const loadCssResource = (href, onSuccess) => {
  let link = document.createElement('link');
  link.href = href;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.onload = onSuccess;
  document.getElementsByTagName('head')[0].appendChild(link);
};

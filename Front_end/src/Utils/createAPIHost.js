function createAPIHost() {
  const apiHost = 'http://127.0.0.1:8000'; // process.env.REACT_APP_API_HOST; //  window.API_URL;
  const apiPath = '/api'; // process.env.REACT_APP_API_PATH;

  const originHost = window.location.origin;

  return `${apiHost || originHost}${apiPath}`;
}

export default createAPIHost;

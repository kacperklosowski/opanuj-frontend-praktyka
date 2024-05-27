import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.metadata = { startTime: Date.now()}
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  const elapsedTime = Date.now() - response.config.metadata.startTime;

  console.log('Duration (ms):', elapsedTime);
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;

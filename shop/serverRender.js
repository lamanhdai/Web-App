import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = categoryId => {
  if (categoryId) {
    return `${config.serverUrl}/api/category/${categoryId}`;
  }
  return `${config.serverUrl}/api/category`;
};

const getInitialData = (categoryId, apiData) => {
  if (categoryId) {
    return {
      currentCategoryId: apiData._id,
      category: {
        [apiData._id]: apiData
      }
    };
  }
  return {
    category: apiData.category
  };
};

const serverRender = (categoryId) =>
  axios.get(getApiUrl(categoryId))
    .then(resp => {
      const initialData = getInitialData(categoryId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      };
    });

export default serverRender;

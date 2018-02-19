import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = typeId => {
  if (typeId) {
    return `${config.serverUrl}/api/types/${typeId}`;
  }
  return `${config.serverUrl}/api/types`;
};

const getInitialData = (typeId, apiData) => {
  if (typeId) {
    return {
      currenttypeId: apiData._id,
      types: {
        [apiData._id]: apiData
      }
    };
  }
  return {
    types: apiData.types
  };
};

const serverRender = (typeId) =>
  axios.get(getApiUrl(typeId))
    .then(resp => {
      const initialData = getInitialData(typeId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      };
    });

export default serverRender;

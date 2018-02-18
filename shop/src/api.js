import axios from 'axios';

export const fetchCategory = categorytId => {
  return axios.get(`/api/category/${categorytId}`)
              .then(resp => resp.data);
};

export const fetchCategoryList = () => {
  return axios.get('/api/category')
              .then(resp => resp.data.category);
};

export const fetchNames = nameIds => {
  return axios.get(`/api/products/${nameIds.join(',')}`)
              .then(resp => resp.data.names);
};

export const addName = (newName, categorytId) => {
  return axios.post('/api/names', { newName, categorytId })
              .then(resp => resp.data);
};

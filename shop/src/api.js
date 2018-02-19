import axios from 'axios';

export const fetchType = typetId => {
  return axios.get(`/api/types/${typetId}`)
              .then(resp => resp.data);
};

export const fetchTypeList = () => {
  return axios.get('/api/types')
              .then(resp => resp.data.types);
};

export const fetchNames = nameIds => {
  return axios.get(`/api/products/${nameIds.join(',')}`)
              .then(resp => resp.data.names);
};

export const addName = (newName, typetId) => {
  return axios.post('/api/names', { newName, typetId })
              .then(resp => resp.data);
};

import axios from 'axios';
import { REST_URL } from './ApiConstants';

const SERVICES_DATAS_URL = `${REST_URL}/service`;
export default {
  addService(service) {
    return axios.post(`${SERVICES_DATAS_URL}`, service);
  },

  getServices(filterTitle) {
    let filterLine = '';
    if (filterTitle && filterTitle !== '') {
      filterLine = `?title=${filterTitle}`;
    }
    return axios.get(`${SERVICES_DATAS_URL}/all${filterLine}`);
  },

  deleteServiceById(id) {
    return axios.delete(`${SERVICES_DATAS_URL}/${id}`);
  },

  editServiceById(id, service) {
    return axios.put(`${SERVICES_DATAS_URL}/${id}`, service);
  },

  getServiceById(id) {
    return axios.get(`${SERVICES_DATAS_URL}/${id}`);
  },
};

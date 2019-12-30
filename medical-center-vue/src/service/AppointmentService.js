import axios from 'axios';
import { REST_URL } from './ApiConstants';

const APPOINTMENTS_URL = `${REST_URL}/appointments`;

// время к врачу
export default {
  records: [
    {
      record: new Date(2019, 11, 25, 13, 0),
      title: 'Зубной врач',
    },
    {
      record: new Date(2020, 0, 9, 10, 30),
      title: 'Диагностика',
    },
    {
      record: new Date(2020, 1, 25, 11, 30),
      title: 'Терапевт',
    },
  ],

  // eslint-disable-next-line no-unused-vars
  getAvailableAppointmentsOfDay(serviceId, day, month, year) {
    return axios.get(`${APPOINTMENTS_URL}/getByDateAndServiceAvailable?service_id=${serviceId}&day=${day}&month=${month}&year=${year}`);
  },

  assignAppointment(appointment) {
    // eslint-disable-next-line
    alert(`Вы записались на услугу ${JSON.stringify(appointment)}`);
  },

  addAppointment(time, day, month, year, serviceId) {
    return axios.post(`${APPOINTMENTS_URL}/add?service_id=${serviceId}&day=${day}&month=${month}&year=${year}&time=${time}`);
  },


  getUserAppointments() {
    return this.records;
  },
  getPastRecords() {
    return this.records.filter(r => r.record <= new Date().getTime());
  },

  getNextRecords() {
    return this.records.filter(r => r.record > new Date().getTime());
  },
};

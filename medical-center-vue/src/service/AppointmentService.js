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

  getAvailableAppointmentsOfDay(serviceId, day, month, year) {
    return axios.get(`${APPOINTMENTS_URL}/getByDateAndServiceAvailable?service_id=${serviceId}&day=${day}&month=${month}&year=${year}`);
  },

  assignAppointment(appointment) {
    return axios.get(`${APPOINTMENTS_URL}/order/${appointment.id}`);
  },

  addAppointment(time, day, month, year, serviceId) {
    return axios.post(`${APPOINTMENTS_URL}/add?service_id=${serviceId}&day=${day}&month=${month}&year=${year}&time=${time}`);
  },

  getUserAppointments() {
    return axios.get(`${APPOINTMENTS_URL}/getOrders`)
      .then(data => data.data)
      .then(data => data.map((r) => {
        // eslint-disable-next-line no-param-reassign
        r.record = new Date(r.record);
        return r;
      }));
  },
};

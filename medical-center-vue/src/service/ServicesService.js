import axios from 'axios';
import { REST_URL } from './ApiConstants';

const SERVICES_DATAS_URL = `${REST_URL}/service`;

const sukablya = `Lorem fdsaasdfipsum dolor sit amet consectetur adipisicing elit. Dicta
        repellendus fuga sed rerum sint non amet ease in dolorem dolores iste
        harum aut ipsa error, natus
        consequatur sit libero. Laudantium?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta
        repellendus fuga sed rerum sint non amet esse in dolorem dolores iste
        harum aut ipsa error, natus
        consequatur sit libero. Laudantium?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        repellendus fuga sed rerum sinasdft non amet esse in dolorem dolores iste
        harum aut ipsa error, natus
        consequatur sit libero. Laudantium?fdsaasdfadasaasLorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta
        repellendus fuga sed rerum sint non amet esse in dolorem dolores iste
        harum aut ipsa error, natus
        consequatur sit libero. Laudantium?`;

const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

// т.к в JS день недели начинается с воскресенья
function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day === 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}

export default {

  services: [
    {
      id: 1,
      photo: 'https://via.placeholder.com/900x750',
      title: 'Зубной врач',
      description: sukablya,
    },
    {
      id: 2,
      photo: 'https://via.placeholder.com/900x750',
      title: 'Диагностика',
      description: sukablya,
    },
    {
      id: 3,
      photo: 'https://via.placeholder.com/900x750',
      title: 'Терапевт',
      description: sukablya,
    },
  ],

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

  getMonthName(month) {
    return monthNames[month];
  },

  getRecordsByUser() {
    return this.records;
  },

  addService(service) {
    this.services.push(service);
  },

  getPastRecords() {
    return this.records.filter(r => r.record <= new Date().getTime());
  },

  getNextRecords() {
    return this.records.filter(r => r.record > new Date().getTime());
  },

  getServices() {
    return axios.get(`${SERVICES_DATAS_URL}/all`);
  },

  deleteServiceById(id) {
    return axios.delete(`${SERVICES_DATAS_URL}/${id}`);
  },

  editServiceById(id, service) {
    this.services.forEach((item, i) => {
      if (item.id === Number(id)) {
        this.services[i] = Object.assign({}, service);
      }
    });
  },

  getServiceById(id) {
    return axios.get(`${SERVICES_DATAS_URL}/${id}`);
  },


  createCalendar(year, month) {
    const mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    const d = new Date(year, mon);
    let temp = new Date(year, mon);

    let table = '<tr>';
    let k = 1;
    temp.setDate(d.getDate() - getDay(d) - 1);
    for (let i = 0; i < getDay(d); i += 1) {
      temp.setDate(temp.getDate() + 1);
      table += `<td class="off"><a href="#">${temp.getDate()}</a></td>`;
    }

    temp = new Date(year, mon);
    temp.setDate(temp.getDate() + 1);
    while (d.getMonth() === mon) {
      table += `<td><a href="#">${d.getDate()}</a></td>`;

      if (getDay(d) % 7 === 6) { // вс, последний день - перевод строки
        table += '</tr>';
        // если день месяца не последний
        if (temp.getDate() > d.getDate()) {
          k += 1;
          table += '<tr>';
        }
      }
      temp.setDate(temp.getDate() + 1);
      d.setDate(d.getDate() + 1);
    }

    let daysNextMonth = 0;
    if (getDay(d) !== 0) {
      for (let i = getDay(d); i < 7; i += 1) {
        table += `<td class="off"><a href="#" class="off">${daysNextMonth += 1}</a></td>`;
      }
    }
    for (let i = k; i < 6; i += 1) {
      table += '<tr>';
      for (let j = 0; j < 7; j += 1) {
        table += `<td class="off"><a href="#"> ${daysNextMonth += 1} </a></td>`;
      }
      table += '</tr>';
    }

    return table;
  },
};

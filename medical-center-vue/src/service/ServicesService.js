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
  month: [
    {
      day: 25,
      valid: false,
    },
    {
      day: 26,
      valid: false,
    },
    {
      day: 27,
      valid: false,
    },
    {
      day: 28,
      valid: false,
    },
    {
      day: 29,
      valid: false,
    },
    {
      day: 30,
      valid: false,
    },
    {
      day: 1,
      valid: false,
    },
    {
      day: 2,
      valid: false,
    },
    {
      day: 3,
      valid: false,
    },
    {
      day: 4,
      valid: false,
    },
    {
      day: 5,
      valid: false,
    },
    {
      day: 6,
      valid: false,
    },
    {
      day: 7,
      valid: false,
    },
    {
      day: 8,
      valid: false,
    },
    {
      day: 9,
      valid: false,
    },
    {
      day: 10,
      valid: false,
    },
    {
      day: 11,
      valid: false,
    },
    {
      day: 12,
      valid: false,
    },
    {
      day: 13,
      valid: false,
    },
    {
      day: 14,
      valid: false,
    },
    {
      day: 15,
      valid: false,
    },
    {
      day: 16,
      valid: false,
    },
    {
      day: 17,
      valid: false,
    },
    {
      day: 18,
      valid: false,
    },
    {
      day: 19,
      valid: false,
    },
    {
      day: 20,
      valid: false,
    },
    {
      day: 21,
      valid: false,
    },
    {
      day: 22,
      valid: false,
    },
    {
      day: 23,
      valid: false,
    },
    {
      day: 24,
      valid: false,
    },
    {
      day: 25,
      valid: false,
    },
    {
      day: 26,
      valid: false,
    },
    {
      day: 27,
      valid: false,
    },
    {
      day: 28,
      valid: false,
    },
    {
      day: 29,
      valid: false,
    },
    {
      day: 30,
      valid: false,
    },
    {
      day: 31,
      valid: false,
    },
    {
      day: 1,
      valid: false,
    },
    {
      day: 2,
      valid: false,
    },
    {
      day: 3,
      valid: false,
    },
    {
      day: 4,
      valid: false,
    },
    {
      day: 5,
      valid: false,
    },
  ],

  getMonthName(month) {
    return monthNames[month];
  },

  getServices() {
    return this.services;
  },

  deleteServiceById(id) {
    this.services = this.services.filter(t => t.id !== id);
  },

  editServiceById(id, service) {
    this.services.forEach((item, i) => {
      if (item.id === Number(id)) {
        this.services[i] = Object.assign({}, service);
      }
    });
  },

  getServiceById(id) {
    const idParsed = Number(id);
    if (Number.isNaN(idParsed)) {
      return null;
    }
    return this.services.find(s => s.id === Number(idParsed));
  },
};

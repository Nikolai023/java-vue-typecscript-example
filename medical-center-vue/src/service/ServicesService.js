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

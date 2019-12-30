// время к врачу
const times = [
  {
    day: 2,
    time: ['12:00', '13:30', '14:00', '12:00', '13:30', '14:00', '12:00', '13:30', '14:00'],
  },
  {
    day: 5,
    time: ['11:00', '15:30', '18:00'],
  },
  {
    day: 10,
    time: ['10:00', '12:30', '17:00'],
  },
];
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
  getTimesOnDay(day, month, year) {
    const curDay = times.filter(t => t.day === day);
    return curDay[0].time;
  },

  addRecord(time, day, month, year, title) {
    // eslint-disable-next-line
    alert(`Вы записались на услугу ${title} в ${time} ${day} ${month} ${year}`);
  },

  // eslint-disable-next-line no-unused-vars
  addTime(time, day, month, year, title) {
    console.log(`${time} ${day} ${month} ${year} ${title}`);
    // eslint-disable-next-line
    alert(`Вы добавили время в ${time} ${day} ${month} ${year}`);
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

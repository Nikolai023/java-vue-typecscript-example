import AppointmentService from '@/service/AppointmentService';

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
  getMonthName(month) {
    return monthNames[month];
  },
  createCalendar(year, month, serviceId) {
    const mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    const d = new Date(year, mon);
    let temp = new Date(year, mon);
    return AppointmentService.getMonthAvailableDays(year, month, serviceId)
      .then(data => data.data)
      .then((haveRecords) => {
        const arr = [];

        let k = 1;
        temp.setDate(d.getDate() - getDay(d) - 1);
        for (let i = 0; i < getDay(d); i += 1) {
          temp.setDate(temp.getDate() + 1);
          arr.push({
            day: temp.getDate(),
            haveTime: false,
          });
        }

        temp = new Date(year, mon);
        temp.setDate(temp.getDate() + 1);
        while (d.getMonth() === mon) {
          arr.push({
            day: d.getDate(),
            haveTime: haveRecords.includes(d.getDate()),
          });
          if (getDay(d) % 7 === 6) { // вс, последний день - перевод строки
            // если день месяца не последний
            if (temp.getDate() > d.getDate()) {
              k += 1;
            }
          }
          temp.setDate(temp.getDate() + 1);
          d.setDate(d.getDate() + 1);
        }

        let daysNextMonth = 0;
        if (getDay(d) !== 0) {
          for (let i = getDay(d); i < 7; i += 1) {
            arr.push({
              day: daysNextMonth += 1,
              haveTime: false,
            });
          }
        }
        for (let i = k; i < 6; i += 1) {
          for (let j = 0; j < 7; j += 1) {
            arr.push({
              day: daysNextMonth += 1,
              haveTime: false,
            });
          }
        }

        return arr;
      });
  },
};

<template>
  <main>
    <section class="service-page">
      <div class="container">
        <div class="admin__panel" v-if="isAdmin">
          <button v-if="!isEditing"
                  class="btn service-card_btn" @click="handlerEditClicked">Редактировать
          </button>
          <button v-if="isEditing" @click="handlerSaveClicked" class="btn service-card_btn">
            Сохранить
          </button>
          <button v-if="isEditing" class="btn service-card_btn"
                  @click="handlerDeclineClicked">Отмена
          </button>
          <button v-if="isEditing" @click="handlerDeleteClicked"
                  class="btn service-card_btn btn_red">Удалить
          </button>
        </div>
        <div class="service-page__inner">
          <h2 v-if="!isEditing" class="service-page__title">{{ service.title }}</h2>
          <input v-else class="service-page__input-title" type="text" v-model="editArea.title">
          <div class="service-page__middle">
            <img class="service-page__img" :src="service.photo" alt="">
            <div class="calcont">
              <table class="cal">
                <caption>
                  <span class="prev" @click="prevMonth"><a href="#">←</a></span>
                  <span class="next" @click="nextMonth"><a href="#">→</a></span>
                  {{currentMonth + ' ' + currentYear}}
                </caption>
                <thead>
                <tr>
                  <th>Пн</th>
                  <th>Вт</th>
                  <th>Ср</th>
                  <th>Чт</th>
                  <th>Пт</th>
                  <th>Сб</th>
                  <th>Вс</th>
                </tr>
                </thead>
                <tbody v-html="calend">
                </tbody>
              </table>
              <div class="times">
                <div class="times__inner">
                  <span class="times__data"><a href="#" class="times__data-link">08:30</a></span>
                  <span class="times__data"><a href="#" class="times__data-link">09:30</a></span>
                  <span class="times__data"><a href="#" class="times__data-link">10:30</a></span>
                  <span class="times__data"><a href="#" class="times__data-link">11:30</a></span>
                  <span class="times__data"><a href="#" class="times__data-link">12:30</a></span>
                  <span class="times__data"><a href="#" class="times__data-link">13:30</a></span>
                  <span class="times__data"><a href="#" class="times__data-link">15:30</a></span>
                </div>
                <div class="calcont__submit">
                  <input type="submit" value="Записаться" class="btn service-card_btn">
                </div>
              </div>
            </div>
            <div v-if="!isEditing" contenteditable="false" class="service-page__description">
              {{ service.description }}
            </div>
            <div v-else contenteditable="true"
                 class="service-page__description"
                 v-html="editArea.description"
                 @focusout="onDescriptionInput($event)"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import ServicesService from '../service/ServicesService';
  import AuthService from '@/service/AuthService';

  // т.к в JS день недели начинается с воскресенья
  function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day === 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }

  function createCalendar(year, month) {
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
  }

  export default {
    data() {
      return {
        isEditing: false,
        isAdmin: AuthService.isAdmin(),
        currentMonth: 0,
        currentYear: 0,
        calend: '',
        date: new Date(),

        service: ServicesService.getServiceById(this.$route.params.id),
        editArea: {
          title: '',
          photo: '',
          description: '',
        },
      };
    },
    beforeMount() {
      this.date = new Date();
      this.calend = createCalendar(this.date.getFullYear(), this.date.getMonth() + 1);
      this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
      this.currentYear = this.date.getFullYear();

      if (this.service === null) {
        this.$router.push('/');
      }
    },
    methods: {

      nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
        this.calend = createCalendar(this.date.getFullYear(), this.date.getMonth() + 1);
        this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
        this.currentYear = this.date.getFullYear();
      },
      prevMonth() {
        if (this.date > new Date()) {
          this.date.setMonth(this.date.getMonth() - 1);
          this.calend = createCalendar(this.date.getFullYear(), this.date.getMonth() + 1);
          this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
          this.currentYear = this.date.getFullYear();
        }
      },
      onDescriptionInput(e) {
        this.editArea.description = e.target.innerHTML;
      },
      handlerEditClicked() {
        this.isEditing = true;
        this.editArea = Object.assign({}, this.service);
      },
      handlerDeclineClicked() {
        this.isEditing = false;
      },
      handlerSaveClicked() {
        this.service = Object.assign({}, this.editArea);
        this.isEditing = false;

        ServicesService.editServiceById(this.editArea.id, this.editArea);
      },
      handlerDeleteClicked() {
        ServicesService.deleteServiceById(this.service.id);
        console.log(ServicesService.getServices());
        this.$router.push('/');
      },
    },
  };
</script>

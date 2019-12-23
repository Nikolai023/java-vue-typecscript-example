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
                  <span class="prev"><a href="#">←</a></span>
                  <span class="next"><a href="#">→</a></span>
                  Декабрь 2019
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
                <tbody>
                <tr>
                  <td class="off"><a href="#">26</a></td>
                  <td class="off"><a href="#">27</a></td>
                  <td class="off"><a href="#">28</a></td>
                  <td class="off"><a href="#">29</a></td>
                  <td class="off"><a href="#">30</a></td>
                  <td class="off"><a href="#">31</a></td>
                  <td><a href="#">1</a></td>
                </tr>
                <tr>
                  <td><a href="#">2</a></td>
                  <td><a href="#">3</a></td>
                  <td><a href="#">4</a></td>
                  <td><a href="#">5</a></td>
                  <td><a href="#">6</a></td>
                  <td><a href="#">7</a></td>
                  <td><a href="#">8</a></td>
                </tr>
                <tr>
                  <td><a href="#">9</a></td>
                  <td><a href="#">10</a></td>
                  <td><a href="#">11</a></td>
                  <td><a href="#">12</a></td>
                  <td><a href="#">13</a></td>
                  <td><a href="#">14</a></td>
                  <td><a href="#">15</a></td>
                </tr>
                <tr>
                  <td><a href="#">16</a></td>
                  <td><a href="#">17</a></td>
                  <td><a href="#">18</a></td>
                  <td><a href="#">19</a></td>
                  <td><a href="#">20</a></td>
                  <td><a href="#">21</a></td>
                  <td><a href="#">22</a></td>
                </tr>
                <tr>
                  <td><a href="#">23</a></td>
                  <td><a href="#">24</a></td>
                  <td><a href="#">25</a></td>
                  <td><a href="#">26</a></td>
                  <td><a href="#">27</a></td>
                  <td class="active"><a href="#">28</a></td>
                  <td><a href="#">29</a></td>
                </tr>
                <tr>
                  <td><a href="#">30</a></td>
                  <td><a href="#">31</a></td>
                  <td class="off"><a href="#">1</a></td>
                  <td class="off"><a href="#">2</a></td>
                  <td class="off"><a href="#">3</a></td>
                  <td class="off"><a href="#">4</a></td>
                  <td class="off"><a href="#">5</a></td>
                </tr>
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
            <div v-html="calend"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import ServicesService from '../service/ServicesService';
  import AuthService from '@/service/AuthService';


  function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day === 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }

  function createCalendar(elem, year, month) {
    const mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    const d = new Date(year, mon);
    let temp = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    let k = 1;
    temp.setDate(d.getDate() - getDay(d) - 1);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < getDay(d); i++) {
      temp.setDate(temp.getDate() + 1);
      table += `<td>${temp.getDate()}</td>`;
    }

    // <td> ячейки календаря с датами]
    temp = new Date(year, mon);
    temp.setDate(temp.getDate() + 1);
    while (d.getMonth() === mon) {
      table += `<td>${d.getDate()}</td>`;

      if (getDay(d) % 7 === 6) { // вс, последний день - перевод строки
        table += '</tr>';
        if (temp.getDate() > d.getDate()) {
          // eslint-disable-next-line no-plusplus
          k++;
          table += '<tr>';
        }
      }
      temp.setDate(temp.getDate() + 1);
      d.setDate(d.getDate() + 1);
    }

    let j = 1;
    // eslint-disable-next-line no-use-before-define
    if (getDay(d) !== 0) {
      // eslint-disable-next-line no-plusplus
      for (let i = getDay(d); i < 7; i++) {
        // eslint-disable-next-line no-plusplus
        table += `<td> ${j++}</td>`;
      }
    }
    // eslint-disable-next-line no-plusplus
    for (let i = k; i < 6; i++) {
      // eslint-disable-next-line no-plusplus
      table += ('<tr>'
        // eslint-disable-next-line no-plusplus
        + `<td> ${j++}</td>`
        // eslint-disable-next-line no-plusplus
        + `<td> ${j++}</td>`
        // eslint-disable-next-line no-plusplus
        + `<td> ${j++}</td>`
        // eslint-disable-next-line no-plusplus
        + `<td> ${j++}</td>`
        // eslint-disable-next-line no-plusplus
        + `<td> ${j++}</td>`
        // eslint-disable-next-line no-plusplus
        + `<td> ${j++}</td>`
        // eslint-disable-next-line no-plusplus
        + `<td> ${j++}</td>`
        + '</tr>');
    }

    // закрыть таблицу
    table += '</tr></table>';

    return table;
  }

  export default {
    data() {
      return {
        isEditing: false,
        isAdmin: AuthService.isAdmin(),

        calend: createCalendar(2010, 2),
        service: ServicesService.getServiceById(this.$route.params.id),
        editArea: {
          title: '',
          photo: '',
          description: '',
        },
      };
    },
    beforeMount() {
      if (this.service === null) {
        this.$router.push('/');
      }
    },
    methods: {
      onDescriptionInput(e) {
        this.editArea.description = e.target.innerHTML;
      },
      handlerEditClicked() {
        console.log(new Date(2019, 11));
        console.log(getDay());
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

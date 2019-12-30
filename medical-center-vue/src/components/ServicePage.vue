<template>
  <main>
    <ConfirmModal v-bind:buttonText="buttonTextConfirm" v-bind:onConfirm="onConfirm"
                  v-bind:onDecline="onDecline"
                  v-bind:title="titleConfirm"
                  v-if="confirmModalVisible"
    />
    <section class="service-page">
      <div class="container">
        <div class="admin__panel" v-if="isAdmin">
          <button @click="handlerEditClicked"
                  class="btn service-card_btn" v-if="!isEditing">Редактировать
          </button>
          <button @click="handlerSaveClicked" class="btn service-card_btn" v-if="isEditing">
            Сохранить
          </button>
          <button @click="handlerDeclineClicked" class="btn service-card_btn"
                  v-if="isEditing">Отмена
          </button>
          <button @click="handlerDeleteClicked" class="btn service-card_btn btn_red"
                  v-if="isEditing">Удалить
          </button>
        </div>
        <div class="service-page__inner">
          <h2 class="service-page__title" v-if="!isEditing">{{ service.title }}</h2>
          <input class="service-page__input-title" type="text" v-else v-model="editArea.title">
          <div class="service-page__middle">
            <img :src="service.photo" alt="" class="service-page__img">
            <div class="calcont">
              <table class="cal">
                <caption>
                  <span @click="prevMonth" class="prev"><a href="#">←</a></span>
                  <span @click="nextMonth" class="next"><a href="#">→</a></span>
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
                <tbody>
                <tr>
                  <td @click="handlerTdClicked(calend[0])"
                      v-bind:class="{off: !calend[0].haveTime}">
                    <a href="#">{{calend[0].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[1])"
                      v-bind:class="{off: !calend[1].haveTime}">
                    <a href="#">{{calend[1].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[2])"
                      v-bind:class="{off: !calend[2].haveTime}">
                    <a href="#">{{calend[2].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[3])"
                      v-bind:class="{off: !calend[3].haveTime}">
                    <a href="#">{{calend[3].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[4])"
                      v-bind:class="{off: !calend[4].haveTime}">
                    <a href="#">{{calend[4].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[5])"
                      v-bind:class="{off: !calend[5].haveTime}">
                    <a href="#">{{calend[5].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[6])"
                      v-bind:class="{off: !calend[6].haveTime}">
                    <a href="#">{{calend[6].day}}</a>
                  </td>
                </tr>
                <tr>
                  <td @click="handlerTdClicked(calend[7])"
                      v-bind:class="{off: !calend[7].haveTime}">
                    <a href="#">{{calend[7].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[8])"
                      v-bind:class="{off: !calend[8].haveTime}">
                    <a href="#">{{calend[8].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[9])"
                      v-bind:class="{off: !calend[9].haveTime}">
                    <a href="#">{{calend[9].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[10])"
                      v-bind:class="{off: !calend[10].haveTime}">
                    <a href="#">{{calend[10].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[11])"
                      v-bind:class="{off: !calend[11].haveTime}">
                    <a href="#">{{calend[11].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[12])"
                      v-bind:class="{off: !calend[12].haveTime}">
                    <a href="#">{{calend[12].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[13])"
                      v-bind:class="{off: !calend[13].haveTime}">
                    <a href="#">{{calend[13].day}}</a>
                  </td>
                </tr>
                <tr>
                  <td @click="handlerTdClicked(calend[14])"
                      v-bind:class="{off: !calend[14].haveTime}">
                    <a href="#">{{calend[14].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[15])"
                      v-bind:class="{off: !calend[15].haveTime}">
                    <a href="#">{{calend[15].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[16])"
                      v-bind:class="{off: !calend[16].haveTime}">
                    <a href="#">{{calend[16].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[17])"
                      v-bind:class="{off: !calend[17].haveTime}">
                    <a href="#">{{calend[17].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[18])"
                      v-bind:class="{off: !calend[18].haveTime}">
                    <a href="#">{{calend[18].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[19])"
                      v-bind:class="{off: !calend[19].haveTime}">
                    <a href="#">{{calend[19].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[20])"
                      v-bind:class="{off: !calend[20].haveTime}">
                    <a href="#">{{calend[20].day}}</a>
                  </td>
                </tr>
                <tr>
                  <td @click="handlerTdClicked(calend[21])"
                      v-bind:class="{off: !calend[21].haveTime}">
                    <a href="#">{{calend[21].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[22])"
                      v-bind:class="{off: !calend[22].haveTime}">
                    <a href="#">{{calend[22].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[23])"
                      v-bind:class="{off: !calend[23].haveTime}">
                    <a href="#">{{calend[23].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[24])"
                      v-bind:class="{off: !calend[24].haveTime}">
                    <a href="#">{{calend[24].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[25])"
                      v-bind:class="{off: !calend[25].haveTime}">
                    <a href="#">{{calend[25].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[26])"
                      v-bind:class="{off: !calend[26].haveTime}">
                    <a href="#">{{calend[26].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[27])"
                      v-bind:class="{off: !calend[27].haveTime}">
                    <a href="#">{{calend[27].day}}</a>
                  </td>
                </tr>
                <tr>
                  <td @click="handlerTdClicked(calend[28])"
                      v-bind:class="{off: !calend[28].haveTime}">
                    <a href="#">{{calend[28].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[29])"
                      v-bind:class="{off: !calend[29].haveTime}">
                    <a href="#">{{calend[29].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[30])"
                      v-bind:class="{off: !calend[30].haveTime}">
                    <a href="#">{{calend[30].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[31])"
                      v-bind:class="{off: !calend[31].haveTime}">
                    <a href="#">{{calend[31].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[32])"
                      v-bind:class="{off: !calend[32].haveTime}">
                    <a href="#">{{calend[32].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[33])"
                      v-bind:class="{off: !calend[33].haveTime}">
                    <a href="#">{{calend[33].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[34])"
                      v-bind:class="{off: !calend[34].haveTime}">
                    <a href="#">{{calend[34].day}}</a>
                  </td>
                </tr>
                <tr>
                  <td @click="handlerTdClicked(calend[35])"
                      v-bind:class="{off: !calend[35].haveTime}">
                    <a href="#">{{calend[35].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[36])"
                      v-bind:class="{off: !calend[36].haveTime}">
                    <a href="#">{{calend[36].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[37])"
                      v-bind:class="{off: !calend[37].haveTime}">
                    <a href="#">{{calend[37].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[38])"
                      v-bind:class="{off: !calend[38].haveTime}">
                    <a href="#">{{calend[38].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[39])"
                      v-bind:class="{off: !calend[39].haveTime}">
                    <a href="#">{{calend[39].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[40])"
                      v-bind:class="{off: !calend[40].haveTime}">
                    <a href="#">{{calend[40].day}}</a>
                  </td>
                  <td @click="handlerTdClicked(calend[41])"
                      v-bind:class="{off: !calend[41].haveTime}">
                    <a href="#">{{calend[41].day}}</a>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="times">
                <div class="times__inner">
                  <TimesData v-for="time of times" v-bind:time="time" v-bind:key="time"
                    @handleTimeClick="handleTimeClick"/>
                </div>
                <div class="calcont__submit">
                  <input class="btn service-card_btn" type="submit" value="Записаться">
                </div>
              </div>
            </div>
            <div class="service-page__description" contenteditable="false" v-if="!isEditing">
              {{ service.description }}
            </div>
            <div @focusout="onDescriptionInput($event)" class="service-page__description"
                 contenteditable="true"
                 v-else
                 v-html="editArea.description"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import ServicesService from '../service/ServicesService';
  import AuthenticationService from '@/service/AuthenticationService';
  import ConfirmModal from './modals/ConfirmModal';
  import TimesData from './TimesData';

  export default {
    data() {
      return {
        isEditing: false,
        isAdmin: AuthenticationService.isAdmin(),
        currentMonth: 0,
        currentYear: 0,
        calend: [],
        date: new Date(),
        times: [],

        confirmModalVisible: false,
        titleConfirm: '',
        buttonTextConfirm: '',
        onConfirm: () => {
        },
        onDecline: () => {
        },

        service: {
          title: '',
          photo: '',
          description: '',
        },
        editArea: {
          title: '',
          photo: '',
          description: '',
        },
      };
    },
    components: {
      ConfirmModal,
      TimesData,
    },
    beforeMount() {
      ServicesService.getServiceById(this.$route.params.id)
        .then(data => data.data)
        .then((data) => {
          if (!data) {
            this.$router.push('/');
          }
          this.service = data;
        })
        .catch(() => {
          this.$router.push('/');
        });
      this.date = new Date();
      this.calend = ServicesService.createCalendar(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
      );
      this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
      this.currentYear = this.date.getFullYear();
    },
    methods: {
      handleTimeClick(time) {
        console.log(time);
      },
      handlerTdClicked(cell) {
        if (cell.haveTime) {
          this.times = ServicesService.getTimesOnDay(cell.day);
        }
      },

      nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
        this.calend = ServicesService.createCalendar(
          this.date.getFullYear(),
          this.date.getMonth() + 1,
        );
        this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
        this.currentYear = this.date.getFullYear();
      },
      prevMonth() {
        if (this.date > new Date()) {
          this.date.setMonth(this.date.getMonth() - 1);
          this.calend = ServicesService.createCalendar(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
          );
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
        this.confirmModalVisible = true;
        this.titleConfirm = 'Хотите сохранить?';
        this.buttonTextConfirm = 'Сохранить';
        this.onConfirm = () => {
          this.service = Object.assign({}, this.editArea);
          this.isEditing = false;
          this.cleanAndCloseConfirmModal();
        };
        this.onDecline = () => {
          this.cleanAndCloseConfirmModal();
          this.isEditing = false;
        };
        ServicesService.editServiceById(this.editArea.id, this.editArea);
      },
      cleanAndCloseConfirmModal() {
        this.titleConfirm = '';
        this.buttonTextConfirm = '';
        this.confirmModalVisible = !this.confirmModalVisible;
      },
      handlerDeleteClicked() {
        this.confirmModalVisible = true;
        this.titleConfirm = 'Хотите удалить?';
        this.buttonTextConfirm = 'Удалить';
        this.onConfirm = () => {
          ServicesService.deleteServiceById(this.service.id);
          this.isEditing = false;
          this.cleanAndCloseConfirmModal();
          this.$router.push('/');
        };
        this.onDecline = () => {
          this.cleanAndCloseConfirmModal();
          this.isEditing = false;
        };
      },
    },
  };
</script>

<style>
  .btn_green {
    background: green;
  }
</style>

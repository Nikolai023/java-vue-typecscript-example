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
          <div class="service__row">
            <div class="service-page__middle">
              <img src="https://via.placeholder.com/900x750" alt="" class="service-page__img">
              <div class="service-page__description" contenteditable="false" v-if="!isEditing">
                {{ service.description }}
              </div>
              <div @focusout="onDescriptionInput($event)" class="service-page__description"
                   contenteditable="true"
                   v-else
                   v-html="editArea.description"
              />
            </div>
            <div>
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
                  <BodyCalendar v-bind:calendar="calendar" v-bind:curDay="curDay"
                                @handlerTdClicked="handlerTdClicked"/>
                </table>
                <div class="times">
                  <div class="times__inner">
                    <TimesData v-for="time of times" v-bind:time="time" v-bind:key="time"
                               @handleTimeClick="handleTimeClick" v-bind:curTime="curTime"/>
                  </div>
                  <div class="calcont__submit">
                    <input @click.prevent="handlerSubmitRecord" class="btn service-card_btn"
                           type="submit"
                           value="Записаться">
                    <div class="record__error" v-if="cannotMakeAnAppointment">
                      Для записи выберите дату и время
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  import BodyCalendar from './BodyCalendar';

  export default {
    data() {
      return {
        isEditing: false,
        isAdmin: AuthenticationService.isAdmin(),
        currentMonth: 0,
        currentYear: 0,
        calendar: [],
        date: new Date(),
        times: [],
        curDay: -1,
        curTime: '',
        cannotMakeAnAppointment: false,

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
      BodyCalendar,
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
      this.calendar = ServicesService.createCalendar(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
      );
      this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
      this.currentYear = this.date.getFullYear();
    },
    methods: {
      handlerSubmitRecord() {
        // eslint-disable-next-line no-empty
        if (this.curTime && (this.curDay !== -1)) {
        } else {
          this.cannotMakeAnAppointment = true;
        }
      },
      handleTimeClick(time) {
        this.curTime = time;
        this.cannotMakeAnAppointment = false;
      },
      handlerTdClicked(cell) {
        if (cell.haveTime) {
          this.cannotMakeAnAppointment = false;
          this.curTime = '';
          this.curDay = cell.day;
          this.times = ServicesService.getTimesOnDay(cell.day,
                                                     this.date.getMonth(),
                                                     this.currentYear);
        }
      },
      nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
        this.calendar = ServicesService.createCalendar(
          this.date.getFullYear(),
          this.date.getMonth() + 1,
        );
        this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
        this.currentYear = this.date.getFullYear();
      },
      prevMonth() {
        if (this.date > new Date()) {
          this.date.setMonth(this.date.getMonth() - 1);
          this.calendar = ServicesService.createCalendar(
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

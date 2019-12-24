<template>
  <main>
    <ConfirmModal v-if="confirmModalVisible" v-bind:title="titleConfirm"
                  v-bind:onConfirm="onConfirm"
                  v-bind:onDecline="onDecline"
                  v-bind:buttonText="buttonTextConfirm"
    />
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
  import ConfirmModal from './modals/ConfirmModal';

  export default {
    data() {
      return {
        isEditing: false,
        isAdmin: AuthService.isAdmin(),
        currentMonth: 0,
        currentYear: 0,
        calend: '',
        date: new Date(),

        confirmModalVisible: false,
        titleConfirm: '',
        buttonTextConfirm: '',
        onConfirm: () => {
        },
        onDecline: () => {
        },

        service: ServicesService.getServiceById(this.$route.params.id),
        editArea: {
          title: '',
          photo: '',
          description: '',
        },
      };
    },
    components: {
      ConfirmModal,
    },
    beforeMount() {
      this.date = new Date();
      this.calend = ServicesService.createCalendar(this.date.getFullYear(),
                                                   this.date.getMonth() + 1);
      this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
      this.currentYear = this.date.getFullYear();

      if (this.service === null) {
        this.$router.push('/');
      }
    },
    methods: {

      nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
        this.calend = ServicesService.createCalendar(this.date.getFullYear(),
                                                     this.date.getMonth() + 1);
        this.currentMonth = ServicesService.getMonthName(this.date.getMonth());
        this.currentYear = this.date.getFullYear();
      },
      prevMonth() {
        if (this.date > new Date()) {
          this.date.setMonth(this.date.getMonth() - 1);
          this.calend = ServicesService.createCalendar(this.date.getFullYear(),
                                                       this.date.getMonth() + 1);
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

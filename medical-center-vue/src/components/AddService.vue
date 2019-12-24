<template>
  <main v-if="isAdmin">
    <!--    <ConfirmModal v-if="confirmModalVisible" v-bind:title="titleConfirm"-->
    <!--                  v-bind:onConfirm="onConfirm"-->
    <!--                  v-bind:onDecline="onDecline"-->
    <!--                  v-bind:buttonText="buttonTextConfirm"-->
    <!--    />-->
    <section class="service-page">
      <div class="container">
        <div class="admin__panel">
          <button @click="handlerSaveClicked" class="btn service-card_btn">
            Сохранить
          </button>
        </div>
        <div class="service-page__inner">
          <input class="service-page__input-title" type="text" v-model="editArea.title">
          <div class="service-page__middle">
            <img class="service-page__img" :src="editArea.photo" alt="">
            <div class="calcont">
              <table class="cal">
                <caption>
                  <span class="prev" ><a href="#">←</a></span>
                  <span class="next" ><a href="#">→</a></span>
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

            <div contenteditable="true"
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
  import AuthService from '@/service/AuthService';
  import ServicesService from '../service/ServicesService';

  export default {
    data() {
      return {
        isAdmin: AuthService.isAdmin(),
        calend: ServicesService.createCalendar(2019, 12),
        editArea: {
          title: '',
          description: '',
          photo: 'https://via.placeholder.com/900x750',
          // eslint-disable-next-line new-cap
          id: '',
        },
      };
    },
    methods: {
      onDescriptionInput(e) {
        this.editArea.description = e.target.innerHTML;
      },
      handlerSaveClicked() {
        this.editArea.id = new Date().getMilliseconds();
        ServicesService.addService(this.editArea);
        this.$router.push('/');
      },
    },
  };
</script>

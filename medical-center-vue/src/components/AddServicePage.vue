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
            <img :src="editArea.photo" alt="" class="service-page__img">
            <div class="calcont">
              <table class="cal">
                <caption>
                  <span class="prev"><a href="#">←</a></span>
                  <span class="next"><a href="#">→</a></span>
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
                  <span class="times__data"><a class="times__data-link" href="#">08:30</a></span>
                  <span class="times__data"><a class="times__data-link" href="#">09:30</a></span>
                  <span class="times__data"><a class="times__data-link" href="#">10:30</a></span>
                  <span class="times__data"><a class="times__data-link" href="#">11:30</a></span>
                  <span class="times__data"><a class="times__data-link" href="#">12:30</a></span>
                  <span class="times__data"><a class="times__data-link" href="#">13:30</a></span>
                  <span class="times__data"><a class="times__data-link" href="#">15:30</a></span>
                </div>
                <div class="calcont__submit">
                  <input class="btn service-card_btn" type="submit" value="Записаться">
                </div>
              </div>
            </div>

            <div @focusout="onDescriptionInput($event)"
                 class="service-page__description"
                 contenteditable="true"
                 v-html="editArea.description"
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

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
  import ServicesService from '../service/ServicesService';
  import AuthenticationService from '@/service/AuthenticationService';

  export default {
    data() {
      return {
        isAdmin: AuthenticationService.isAdmin(),
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
        ServicesService.addService(this.editArea)
          .then(() => {
            this.$router.push('/');
          })
          .catch(() => {
            this.$router.push('/');
          });
      },
    },
  };
</script>

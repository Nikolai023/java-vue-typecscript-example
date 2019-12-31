<template>
  <main v-if="isAdmin">
    <ImgUrlModal v-if="ImgUrlModalVisible" @handlerImgModalClose="handlerImgModalClose"
                 @handlerImgModalSubmit="handlerImgModalSubmit"/>
    <section class="service-page">
      <div class="container">
        <div class="admin__panel">
          <button @click="handlerSaveClicked" class="btn service-card_btn">
            Сохранить
          </button>
        </div>
        <div class="service-page__inner">
          <input class="service-page__input-title" type="text" v-model="editArea.title">
          <div class="service-page__middle pos__rel">
            <i @click="handlerEditPhoto" class="fas fa-pencil-alt"/>
            <img :src="getImgUrl(editArea.image)" alt="" class="service-page__img">
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
  import ImgUrlModal from './modals/ImgUrlModal';

  export default {
    data() {
      return {
        isAdmin: AuthenticationService.isAdmin(),
        ImgUrlModalVisible: false,
        editArea: {
          title: '',
          description: '',
          image: 'placeholder.png',
          id: '',
        },
      };
    },
    components: {
      ImgUrlModal,
    },
    methods: {
      handlerEditPhoto() {
        this.ImgUrlModalVisible = true;
      },
      getImgUrl(name) {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        return require(`../../public/static/${name}`);
      },
      handlerImgModalSubmit(ulrImg) {
        this.editArea.image = ulrImg;
        this.ImgUrlModalVisible = false;
      },
      handlerImgModalClose() {
        this.ImgUrlModalVisible = false;
      },
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

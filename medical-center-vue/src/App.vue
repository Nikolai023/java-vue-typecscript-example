<template>
  <div id="app">
    <Header @handlerAuthClicked="handlerAuthClicked"
            @handlerRegistryClicked="handlerRegistryClicked"
            v-bind:isAuth="isAuthorized"/>
    <!--modals-->
    <AuthModal @handlerAuthClicked="handlerAuthClicked" v-if="authModalVisible"
               v-bind:informTitle="informMessage"
               v-bind:informMessageVisible="informMessageVisible"
               @handlerAuthSubmit="handlerAuthSubmit"/>
    <RegistryModal @handlerRegistryClicked="handlerRegistryClicked" v-if="registryModalVisible"
                   v-bind:informTitle="informMessage"
                   v-bind:informMessageVisible="informMessageVisible"
                   @handlerRegistrationSubmit="handlerRegistrationSubmit"/>
    <InformationModal @handlerInformModalClicked="handlerInformModalClicked"
                      v-if="informationModalVisible" v-bind:title="informModalTitle"/>
    <!--main-->
    <router-view/>
    <!--footer-->
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import AuthModal from '@/components/modals/AuthModal';
  import AuthService from '@/service/AuthService';
  import RegistryModal from '@/components/modals/RegistryModal';
  import InformationModal from '@/components/modals/InformationModal';

  export default {
    data() {
      return {
        isAuthorized: AuthService.isAuthorized(),

        informMessage: 'Неправильный логин или пароль',
        informMessageVisible: false,

        informationModalVisible: false,
        informModalTitle: 'Регистрация успешна завершена',

        authModalVisible: false,
        registryModalVisible: false,
      };
    },
    components: {
      InformationModal,
      Header,
      Footer,
      AuthModal,
      RegistryModal,
    },
    methods: {
      handlerAuthClicked() {
        this.informMessageVisible = false;
        this.authModalVisible = !this.authModalVisible;
      },
      handlerRegistryClicked() {
        this.informMessageVisible = false;
        this.registryModalVisible = !this.registryModalVisible;
      },
      handlerInformModalClicked() {
        this.informationModalVisible = !this.informationModalVisible;
      },
      handlerAuthSubmit(login, password) {
        console.log(`${login} ${password}`);

        // если логин или пароль неправильный, то делать так,
        this.informMessage = 'Неправильный логин или пароль';
        this.informMessageVisible = true;

        // если все нормально, то делать так
        this.informMessageVisible = false;
        this.authModalVisible = !this.authModalVisible;
      },
      handlerRegistrationSubmit(login, password) {
        console.log(`${login} ${password}`);

        // если такой логин есть то делается так
        this.informMessage = 'Такой логин существует, попробуйте выбрать другой';
        this.informMessageVisible = true;

        // если все нормально, то делать так
        this.informMessageVisible = false;
        this.registryModalVisible = !this.registryModalVisible;
        this.informationModalVisible = true;
      },
    },
  };
</script>

<style>
  @import "./assets/style.css";

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

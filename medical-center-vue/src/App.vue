<template>
  <div id="app">
    <Header @handlerAuthClicked="handlerAuthClicked"
            @handlerRegistryClicked="handlerRegistryClicked"
            v-bind:isAuth="isAuthorized"/>
    <!--modals-->
    <AuthModal @handlerAuthClicked="handlerAuthClicked" v-if="authModalVisible"
               v-bind:informTitle="informMessage"
               v-bind:informMessageVisible="informMessageVisible"/>
    <RegistryModal @handlerRegistryClicked="handlerRegistryClicked" v-if="registryModalVisible"
                   v-bind:informTitle="informMessage"
                   v-bind:informMessageVisible="informMessageVisible"/>
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
        informModalTitle: 'Регистрация успешна',

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
        this.authModalVisible = !this.authModalVisible;
      },
      handlerRegistryClicked() {
        this.registryModalVisible = !this.registryModalVisible;
      },
      handlerInformModalClicked() {
        this.informationModalVisible = !this.informationModalVisible;
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

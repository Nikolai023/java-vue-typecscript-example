<template>
  <div id="app">
    <Header @handlerAuthClicked="handlerAuthClicked"
            @handlerRegistryClicked="handlerRegistryClicked"
            v-bind:isAuth="isAuth"
            @handlerExitClicked="handlerExitClicked"/>
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
  import RegistryModal from '@/components/modals/RegistryModal';
  import InformationModal from '@/components/modals/InformationModal';
  import AuthenticationService from '@/service/AuthenticationService';

  export default {
    data() {
      return {
        isAuth: AuthenticationService.isAuthorized(),

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
      handlerExitClicked() {
      },
      handlerInformModalClicked() {
        this.informationModalVisible = !this.informationModalVisible;
      },
      handlerAuthSubmit(login, password) {
        console.log(`${login} ${password}`);

        AuthenticationService.executeBasicAuthenticationService(login, password)
          .then((authDetails) => {
            AuthenticationService.registerSuccessfulLogin(authDetails, password);
            this.informMessageVisible = false;
            this.authModalVisible = false;
            this.isAuth = AuthenticationService.isAuthorized();
          })
          .catch((e) => {
            console.log(e);
            this.informMessage = 'Неправильный логин или пароль';
            this.informMessageVisible = true;
          });
      },
      handlerRegistrationSubmit(login, password) {
        AuthenticationService.registerNewUser(login, password)
          .then((response) => {
            if (response.data !== '') {
              this.informMessage = response.data;
              this.informMessageVisible = true;
              return;
            }
            this.informMessageVisible = false;
            this.registryModalVisible = !this.registryModalVisible;
            this.informationModalVisible = true;
            this.handlerAuthSubmit(login, password);
          });
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

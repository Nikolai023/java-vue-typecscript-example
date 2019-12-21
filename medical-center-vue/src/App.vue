<template>
  <div id="app">
    <Header @handlerAuthClicked="handlerAuthClicked"
            @handlerRegistryClicked="handlerRegistryClicked"
            v-bind:isAuth="isAuthorized"/>
    <!--modals-->
    <AuthModal v-if="authModalVisible" @handlerAuthClicked="handlerAuthClicked"/>
    <RegistryModal v-if="registryModalVisible" @handlerRegistryClicked="handlerRegistryClicked"/>

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

  export default {
    data() {
      return {
        isAuthorized: AuthService.isAuthorized(),

        authModalVisible: false,
        registryModalVisible: false,
      };
    },
    components: {
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
    },
  };
</script>

<style>
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

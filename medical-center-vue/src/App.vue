<template>
  <div id="app">
    <Header @handlerAuthClicked="handlerAuthClicked"
            @handlerRegistryClicked="handlerRegistryClicked"
            v-bind:IsAuth="ISAUTHURIZED"/>
    <AuthModal @handlerAuthClicked="handlerAuthClicked" v-if="authModalVisible"/>
    <RegistryModal @handlerRegistryClicked="handlerRegistryClicked" v-if="registryModalVisible"/>
    <ConfirmModal @handlerConfirmClicked="handlerConfirmClicked" v-bind:conf="isConfirmed"
                  v-if="confirmModalVisible"/>
    <ServicesList
      @remove-service="handlerRemoveService"
      v-bind:IsAdmin="ISADMIN"
      v-bind:services="services"
    />
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import ServicesList from '@/components/ServicesList';
  import AuthModal from '@/components/modals/AuthModal';
  import RegistryModal from '@/components/modals/RegistryModal';
  import ConfirmModal from '@/components/modals/ConfirmModal';

  const sukablya = `Lorem fdsaasdfipsum dolor sit amet consectetur adipisicing elit. Dicta
        repellendus fuga sed rerum sint non amet esse in dolorem dolores iste
        harum aut ipsa error, natus
        consequatur sit libero. Laudantium?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta
        repellendus fuga sed rerum sint non amet esse in dolorem dolores iste
        harum aut ipsa error, natus
        consequatur sit libero. Laudantium?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        repellendus fuga sed rerum sinasdft non amet esse in dolorem dolores iste
        harum aut ipsa error, natus
        consequatur sit libero. Laudantium?fdsaasdfadasaasLorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta
        repellendus fuga sed rerum sint non amet esse in dolorem dolores iste
        harum aut ipsa error, natus
        consequatur sit libero. Laudantium?`;
  export default {
    name: 'app',
    data() {
      return {
        ISAUTHURIZED: false,
        ISADMIN: true,

        currentDeletId: -1,

        isConfirmed: false,

        authModalVisible: false,
        registryModalVisible: false,
        confirmModalVisible: false,
        services: [
          {
            id: 1,
            photo: 'https://via.placeholder.com/900x750',
            title: 'Зубной врач',
            description: sukablya,
          },
          {
            id: 2,
            photo: 'https://via.placeholder.com/900x750',
            title: 'Диагностика жопы Коляна',
            description: sukablya,
          },
          {
            id: 3,
            photo: 'https://via.placeholder.com/900x750',
            title: 'Терапевт',
            description: sukablya,
          },
        ],
      };
    },
    components: {
      Header,
      Footer,
      ServicesList,
      AuthModal,
      RegistryModal,
      ConfirmModal,
    },
    methods: {
      handlerAuthClicked() {
        this.authModalVisible = !this.authModalVisible;
      },
      handlerRegistryClicked() {
        this.registryModalVisible = !this.registryModalVisible;
      },
      handlerRemoveService(id) {
        this.confirmModalVisible = true;
        this.currentDeletId = id;
      },
      handlerConfirmClicked(isConfirm) {
        this.isConfirmed = isConfirm;

        if (this.isConfirmed) {
          this.services = this.services.filter(t => t.id !== this.currentDeletId);
        }

        this.confirmModalVisible = !this.confirmModalVisible;
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

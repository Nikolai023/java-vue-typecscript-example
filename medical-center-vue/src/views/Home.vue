<template>
  <main>
    <ConfirmModal v-if="confirmModalVisible" v-bind:title="titleConfirm"
                  v-bind:onConfirm="onConfirm"
                  v-bind:onDecline="onDecline"
                  v-bind:buttonText="buttonTextConfirm"
    />
    <ServicesList
      v-bind:services="services"
      v-bind:isAdmin="isAdmin"
      @remove-service="handlerRemoveService"
    />
  </main>
</template>

<script>
  import ServicesList from '@/components/ServicesList';
  import ConfirmModal from '@/components/modals/ConfirmModal';
  import ServicesService from '../service/ServicesService';
  import AuthService from '@/service/AuthService';

  export default {
    name: 'app',
    data() {
      return {
        isAdmin: AuthService.isAdmin(),

        titleConfirm: '',
        onConfirm: () => {
        },
        onDecline: () => {
        },
        buttonTextConfirm: '',


        confirmModalVisible: false,
        services: ServicesService.getServices(),
      };
    },
    mounted() {

      // fetch('https://jsonplaceholder.typicode.com/posts')
      //     .then(response => response.json())
      //     // eslint-disable-next-line no-console
      //     .then(json =>  {this.services = json})
    },
    components: {
      ServicesList,
      ConfirmModal,
    },
    methods: {
      handlerRemoveService(id) {
        this.confirmModalVisible = true;
        this.titleConfirm = 'Хотите удалить?';
        this.buttonTextConfirm = 'Удалить';
        this.onConfirm = () => {
          ServicesService.deleteServiceById(id);
          this.services = ServicesService.getServices();
          this.cleanAndCloseConfirmModal();
        };
        this.onDecline = () => {
          this.cleanAndCloseConfirmModal();
        };
      },
      cleanAndCloseConfirmModal() {
        this.titleConfirm = '';
        this.confirmModalVisible = !this.confirmModalVisible;
      },
    },
  };
</script>

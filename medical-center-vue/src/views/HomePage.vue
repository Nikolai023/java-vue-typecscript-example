<template>
  <main>
    <ConfirmModal v-bind:buttonText="buttonTextConfirm" v-bind:onConfirm="onConfirm"
                  v-bind:onDecline="onDecline"
                  v-bind:title="titleConfirm"
                  v-if="confirmModalVisible"
    />
    <ServicesList
      @remove-service="handlerRemoveService"
      v-bind:isAdmin="isAdmin"
      v-bind:services="services"
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
        services: [],
      };
    },
    mounted() {
      ServicesService.getServices()
        .then(data => data.data)
        .then((data) => {
          console.log(data);
          this.services = data;
        });
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
          ServicesService.deleteServiceById(id)
            .then(() => {
              ServicesService.getServices()
                .then(data => data.data)
                .then((data) => {
                  console.log(data);
                  this.services = data;
                });
            });
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

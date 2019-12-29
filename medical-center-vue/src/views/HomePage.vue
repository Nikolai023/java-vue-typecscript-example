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
  import ServicesService from '@/service/ServicesService';
  import AuthenticationService from '@/service/AuthenticationService';

  export default {
    name: 'app',
    data() {
      return {
        isAdmin: AuthenticationService.isAdmin(),

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
      ServicesService.getServices(this.$route.query.title)
        .then(data => data.data)
        .then((data) => {
          this.services = data;
        });
    },
    watch: {
      $route(to, from) {
        console.log(to + from);
        ServicesService.getServices(this.$route.query.title)
          .then(data => data.data)
          .then((data) => {
            this.services = data;
          });
      },
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
          console.log(this.$route.query.title);
          ServicesService.deleteServiceById(id)
            .then(() => {
              ServicesService.getServices(this.$route.query.title)
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

<template>

  <section class="services">
    <div class="container">
      <div class="admin__panel">
        <button @click="handlerAddService" class="btn service-card_btn">
          Добавить услугу
        </button>
      </div>
      <div class="services__inner">

        <ServiceItem
          @remove-service="handlerRemoveService"
          v-bind:isAdmin="isAdmin"
          v-bind:key="serv.id"
          v-bind:serv="serv"
          v-for="serv of services"
        />

      </div>
    </div>
  </section>

</template>

<script>
  import ServiceItem from '@/components/ServiceItem';

  export default {
    props: ['services', 'isAdmin'],
    components: {
      ServiceItem,
    },
    methods: {
      handlerRemoveService(id) {
        this.$emit('remove-service', id);
      },
      handlerAddService() {
        this.$router.push('/addservice');
      },
    },
  };
</script>

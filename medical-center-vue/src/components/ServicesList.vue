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
          v-for="serv of services"
          v-bind:key="serv.id"
          v-bind:serv="serv"
          v-bind:isAdmin="isAdmin"
          @remove-service="handlerRemoveService"
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

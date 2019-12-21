<template>

  <section class="services">
    <div class="container">
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
    },
  };
</script>

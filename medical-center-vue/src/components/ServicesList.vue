<template>
  <main>
    <section class="services">
      <div class="container">
        <div class="services__inner">

          <ServiceItem
            @remove-service="handlerRemoveService"
            v-bind:IsAdmin="IsAdmin"
            v-bind:key="serv.id"
            v-bind:serv="serv"
            v-for="serv of services"
          />

        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import ServiceItem from '@/components/ServiceItem';

  export default {
    props: ['services', 'IsAdmin'],
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

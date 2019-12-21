<template>
  <div class="service-card">
    <div class="service-card__buttons">
      <a v-if="isAdmin" class="service-card__round-btn" href="#"><i
        class="fas fa-pencil-alt"/></a>
      <a v-if="isAdmin" @click.prevent="$emit('remove-service', serv.id)"
         class="service-card__round-btn"
         href="#">
        <i class="far fa-times-circle"/></a>
    </div>
    <img :src="serv.photo" alt="" class="service-card__img">
    <div class="service-card__info">
      <h3 class="service-card__title"><a href="#">{{ serv.title }}</a></h3>
      <div class="service-card__description">{{ serv.description }}</div>
      <router-link :to="{name: 'service', params:{pararams, id: serv.id} }"
                   class="btn service-card_btn">Подробнее
      </router-link>
    </div>
  </div>
</template>

<script>
  import AuthService from '@/service/AuthService';

  export default {
    props: {
      serv: {
        type: Object,
        required: true,
      },
      isAdmin: AuthService.isAdmin(),
    },
    methods: {
      pararams() {
        return {
          cityid: this.serv,
        };
      },
    },
  };
</script>

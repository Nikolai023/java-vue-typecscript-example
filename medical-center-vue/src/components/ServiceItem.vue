<template>
  <div class="service-card">
    <div class="service-card__buttons">
      <a class="service-card__round-btn" href="#" v-if="IsAdmin"><i
        class="fas fa-pencil-alt"></i></a>
      <a @click.prevent="$emit('remove-service', serv.id)" class="service-card__round-btn"
         href="#" v-if="IsAdmin">
        <i class="far fa-times-circle"></i></a>
    </div>
    <img :src="serv.photo" alt="" class="service-card__img">
    <div class="service-card__info">
      <h3 class="service-card__title"><a href="#">{{ serv.title }}</a></h3>
      <div class="service-card__description">{{ serv.description }}</div>
      <a class="btn service-card_btn" href="#">Подробнее</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      serv: {
        type: Object,
        required: true,
      },
      IsAdmin: Boolean,
    },
  };
</script>

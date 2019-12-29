<template>
  <div class="modal">
    <div class="modal__dialog">
      <div class="modal__inner">
        <div class="form">
          <h2 class="form__name">{{ title }}</h2>
          <div class="form__btn-wrapper">
            <a @click.prevent="$emit('handlerInformModalClicked')" class="service-card__round-btn"
               href="">
              <i class="far fa-times-circle"/>
            </a>
          </div>
          <div class="confirm__btn-wrapper">
            <a @click.prevent="$emit('handlerInformModalClicked')" class="btn service-card_btn"
               href="">ОК</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
    },
  };
</script>

<template>
  <div class="modal">
    <div class="modal__dialog">
      <div class="modal__inner">
        <div class="form">
          <h2 class="form__name">{{ title }}</h2>
          <div class="form__btn-wrapper">
            <a class="service-card__round-btn" href=""
               @click.prevent="onDecline">
              <i class="far fa-times-circle"/>
            </a>
          </div>
          <div class="confirm__btn-wrapper">
            <a href="" class="btn service-card_btn btn_red"
               v-bind:class="{green: buttonText === 'Сохранить'}"
               @click.prevent="onConfirm">{{ buttonText }}</a>
            <a href="" class="btn service-card_btn"
               @click.prevent="onDecline">Отмена</a>
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
      buttonText: String,
      onConfirm: Function,
      onDecline: Function,
    },
  };
</script>

<style>
  .green {
    background-image: linear-gradient(90deg, #6CB16C 0%, #7FC57F 50%, #80c680 51%, #8bd08b 100%);
    border-color: #528C52;
  }
</style>

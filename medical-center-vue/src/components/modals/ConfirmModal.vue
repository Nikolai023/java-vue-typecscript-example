<template>
  <div class="modal">
    <div class="modal__dialog">
      <div class="modal__inner">
        <div action="" class="form">
          <h2 class="form__name">Хотите удалить?</h2>
          <div class="form__btn-wrapper">
            <a @click.prevent="$emit('handlerConfirmClicked', false)"
               class="service-card__round-btn"
               href="">
              <i class="far fa-times-circle"/>
            </a>
          </div>
          <div class="confirm__btn-wrapper">
            <a @click.prevent="ttt(true)" class="btn service-card_btn btn_red"
               href="">Удалить</a>
            <a @click.prevent="ttt(false)" class="btn service-card_btn" href="">Отмена</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      conf: Boolean,
    },
    methods: {
      ttt(ll) {
        if (ll) {
          this.$emit('handlerConfirmClicked', true);
        } else {
          this.$emit('handlerConfirmClicked', false);
        }
      },
    },
  };
</script>

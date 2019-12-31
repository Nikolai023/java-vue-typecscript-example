<template>
  <div class="modal">
    <div class="modal__dialog">
      <div class="modal__inner">
        <form action="" class="form"
              @submit.prevent="$emit('handlerImgModalSubmit', name)">
          <h2 class="form__name">Введите имя картинки</h2>
          <div class="form__btn-wrapper">
            <a @click.prevent="$emit('handlerImgModalClose')"
               class="service-card__round-btn" href="">
              <i class="far fa-times-circle"/>
            </a>
          </div>
          <fieldset class="form__field">
            <input class="form__input" placeholder="" required
                   type="text" v-model="name"/>
            <span class="form__error">Введите имя изображения например name.png</span>
          </fieldset>

          <input class="btn service-card_btn" type="submit" value="ОК">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
      };
    },
  };
</script>

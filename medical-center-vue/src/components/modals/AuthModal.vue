<template>
  <div class="modal">
    <div class="modal__dialog">
      <div class="modal__inner">
        <form action="" class="form">
          <h2 class="form__name">Авторизация</h2>
          <div class="form__btn-wrapper">
            <a @click.prevent="$emit('handlerAuthClicked')" class="service-card__round-btn" href="">
              <i class="far fa-times-circle"/>
            </a>
          </div>
          <fieldset class="form__field">
            <input class="form__input" pattern="[A-Za-z]{0,}" placeholder="Логин" required
                   type="text"/>
            <span class="form__error">Логин должен содержать только латинские символы</span>
          </fieldset>
          <fieldset class="form__field">
            <input class="form__input" pattern="[A-Za-z0-9]{5,}" placeholder="Пароль" required
                   type="password"/>
            <span class="form__error">
              Пароль должен быть не менее 5 символов,
              и содержать только латинские символы и цифры
            </span>
          </fieldset>
          <input class="btn service-card_btn" type="submit" value="Войти">
        </form>
      </div>
    </div>
  </div>
</template>

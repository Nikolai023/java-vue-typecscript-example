<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div @click="handlerLogoClick" class="header__logo">Клиника</div>
        <div class="header__middle">
          <div class="search-block">
            <label for="search" class="search-block__label">
              <i class="fas fa-search"></i>
            </label>
            <input id="search" type="text" class="header___search">
          </div>
          <nav class="nav">
            <a @click.prevent="$emit('handlerAuthClicked')"
               class="nav__link" href=""
               v-if="!isAuth"> Войти </a>
            <a @click.prevent="$emit('handlerRegistryClicked')" class="nav__link" href=""
               v-if="!isAuth">Регистрация</a>
            <a @click.prevent="handlerLkClicked" class="nav__link" href=""
               v-if="isAuth">Личный кабинет</a>
            <a @click.prevent="handlerQuitClicked" class="nav__link nav__link_exit" href=""
               v-if="isAuth">Выход</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      isAuth: Boolean,
    },
    methods: {
      handlerLogoClick() {
        this.$router.push('/');
      },
      handlerLkClicked() {
        this.$router.push('/account');
      },
      handlerQuitClicked() {

      },
    },
  };
</script>

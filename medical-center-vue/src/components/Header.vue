<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div @click="handlerLogoClick" class="header__logo">Клиника</div>
        <nav class="nav">
          <a @click.prevent="$emit('handlerAuthClicked')"
             class="nav__link" href=""
             v-if="!isAuth"> Войти </a>
          <a @click.prevent="$emit('handlerRegistryClicked')" class="nav__link" href=""
             v-if="!isAuth">Регистрация</a>
          <a @click.prevent="handlerLkClicked" class="nav__link" href=""
             v-if="isAuth">Личный кабинет</a>
        </nav>
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
    },
  };
</script>

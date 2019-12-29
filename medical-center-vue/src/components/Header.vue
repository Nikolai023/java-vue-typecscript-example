<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div @click="handlerLogoClick" class="header__logo">Клиника</div>
        <div class="header__middle">
          <div class="search-block">
            <label v-if="!isSearching" for="search" class="search-block__label"
                   @click="handlerSearchClicked(searchLine)">
              <i class="fas fa-search"/>
            </label>
            <label v-if="isSearching" for="search" class="search-block__label"
                   @click="handlerNoSearchClicked()">
              <i class="fas fa-times"/>
            </label>
            <input id="search" type="text" class="header___search" v-model="searchLine">
          </div>
          <nav class="nav">
            <a @click.prevent="$emit('handlerAuthClicked')"
               class="nav__link" href=""
               v-if="!isAuth"> Войти </a>
            <a @click.prevent="$emit('handlerRegistryClicked')" class="nav__link" href=""
               v-if="!isAuth">Регистрация</a>
            <a @click.prevent="handlerLkClicked" class="nav__link" href=""
               v-if="isAuth">Личный кабинет</a>
            <a @click.prevent="$emit('handlerLogoutClicked')" class="nav__link nav__link_exit"
               href=""
               v-if="isAuth">Выход</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        searchLine: '',

        isSearching: false,
      };
    },
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
      handlerSearchClicked(searchLine) {
        this.$router.push({
          path: '/',
          query: { title: searchLine },
        });
        this.isSearching = true;
      },
      handlerNoSearchClicked() {
        this.isSearching = false;
        this.searchLine = '';
        this.$router.push({
          path: '/',
        });
      },
    },
  };
</script>

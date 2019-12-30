<template>
  <span class="times__data" >
    <a @click.prevent="$emit('handleTimeClick', time)"
       class="times__data-link" v-bind:class="{active: time === curTime}" href="#">{{time}}</a>
  </span>
</template>

<script>
  export default {
    props: {
      time: String,
      curTime: String,
    },
  };
</script>

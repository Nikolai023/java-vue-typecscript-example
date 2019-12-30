<template>
  <span class="times__data">
    <a @click.prevent="$emit('handleTimeClick', time)"
       class="times__data-link" href="#">{{time}}</a>
  </span>
</template>

<script>
  export default {
    props: {
      time: String,
    },
  };
</script>

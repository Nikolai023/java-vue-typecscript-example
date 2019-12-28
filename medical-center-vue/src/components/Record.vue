<template>
  <div class="record-card">

    <div class="record-card__info">
      <h3 class="record-card__title"><a>{{rec.title}}</a></h3>
      <div class="record-card__description">
        Запись
        <div class="record-card__date">на {{rec.record.getDay() + '.' +
          (rec.record.getMonth() + 1) + '.' + rec.record.getFullYear()}}
        </div>
        <div class="record-card__time"> в {{rec.record.getHours() + ':' +
          rec.record.getMinutes()}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['rec'],
    beforeMount() {
      this.rec.record.format('yyyy-mm-dd');
    },
  };
</script>

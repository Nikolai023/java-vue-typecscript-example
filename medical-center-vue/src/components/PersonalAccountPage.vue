<template>
  <main>
    <section class="records">
      <div class="container records_content">
        <div class="records__inner">
          <Record v-bind:key="+rec.record"
                  v-bind:rec="rec"
                  v-for="rec of records"
          />
        </div>
        <div class="records__sort">
          <div @click="clickPastRecords" class="records__text">Прошедшие записи</div>
          <div @click="clickNextRecords" class="records__text">Предстоящие записи</div>
          <div @click="clickAllRecords" class="records__text">Все записи</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import ServicesService from '../service/ServicesService';
  import Record from '@/components/Record';

  export default {
    data() {
      return {
        records: ServicesService.getRecordsByUser(),
      };
    },
    components: {
      Record,
    },
    methods: {
      clickPastRecords() {
        this.records = ServicesService.getPastRecords();
      },
      clickNextRecords() {
        this.records = ServicesService.getNextRecords();
      },
      clickAllRecords() {
        this.records = ServicesService.getRecordsByUser();
      },
    },
  };
</script>

<template>
  <main>
    <section class="records">
      <div class="container records_content">
        <div class="records__inner">
          <Record v-for="rec of records"
                  v-bind:rec="rec"
                  v-bind:key="+rec.record"
          />
        </div>
        <div class="records__sort">
          <div class="records__text" @click="clickPastRecords">Прошедшие записи</div>
          <div class="records__text" @click="clickNextRecords">Предстоящие записи</div>
          <div class="records__text" @click="clickAllRecords">Все записи</div>
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

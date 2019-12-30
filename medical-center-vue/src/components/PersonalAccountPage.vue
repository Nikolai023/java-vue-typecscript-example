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
  import Record from '@/components/Record';
  import AppointmentService from '@/service/AppointmentService';

  export default {
    data() {
      return {
        records: AppointmentService.getUserAppointments(),
      };
    },
    components: {
      Record,
    },
    methods: {
      clickPastRecords() {
        this.records = AppointmentService.getPastRecords();
      },
      clickNextRecords() {
        this.records = AppointmentService.getNextRecords();
      },
      clickAllRecords() {
        this.records = AppointmentService.getUserAppointments();
      },
    },
  };
</script>

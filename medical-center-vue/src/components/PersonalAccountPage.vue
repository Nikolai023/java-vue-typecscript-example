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
        records: [],
      };
    },
    mounted() {
      AppointmentService.getUserAppointments()
        .then((data) => {
          this.records = data;
        });
    },
    components: {
      Record,
    },
    methods: {
      clickAllRecords() {
        AppointmentService.getUserAppointments()
          .then((data) => {
            this.records = data;
          });
      },
      clickNextRecords() {
        AppointmentService.getUserAppointments()
          .then((data) => {
            const now = new Date().getTime();
            this.records = data.filter(r => r.record > now);
          });
      },
      clickPastRecords() {
        AppointmentService.getUserAppointments()
          .then((data) => {
            const now = new Date().getTime();
            this.records = data.filter(r => r.record <= now);
          });
      },
    },
  };
</script>

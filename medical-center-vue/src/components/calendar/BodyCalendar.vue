<template>
  <tbody>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[0])"
        v-bind:class="{off: !calendar[0].haveTime,
                      active: curDay === calendar[0].day && (calendar[0].haveTime) }">
      <a href="#">{{calendar[0].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[1])"
        v-bind:class="{off: !calendar[1].haveTime,
                      active: curDay === calendar[1].day && (calendar[1].haveTime) }">
      <a href="#">{{calendar[1].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[2])"
        v-bind:class="{off: !calendar[2].haveTime,
                      active: curDay === calendar[2].day && (calendar[2].haveTime) }">
      <a href="#">{{calendar[2].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[3])"
        v-bind:class="{off: !calendar[3].haveTime,
                      active: curDay === calendar[3].day && (calendar[3].haveTime) }">
      <a href="#">{{calendar[3].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[4])"
        v-bind:class="{off: !calendar[4].haveTime,
                      active: curDay === calendar[4].day && (calendar[4].haveTime) }">
      <a href="#">{{calendar[4].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[5])"
        v-bind:class="{off: !calendar[5].haveTime,
                      active: curDay === calendar[5].day && (calendar[5].haveTime) }">
      <a href="#">{{calendar[5].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[6])"
        v-bind:class="{off: !calendar[6].haveTime,
                      active: curDay === calendar[6].day && (calendar[6].haveTime) }">
      <a href="#">{{calendar[6].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[7])"
        v-bind:class="{off: !calendar[7].haveTime,
                      active: curDay === calendar[7].day && (calendar[7].haveTime) }">
      <a href="#">{{calendar[7].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[8])"
        v-bind:class="{off: !calendar[8].haveTime,
                      active: curDay === calendar[8].day && (calendar[8].haveTime) }">
      <a href="#">{{calendar[8].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[9])"
        v-bind:class="{off: !calendar[9].haveTime,
                      active: curDay === calendar[9].day && (calendar[9].haveTime) }">
      <a href="#">{{calendar[9].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[10])"
        v-bind:class="{off: !calendar[10].haveTime,
                      active: curDay === calendar[10].day && (calendar[10].haveTime) }">
      <a href="#">{{calendar[10].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[11])"
        v-bind:class="{off: !calendar[11].haveTime,
                      active: curDay === calendar[11].day && (calendar[11].haveTime) }">
      <a href="#">{{calendar[11].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[12])"
        v-bind:class="{off: !calendar[12].haveTime,
                      active: curDay === calendar[12].day && (calendar[12].haveTime) }">
      <a href="#">{{calendar[12].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[13])"
        v-bind:class="{off: !calendar[13].haveTime,
                      active: curDay === calendar[13].day && (calendar[13].haveTime) }">
      <a href="#">{{calendar[13].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[14])"
        v-bind:class="{off: !calendar[14].haveTime,
                      active: curDay === calendar[14].day && (calendar[14].haveTime) }">
      <a href="#">{{calendar[14].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[15])"
        v-bind:class="{off: !calendar[15].haveTime,
                      active: curDay === calendar[15].day && (calendar[15].haveTime) }">
      <a href="#">{{calendar[15].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[16])"
        v-bind:class="{off: !calendar[16].haveTime,
                      active: curDay === calendar[16].day && (calendar[16].haveTime) }">
      <a href="#">{{calendar[16].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[17])"
        v-bind:class="{off: !calendar[17].haveTime,
                      active: curDay === calendar[17].day && (calendar[17].haveTime) }">
      <a href="#">{{calendar[17].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[18])"
        v-bind:class="{off: !calendar[18].haveTime,
                      active: curDay === calendar[18].day && (calendar[18].haveTime) }">
      <a href="#">{{calendar[18].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[19])"
        v-bind:class="{off: !calendar[19].haveTime,
                      active: curDay === calendar[19].day && (calendar[19].haveTime) }">
      <a href="#">{{calendar[19].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[20])"
        v-bind:class="{off: !calendar[20].haveTime,
                      active: curDay === calendar[20].day && (calendar[20].haveTime) }">
      <a href="#">{{calendar[20].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[21])"
        v-bind:class="{off: !calendar[21].haveTime,
                      active: curDay === calendar[21].day && (calendar[21].haveTime) }">
      <a href="#">{{calendar[21].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[22])"
        v-bind:class="{off: !calendar[22].haveTime,
                      active: curDay === calendar[22].day && (calendar[22].haveTime) }">
      <a href="#">{{calendar[22].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[23])"
        v-bind:class="{off: !calendar[23].haveTime,
                      active: curDay === calendar[23].day && (calendar[23].haveTime) }">
      <a href="#">{{calendar[23].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[24])"
        v-bind:class="{off: !calendar[24].haveTime,
                      active: curDay === calendar[24].day && (calendar[24].haveTime) }">
      <a href="#">{{calendar[24].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[25])"
        v-bind:class="{off: !calendar[25].haveTime,
                      active: curDay === calendar[25].day && (calendar[25].haveTime) }">
      <a href="#">{{calendar[25].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[26])"
        v-bind:class="{off: !calendar[26].haveTime,
                      active: curDay === calendar[26].day && (calendar[26].haveTime) }">
      <a href="#">{{calendar[26].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[27])"
        v-bind:class="{off: !calendar[27].haveTime,
                      active: curDay === calendar[27].day && (calendar[27].haveTime) }">
      <a href="#">{{calendar[27].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[28])"
        v-bind:class="{off: !calendar[28].haveTime,
                      active: curDay === calendar[28].day && (calendar[28].haveTime) }">
      <a href="#">{{calendar[28].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[29])"
        v-bind:class="{off: !calendar[29].haveTime,
                      active: curDay === calendar[29].day && (calendar[29].haveTime) }">
      <a href="#">{{calendar[29].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[30])"
        v-bind:class="{off: !calendar[30].haveTime,
                      active: curDay === calendar[30].day && (calendar[30].haveTime) }">
      <a href="#">{{calendar[30].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[31])"
        v-bind:class="{off: !calendar[31].haveTime,
                      active: curDay === calendar[31].day && (calendar[31].haveTime) }">
      <a href="#">{{calendar[31].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[32])"
        v-bind:class="{off: !calendar[32].haveTime,
                      active: curDay === calendar[32].day && (calendar[32].haveTime) }">
      <a href="#">{{calendar[32].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[33])"
        v-bind:class="{off: !calendar[33].haveTime,
                      active: curDay === calendar[33].day && (calendar[33].haveTime) }">
      <a href="#">{{calendar[33].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[34])"
        v-bind:class="{off: !calendar[34].haveTime,
                      active: curDay === calendar[34].day && (calendar[34].haveTime) }">
      <a href="#">{{calendar[34].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[35])"
        v-bind:class="{off: !calendar[35].haveTime,
                      active: curDay === calendar[35].day && (calendar[35].haveTime) }">
      <a href="#">{{calendar[35].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[36])"
        v-bind:class="{off: !calendar[36].haveTime,
                      active: curDay === calendar[36].day && (calendar[36].haveTime) }">
      <a href="#">{{calendar[36].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[37])"
        v-bind:class="{off: !calendar[37].haveTime,
                      active: curDay === calendar[37].day && (calendar[37].haveTime) }">
      <a href="#">{{calendar[37].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[38])"
        v-bind:class="{off: !calendar[38].haveTime,
                      active: curDay === calendar[38].day && (calendar[38].haveTime) }">
      <a href="#">{{calendar[38].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[39])"
        v-bind:class="{off: !calendar[39].haveTime,
                      active: curDay === calendar[39].day && (calendar[39].haveTime) }">
      <a href="#">{{calendar[39].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[40])"
        v-bind:class="{off: !calendar[40].haveTime,
                      active: curDay === calendar[40].day && (calendar[40].haveTime) }">
      <a href="#">{{calendar[40].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[41])"
        v-bind:class="{off: !calendar[41].haveTime,
                      active: curDay === calendar[41].day && (calendar[41].haveTime) }">
      <a href="#">{{calendar[41].day}}</a>
    </td>
  </tr>
  </tbody>
</template>

<script>
  export default {
    props: {
      calendar: Array,
      curDay: Number,
    },
  };
</script>

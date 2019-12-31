<template>
  <tbody>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[0],
    (!isEditing || calendar[0].day > 20))"
        v-bind:class="{off: (!isEditing || calendar[0].day > 20) && !calendar[0].haveTime,
                      active: curDay === calendar[0].day && (isEditing || calendar[0].haveTime) &&
                      (calendar[0].day < 21) }">
      <a href="#">{{calendar[0].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[1],
    (!isEditing || calendar[1].day > 20))"
        v-bind:class="{off: (!isEditing || calendar[1].day > 20) && !calendar[1].haveTime,
                      active: curDay === calendar[1].day && (isEditing || calendar[1].haveTime) &&
                      (calendar[0].day < 21) }">
      <a href="#">{{calendar[1].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[2],
    (!isEditing || calendar[2].day > 20))"
        v-bind:class="{off: (!isEditing || calendar[2].day > 20) && !calendar[2].haveTime,
                      active: curDay === calendar[2].day && (isEditing || calendar[2].haveTime) &&
                      (calendar[2].day < 21) }">
      <a href="#">{{calendar[2].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[3],
    (!isEditing || calendar[3].day > 20))"
        v-bind:class="{off: (!isEditing || calendar[3].day > 20) && !calendar[3].haveTime,
                      active: curDay === calendar[3].day && (isEditing || calendar[3].haveTime) &&
                      (calendar[3].day < 21) }">
      <a href="#">{{calendar[3].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[4],
    (!isEditing || calendar[4].day > 20))"
        v-bind:class="{off: (!isEditing || calendar[4].day > 20) && !calendar[4].haveTime,
                      active: curDay === calendar[4].day && (isEditing || calendar[4].haveTime) &&
                      (calendar[4].day < 21) }">
      <a href="#">{{calendar[4].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[5],
    (!isEditing || calendar[5].day > 20))"
        v-bind:class="{off: (!isEditing || calendar[5].day > 20) && !calendar[5].haveTime,
                      active: curDay === calendar[5].day && (isEditing || calendar[5].haveTime) &&
                      (calendar[5].day < 21) }">
      <a href="#">{{calendar[5].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[6],
    (!isEditing || calendar[6].day > 20))"
        v-bind:class="{off: (!isEditing || calendar[6].day > 20) && !calendar[6].haveTime,
                      active: curDay === calendar[6].day && (isEditing || calendar[6].haveTime) &&
                      (calendar[6].day < 21) }">
      <a href="#">{{calendar[6].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[7], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[7].haveTime,
                      active: curDay === calendar[7].day && (isEditing || calendar[7].haveTime) }">
      <a href="#">{{calendar[7].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[8], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[8].haveTime,
                      active: curDay === calendar[8].day && (isEditing || calendar[8].haveTime) }">
      <a href="#">{{calendar[8].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[9], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[9].haveTime,
                      active: curDay === calendar[9].day && (isEditing || calendar[9].haveTime) }">
      <a href="#">{{calendar[9].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[10], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[10].haveTime,
                      active: curDay === calendar[10].day &&
                      (isEditing || calendar[10].haveTime) }">
      <a href="#">{{calendar[10].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[11], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[11].haveTime,
                      active: curDay === calendar[11].day &&
                      (isEditing || calendar[11].haveTime) }">
      <a href="#">{{calendar[11].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[12], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[12].haveTime,
                      active: curDay === calendar[12].day &&
                      (isEditing || calendar[12].haveTime) }">
      <a href="#">{{calendar[12].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[13], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[13].haveTime,
                      active: curDay === calendar[13].day &&
                      (isEditing || calendar[13].haveTime) }">
      <a href="#">{{calendar[13].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[14], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[14].haveTime,
                      active: curDay === calendar[14].day &&
                      (isEditing || calendar[14].haveTime) }">
      <a href="#">{{calendar[14].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[15], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[15].haveTime,
                      active: curDay === calendar[15].day &&
                      (isEditing || calendar[15].haveTime) }">
      <a href="#">{{calendar[15].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[16], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[16].haveTime,
                      active: curDay === calendar[16].day &&
                      (isEditing || calendar[16].haveTime) }">
      <a href="#">{{calendar[16].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[17], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[17].haveTime,
                      active: curDay === calendar[17].day &&
                      (isEditing || calendar[17].haveTime) }">
      <a href="#">{{calendar[17].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[18], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[18].haveTime,
                      active: curDay === calendar[18].day &&
                      (isEditing || calendar[18].haveTime) }">
      <a href="#">{{calendar[18].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[19], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[19].haveTime,
                      active: curDay === calendar[19].day &&
                      (isEditing || calendar[19].haveTime) }">
      <a href="#">{{calendar[19].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[20], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[20].haveTime,
                      active: curDay === calendar[20].day &&
                      (isEditing || calendar[20].haveTime) }">
      <a href="#">{{calendar[20].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[21], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[21].haveTime,
                      active: curDay === calendar[21].day &&
                      (isEditing || calendar[21].haveTime) }">
      <a href="#">{{calendar[21].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[22], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[22].haveTime,
                      active: curDay === calendar[22].day &&
                      (isEditing || calendar[22].haveTime) }">
      <a href="#">{{calendar[22].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[23], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[23].haveTime,
                      active: curDay === calendar[23].day &&
                      (isEditing || calendar[23].haveTime) }">
      <a href="#">{{calendar[23].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[24], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[24].haveTime,
                      active: curDay === calendar[24].day &&
                      (isEditing || calendar[24].haveTime) }">
      <a href="#">{{calendar[24].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[25], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[25].haveTime,
                      active: curDay === calendar[25].day &&
                      (isEditing || calendar[25].haveTime) }">
      <a href="#">{{calendar[25].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[26], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[26].haveTime,
                      active: curDay === calendar[26].day &&
                      (isEditing || calendar[26].haveTime) }">
      <a href="#">{{calendar[26].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[27], !isEditing)"
        v-bind:class="{off: !isEditing && !calendar[27].haveTime,
                      active: curDay === calendar[27].day &&
                      (isEditing || calendar[27].haveTime) }">
      <a href="#">{{calendar[27].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[28],
    (!isEditing || calendar[28].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[28].day < 20) && !calendar[28].haveTime,
                      active: curDay === calendar[28].day &&
                      (isEditing || calendar[28].haveTime) && (calendar[28].day > 20) }">
      <a href="#">{{calendar[28].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[29],
    (!isEditing || calendar[29].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[29].day < 20) && !calendar[29].haveTime,
                      active: curDay === calendar[29].day &&
                      (isEditing || calendar[29].haveTime) && (calendar[29].day > 20) }">
      <a href="#">{{calendar[29].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[30],
    (!isEditing || calendar[30].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[30].day < 20) && !calendar[30].haveTime,
                      active: curDay === calendar[30].day &&
                      (isEditing || calendar[30].haveTime) && (calendar[30].day > 20) }">
      <a href="#">{{calendar[30].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[31],
    (!isEditing || calendar[31].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[31].day < 20) && !calendar[31].haveTime,
                      active: curDay === calendar[31].day &&
                      (isEditing || calendar[31].haveTime) && (calendar[31].day > 20) }">
      <a href="#">{{calendar[31].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[32],
    (!isEditing || calendar[32].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[32].day < 20) && !calendar[32].haveTime,
                      active: curDay === calendar[32].day &&
                      (isEditing || calendar[32].haveTime) && (calendar[32].day > 20) }">
      <a href="#">{{calendar[32].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[33],
    (!isEditing || calendar[33].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[33].day < 20) && !calendar[33].haveTime,
                      active: curDay === calendar[33].day &&
                      (isEditing || calendar[33].haveTime) && (calendar[33].day > 20) }">
      <a href="#">{{calendar[33].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[34],
    (!isEditing || calendar[34].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[34].day < 20) && !calendar[34].haveTime,
                      active: curDay === calendar[34].day &&
                      (isEditing || calendar[34].haveTime) && (calendar[34].day > 20) }">
      <a href="#">{{calendar[34].day}}</a>
    </td>
  </tr>
  <tr>
    <td @click.prevent="$emit('handlerTdClicked', calendar[35],
    (!isEditing || calendar[35].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[35].day < 20) && !calendar[35].haveTime,
                      active: curDay === calendar[35].day &&
                      (isEditing || calendar[35].haveTime) && (calendar[35].day > 20) }">
      <a href="#">{{calendar[35].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[36],
    (!isEditing || calendar[36].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[36].day < 20) && !calendar[36].haveTime,
                      active: curDay === calendar[36].day &&
                      (isEditing || calendar[36].haveTime) && (calendar[36].day > 20) }">
      <a href="#">{{calendar[36].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[37],
    (!isEditing || calendar[37].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[37].day < 20) && !calendar[37].haveTime,
                      active: curDay === calendar[37].day &&
                      (isEditing || calendar[37].haveTime) && (calendar[37].day > 20) }">
      <a href="#">{{calendar[37].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[38],
    (!isEditing || calendar[38].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[38].day < 20) && !calendar[38].haveTime,
                      active: curDay === calendar[38].day &&
                      (isEditing || calendar[38].haveTime) && (calendar[38].day > 20) }">
      <a href="#">{{calendar[38].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[39],
    (!isEditing || calendar[39].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[39].day < 20) && !calendar[39].haveTime,
                      active: curDay === calendar[39].day &&
                      (isEditing || calendar[39].haveTime) && (calendar[39].day > 20) }">
      <a href="#">{{calendar[39].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[40],
    (!isEditing || calendar[40].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[40].day < 20) && !calendar[40].haveTime,
                      active: curDay === calendar[40].day &&
                      (isEditing || calendar[40].haveTime) && (calendar[40].day > 20) }">
      <a href="#">{{calendar[40].day}}</a>
    </td>
    <td @click.prevent="$emit('handlerTdClicked', calendar[41],
    (!isEditing || calendar[41].day < 20))"
        v-bind:class="{off: (!isEditing || calendar[41].day < 20) && !calendar[41].haveTime,
                      active: curDay === calendar[41].day &&
                      (isEditing || calendar[41].haveTime) && (calendar[41].day > 20) }">
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
      isEditing: Boolean,
    },
  };
</script>

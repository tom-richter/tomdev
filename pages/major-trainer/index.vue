<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Major System Trainer</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'Major System Trainer',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Mit diesem Tool kannst du das Major System üben. Es werden alle Zahlen aus einem Intervall zufällig nacheinander genau einmal ausgegeben. In einem Durchlauf wird keine Zahl wiederholt.',
      },
    ],
  },
})
export default class MajorTrainer extends Vue {}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Kontakt</h1>
        <p>
          Du hast Fragen, Ideen oder Verbesserungsvorschläge? Schreib mir einfach eine E-Mail an:
          <strong>tomrichter.dev@gmail.com</strong>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'Kontakt - Tom Richter',
  },
})
export default class Contact extends Vue {}
</script>

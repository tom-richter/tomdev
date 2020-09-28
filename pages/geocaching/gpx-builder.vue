<template>
  <div>
    <h1>GPX-Builder</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'GPX-Builder - Geocaching',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Mit dem GPX-Builder kannst du eine Liste von Koordinaten in eine GPX-Datei umwandeln. Koordinaten im beim Geocaching üblichen Dezimalminuten-Format werden akzeptiert.',
      },
    ],
  },
})
export default class GpxBuilder extends Vue {}
</script>

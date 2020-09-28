<template>
  <div>
    <h1>Willkommen auf meiner Website!</h1>
    <p>
      Du findest hier einige nützliche Tools, wie etwa den GPX-Builder (für Geocacher) oder Major
      System Trainer. Für die Zukunft sind weitere Tools und ein Fahrrad-Reiseblog geplant. Auf
      meinem YouTube-Kanal
      <a href="https://www.youtube.com/channel/UC0A0FkyRVnGIDtNf1kTnF6g" target="_blank">
        BlakeX
      </a>
      findet ihr Videos von meiner Radtour durch Südostasien. Das Bild wurde in Saysomboun, Laos
      aufgenommen.
    </p>
    <img
      src="https://s3.eu-central-1.amazonaws.com/tomrichter.dev/laos.jpg"
      alt="Radtour in Laos"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'Tom Richter',
  },
})
export default class Home extends Vue {}
</script>

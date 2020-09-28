<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'Home - Tom Richter',
  },
})
export default class Home extends Vue {}
</script>

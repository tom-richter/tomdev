<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Major System Trainer</h1>
        <p>
          Mit diesem Tool kannst du das Major System üben. Es werden alle Zahlen in dem angegebenen
          Intervall zufällig nacheinander genau einmal ausgegeben. In einem Durchlauf wird keine
          Zahl wiederholt. Die Intervallgrenzen sind mit inbegriffen.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-alert
          v-if="error"
          border="top"
          colored-border
          type="info"
          color="red"
          elevation="2"
          class="mb-10"
        >
          {{ error }}
        </v-alert>
        <v-form class="bound-input" @submit.prevent="onSubmit">
          <v-text-field label="Untere Grenze" name="lowerBound" value="1" required></v-text-field>
          <span class="to">bis</span>
          <v-text-field label="Obere Grenze" name="upperBound" value="10" required></v-text-field>
          <v-btn color="primary" class="ml-3" type="submit">Start</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row v-if="roundRunning && !roundFinished">
      <v-col>
        <div class="number">{{ numbers[position] }}</div>
        <v-progress-linear :value="((position + 1) / numbers.length) * 100" height="25">
          <span>{{ position + 1 }}/{{ numbers.length }}</span>
        </v-progress-linear>
        <div class="next">
          <v-btn color="orange" @click="onNextNumber">Weiter</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="roundFinished">
      <v-col>
        <h2 class="success-message">Hurra! Du hast es geschafft! <span class="smiley">🥳</span></h2>
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
export default class MajorTrainer extends Vue {
  error = ''
  numbers: number[] = []
  roundRunning = false
  roundFinished = false
  position = 0

  createRandomNumbers(lowerBound: number, upperBound: number) {
    this.numbers = []
    for (let i = lowerBound; i <= upperBound; i++) {
      this.numbers.push(i)
    }
    for (let i = this.numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.numbers[i], this.numbers[j]] = [this.numbers[j], this.numbers[i]]
    }
  }

  isInteger(value: any) {
    const regexp = new RegExp('^-?[0-9]+$')
    return regexp.test(value)
  }

  onSubmit(submitEvent: any) {
    const lowerBound: string = submitEvent.target.elements.lowerBound.value
    const upperBound: string = submitEvent.target.elements.upperBound.value
    this.error = ''
    if ((!lowerBound && lowerBound !== '0') || (!upperBound && upperBound !== '0')) {
      this.error = 'Beide Eingaben sind notwendig.'
    } else if (!this.isInteger(lowerBound) || !this.isInteger(upperBound)) {
      this.error = 'Beide Eingaben sollten ganze Zahlen sein.'
    } else if (+lowerBound > +upperBound) {
      this.error =
        'Die untere Intervallgrenze sollte größer oder gleich der oberen Intervallgrenze sein.'
    }
    if (this.error) {
      return
    }
    this.createRandomNumbers(+lowerBound, +upperBound)
    this.roundRunning = true
    this.roundFinished = false
    this.position = 0
  }

  onNextNumber() {
    this.position++
    if (this.position >= this.numbers.length) {
      this.roundRunning = false
      this.roundFinished = true
    }
  }
}
</script>

<style scoped>
.v-text-field {
  width: 90px;
  display: inline-block;
}
.bound-input {
  text-align: center;
}
span.to {
  margin-left: 10px;
  margin-right: 13px;
}
.number {
  font-size: 100px;
  text-align: center;
  margin: 30px auto 60px auto;
  height: 100px;
  vertical-align: middle;
  line-height: 100px;
}
.next {
  margin: 20px auto 50px auto;
  text-align: center;
}
.success-message {
  text-align: center;
  margin: 50px 0;
  font-size: 25px;
}
.smiley {
  font-size: 50px;
}
</style>

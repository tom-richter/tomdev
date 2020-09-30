<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Major System Trainer</h1>
        Mit diesem Tool kannst du das Major System üben. Es werden alle Zahlen in dem angegebenen
        Intervall zufällig nacheinander genau einmal ausgegeben. In einem Durchlauf wird keine Zahl
        wiederholt. Die Intervallgrenzen sind mit inbegriffen.
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form class="bound-input">
          <v-text-field v-model.number="lowerBound" label="Untere Grenze" required></v-text-field>
          <span class="to">bis</span>
          <v-text-field v-model.number="upperBound" label="Obere Grenze" required></v-text-field>
          <v-btn color="primary" class="ml-3" @click="onSubmit">Start</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row v-if="roundRunning && !roundFinished">
      <v-col>
        <div class="number">{{ numbers[position] }}</div>
        <v-progress-linear :value="((position + 1) / numbers.length) * 100"></v-progress-linear>
        <div class="progress-counter">{{ position + 1 }}/{{ numbers.length }}</div>
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
  lowerBound = 0
  upperBound = 0
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

  onSubmit() {
    this.createRandomNumbers(this.lowerBound, this.upperBound)
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
  width: 120px;
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
.progress-counter {
  text-align: center;
  margin-top: 10px;
}
.next {
  margin: 20px auto 0 auto;
  text-align: center;
}
.success-message {
  text-align: center;
  margin-top: 50px;
  font-size: 25px;
}
</style>

import { mount } from '@vue/test-utils'
import MajorTrainer from '@/pages/major-trainer/index.vue'

describe('MajorTrainer', () => {
  test('isInteger', () => {
    const wrapper = mount(MajorTrainer)

    expect(wrapper.vm.isInteger('5')).toBe(true)
    expect(wrapper.vm.isInteger('0')).toBe(true)
    expect(wrapper.vm.isInteger('3467')).toBe(true)
    expect(wrapper.vm.isInteger('-24')).toBe(true)
    expect(wrapper.vm.isInteger('43.6')).toBe(false)
    expect(wrapper.vm.isInteger('abc')).toBe(false)
  })
  test('createRandomNumbers', () => {
    const wrapper = mount(MajorTrainer)
    wrapper.vm.createRandomNumbers(1, 10)

    expect(wrapper.vm.numbers).toContain(1)
    expect(wrapper.vm.numbers).toContain(10)
    expect(wrapper.vm.numbers.length).toBe(10)
    expect(wrapper.vm.numbers).not.toContain(0)
  })
})

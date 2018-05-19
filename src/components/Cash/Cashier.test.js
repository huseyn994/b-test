import { mount } from '@vue/test-utils'
import Counter from './Cashier.vue'

describe('Counter', () => {
  const wrapper = mount(Counter)
  const vm = wrapper.vm;
  const setEntryByClick = (entry) => {
    vm.entry = entry;
    const button = wrapper.find('button')
    button.trigger('click')
  }
  it('10 / Gives correct cash/paper.', () => {
    setEntryByClick(10)
    expect(wrapper.vm.result).toEqual([10])
  })

  it('190 / Gives correct cash/paper.', () => {
    setEntryByClick(190)
    expect(wrapper.vm.result).toEqual([100, 50, 20, 20])
  });

  it('30 / Gives correct cash/paper.', () => {
    setEntryByClick(30)
    expect(wrapper.vm.result).toEqual([20, 10])
  });
  
  


})

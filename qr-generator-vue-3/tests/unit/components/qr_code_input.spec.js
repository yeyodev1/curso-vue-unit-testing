import { shallowMount } from '@vue/test-utils'

import QRCodeInput from '@/components/QRCodeInput.vue'
import { createStore } from 'vuex'

describe('QRCodeInput.vue', () => {
  describe('mouting a component', () => {
    it('renders qr code input component', () => {
      const wrapper = shallowMount(QRCodeInput)

      const component = wrapper.find('.hello')

      expect(component.classes()).toContain('hello')
    })
  })
  describe('mounting a component with its dependencies', () => {
    const store = createStore({
      state () {
        return { count: 1 }
      }
    })
    const wrapper = shallowMount(QRCodeInput, {
      global: {
        plugins: [store]
      }
    })
    it('rendes generate qr code button with test', () => {
      const component = wrapper.find('#btn-generate')

      expect(component.text()).toBe('Generar QR')
    })
  })
  // describe('renders qr code input component with its dependencies', () => {
  //   const store = createStore({
  //     state () {
  //       return { count: 1 }
  //     }
  //   })

  //   const wrapper = shallowMount(QRCodeInput, {
  //     global: { plugin: [store] }
  //   })
  // })
})

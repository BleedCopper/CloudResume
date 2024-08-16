import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: undefined as number | undefined }
  },
  actions: {
    set(count: number) {
      this.count = count
    }
  }
})

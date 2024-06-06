import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const isCollapse = ref(true)

  return { 
    isCollapse

   }
},{
  persist: true // 开启数据持久化
})

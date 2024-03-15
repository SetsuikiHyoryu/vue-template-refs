import HelloWorld from '@/components/HelloWorld.vue'

import { defineStore } from 'pinia'
import { ref } from 'vue'

const useStore = defineStore('store', () => {
  type MessageInstance = InstanceType<typeof HelloWorld>

  const messageInstance = ref<MessageInstance>()

  const setMessageInstance = (element: MessageInstance) => {
    messageInstance.value = element
    return messageInstance
  }

  return { messageInstance, setMessageInstance }
})

export default useStore

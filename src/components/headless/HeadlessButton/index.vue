<template>
  <button
    :type="htmlType"
    :disabled="disabled || waiting"
    :class="classNames?.base || 'relative inline-block'"
    @click.stop="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Props } from './type'

export default defineComponent({
  name: 'HeadlessButton',
  props: {
    htmlType: {
      type: String as PropType<Props['htmlType']>,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clickIntervalMillisecond: {
      type: Number,
      default: 200,
    },
    classNames: {
      type: Object as PropType<Props['classNames']>,
      required: false,
    },
  },
  emits: ['clicked'],
  setup(props, context) {
    const waiting = ref<boolean>(false)
    const setWaiting = (value: boolean) => {
      waiting.value = value
    }

    const handleClick = () => {
      if (props.clickIntervalMillisecond > 0) {
        setWaiting(true)
        setTimeout(() => {
          setWaiting(false)
        }, 500) // 二度押し防止
      }
      context.emit('clicked')
    }

    return {
      waiting,
      handleClick,
    }
  },
})
</script>

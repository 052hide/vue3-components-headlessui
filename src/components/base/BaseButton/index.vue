<template>
  <HeadlessButton
    :html-type="htmlType"
    :disabled="disabled"
    :click-interval-millisecond="clickIntervalMillisecond"
    :class-names="classNames"
    @clicked="handleClicked"
  >
    <slot />
  </HeadlessButton>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import HeadlessButton from '~/components/headless/HeadlessButton/index.vue'
import { Props } from './type'
import {
  themeClassNames,
  sizeClassNames,
  widthClassNames,
  disabledClassNames,
} from './helper'

export default defineComponent({
  name: 'BaseButton',
  components: {
    HeadlessButton,
  },
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
    block: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String as PropType<Props['theme']>,
      default: 'primary',
    },
    size: {
      type: String as PropType<Props['size']>,
      default: 'base',
    },
  },
  emits: ['clicked'],
  setup(props, context) {
    const classNames = computed(() => ({
      base: [
        'relative flex-none border border-transparent shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        themeClassNames(props.theme, props.disabled),
        sizeClassNames(props.size),
        widthClassNames(props.block),
        disabledClassNames(props.disabled),
      ],
    }))

    const handleClicked = () => {
      context.emit('clicked')
    }

    return {
      classNames,
      handleClicked,
    }
  },
})
</script>

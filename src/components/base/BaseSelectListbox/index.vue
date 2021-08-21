<template>
  <HeadlessSelectListbox
    :value="value"
    :items="
      items.map((item) => ({
        ...item,
        classNames: {
          base: 'w-full block py-2 px-4 text-sm text-left transition-colors duration-150',
          selected: 'text-blue-800',
          active: 'bg-blue-100',
          disabled: 'bg-gray-100 opacity-50',
        },
      }))
    "
    :class-names="{
      base: block ? 'flex flex-row justify-center items-center w-full' : '',
    }"
    :button="{
      classNames: {
        base: 'w-full inline-flex justify-center py-2 px-4 rounded border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-900 transition-colors duration-150 hover:bg-gray-50 focus:outline-none focus:bg-gray-100',
      },
    }"
    :items-wrapper-transition="{
      classNames: {
        'enter-active-class': 'transition ease-out duration-100',
        'enter-from-class': 'transform opacity-0 scale-95',
        'enter-to-class': 'transform opacity-100 scale-100',
        'leave-active-class': 'transition ease-in duration-75',
        'leave-from-class': 'transform opacity-100 scale-100',
        'leave-to-class': 'transform opacity-0 scale-95',
      },
    }"
    :items-wrapper="{
      classNames: {
        base: 'absolute z-dropdownOption left-0 mt-2 min-w-[14rem] max-w-full rounded-md overflow-hidden shadow-lg bg-white focus:outline-none',
      },
    }"
    @input="handleInput"
  >
    <template v-for="(_, slot) of $slots" #[slot]="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </HeadlessSelectListbox>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import HeadlessSelectListbox from '~/components/headless/HeadlessSelectListbox/index.vue'
import { Props } from './type'

export default defineComponent({
  name: 'BaseSelectListbox',
  components: {
    HeadlessSelectListbox,
  },
  props: {
    value: {
      type: [String, Number, null] as PropType<Props['value']>,
      required: true,
      default: null,
    },
    items: {
      type: Array as PropType<Props['items']>,
      default: () => [],
    },
    block: {
      type: Boolean as PropType<Props['block']>,
      default: false,
    },
  },
  emits: ['input'],
  setup(_, context) {
    const handleInput = (value: Props['value']) => {
      context.emit('input', value)
    }

    return {
      handleInput,
    }
  },
})
</script>

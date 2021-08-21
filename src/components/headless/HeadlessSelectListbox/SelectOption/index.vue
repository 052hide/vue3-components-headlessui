<template>
  <ListboxOption
    v-slot="{ selected, active }"
    :value="value"
    :disabled="disabled"
  >
    <div
      :class="[
        classNames?.base || '',
        selected && value !== null ? classNames?.selected || '' : '',
        active ? classNames?.active || '' : '',
        disabled ? classNames?.disabled || '' : '',
      ]"
    >
      <slot />{{ label }}
    </div>
  </ListboxOption>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ListboxOption } from '@headlessui/vue'
import { Props } from './type'

export default defineComponent({
  name: 'HeadlessSelectListboxSelectOption',
  components: {
    ListboxOption,
  },
  props: {
    value: {
      type: [String, Number] as PropType<Props['value']>,
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: true,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    classNames: {
      type: Object as PropType<Props['classNames']>,
      required: false,
      default: undefined,
    },
  },
})
</script>

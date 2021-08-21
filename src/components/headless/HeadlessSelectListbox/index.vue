<template>
  <Listbox
    v-model="selectedValue"
    as="div"
    :class="classNames?.base || 'relative inline-block'"
  >
    <ListboxButton :class="button?.classNames?.base || 'text-left'">
      <slot :name="`option-${selectedKey}`" />{{ selectedLabel }}
    </ListboxButton>
    <transition
      :enter-active-class="
        itemsWrapperTransition?.classNames?.['enter-active-class']
      "
      :enter-from-class="
        itemsWrapperTransition?.classNames?.['enter-from-class']
      "
      :enter-to-class="itemsWrapperTransition?.classNames?.['enter-to-class']"
      :leave-active-class="
        itemsWrapperTransition?.classNames?.['leave-active-class']
      "
      :leave-from-class="
        itemsWrapperTransition?.classNames?.['leave-from-class']
      "
      :leave-to-class="itemsWrapperTransition?.classNames?.['leave-to-class']"
    >
      <ListboxOptions
        :class="
          itemsWrapper?.classNames?.base ||
          'absolute z-dropdown-option left-0  mt-2 min-w-[10rem] bg-white focus:outline-none'
        "
      >
        <SelectOption
          v-for="item in items"
          :key="item.key"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
          :class-names="item.classNames"
        >
          <slot :name="`option-${item.key}`" />
        </SelectOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/vue'
import { Props } from './type'
import SelectOption from './SelectOption/index.vue'

export default defineComponent({
  name: 'HeadlessSelectListbox',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    SelectOption,
  },
  props: {
    value: {
      type: [String, Number, null] as PropType<Props['value']>,
      required: true,
      default: null,
    },
    items: {
      type: Array as PropType<Props['items']>,
      required: true,
      default: () => [],
    },
    classNames: {
      type: Object as PropType<Props['classNames']>,
      required: false,
      default: undefined,
    },
    button: {
      type: Object as PropType<Props['button']>,
      required: false,
      default: undefined,
    },
    itemsWrapperTransition: {
      type: Object as PropType<Props['itemsWrapperTransition']>,
      required: false,
      default: undefined,
    },
    itemsWrapper: {
      type: Object as PropType<Props['itemsWrapper']>,
      required: false,
      default: undefined,
    },
  },
  emits: ['input'],
  setup(props, context) {
    const selectedValue = computed({
      get: () => props.value,
      set: (value: Props['value']) => {
        context.emit('input', value)
      },
    })

    const selectedKey = computed(() => {
      return props.value
        ? props.items.find((item) => item.value === props.value)?.key || ''
        : ''
    })

    const selectedLabel = computed(() => {
      return props.value
        ? props.items.find((item) => item.value === props.value)?.label || ''
        : ''
    })

    return {
      selectedValue,
      selectedKey,
      selectedLabel,
    }
  },
})
</script>

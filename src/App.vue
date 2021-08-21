<template>
  <div>
    <BaseButton theme="secondary" @clicked="handleClicked">Button</BaseButton>
    <BaseSelectListbox
      :value="selectedValue"
      :items="items"
      @input="handleInput"
    >
      <template #[`option-1`]><p class="border">1</p></template>
      <template #[`option-3`]><p class="border">3</p></template>
    </BaseSelectListbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseButton from '~/components/base/BaseButton/index.vue'
import BaseSelectListbox from '~/components/base/BaseSelectListbox/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    BaseButton,
    BaseSelectListbox,
  },
  setup() {
    const handleClicked = () => {
      console.log('clicked')
    }

    const items = [
      { key: '0', value: null, label: '' },
      { key: '1', value: 1, label: 'Option 1' },
      { key: '2', value: 'A', label: 'Option 2' },
      { key: '3', value: 'BBBb', label: 'Option 3' },
    ]
    const selectedValue = ref<number | string | null>(1)

    const handleInput = (value: number | string | null) => {
      selectedValue.value = value
    }

    return {
      handleClicked,
      selectedValue,
      items,
      handleInput,
    }
  },
})
</script>

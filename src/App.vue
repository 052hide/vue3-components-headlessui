<template>
  <div>
    <BaseButton theme="secondary" @clicked="handleClicked"> Button </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '~/components/base/BaseButton/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    BaseButton,
  },
  setup() {
    const handleClicked = () => {
      console.log('clicked')
    }

    return {
      handleClicked,
    }
  },
})
</script>

<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <p class="opacity-80" v-for="desc in data">
    {{ desc }}
  </p>
</template>

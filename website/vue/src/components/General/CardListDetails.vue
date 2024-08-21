<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <ul class="list-disc pl-3.5 opacity-80">
    <li v-for="desc in data">
      {{ desc }}
    </li>
  </ul>
</template>

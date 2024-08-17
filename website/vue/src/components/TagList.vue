<script setup lang="ts">
import Tag from './General/Tag.vue'

defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div class="container space-x-1 space-y-1">
    <Tag v-for="tag in tags">
      {{ tag }}
    </Tag>
  </div>
</template>

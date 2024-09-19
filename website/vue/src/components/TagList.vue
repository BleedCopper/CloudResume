<script setup lang="ts">
import Tag from './General/Tag.vue'

defineProps<{
  tags: string[] | undefined
}>()
</script>

<template>
  <div v:if="tags" class="inline-flex flex-wrap gap-1">
    <Tag v-for="tag in tags">
      {{ tag }}
    </Tag>
  </div>
</template>

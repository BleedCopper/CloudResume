<script setup lang="ts">
import type { Experience } from '@/models/resume'
import DateCard from './General/DateCard.vue'
import TagList from './TagList.vue'

defineProps<{
  data: Experience
}>()
</script>

<template>
  <DateCard :href="data.link">
    <template #title>{{ data.title + ' · ' + data.company }}</template>
    <template #preview>
      {{ data.duration }}
    </template>
    <template #body>
      <ul class="list-disc pl-3.5">
        <li v-for="desc in data.description">
          {{ desc }}
        </li>
      </ul>
      <TagList :tags="data.tags" />
    </template>
  </DateCard>
</template>

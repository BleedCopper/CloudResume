<script setup lang="ts">
import type { Experience } from '@/models/resume'
import DateCard from './General/DateCard.vue'
import TagList from './TagList.vue'
import { CardListDetails } from './General'

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
      <CardListDetails :data="data.description" />
      <TagList :tags="data.tags" />
    </template>
  </DateCard>
</template>

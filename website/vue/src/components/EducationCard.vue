<script setup lang="ts">
import type { Education } from '@/models/resume'
import DateCard from './General/DateCard.vue'
import TagList from './TagList.vue'
import { CardListDetails } from './General'

defineProps<{
  data: Education
}>()
</script>

<template>
  <DateCard :href="data.link">
    <template #title>{{ data.title + ' · ' + data.school }}</template>
    <template #preview>
      {{ data.duration }}
    </template>
    <template #body>
      <CardListDetails :data="data.description" />
    </template>
  </DateCard>
</template>

<script setup lang="ts">
import type { Project } from '@/models/resume'
import DateCard from './General/DateCard.vue'
import TagList from './TagList.vue'
import PhotoCard from './General/PhotoCard.vue'
import FigmaLink from './FigmaLink.vue'
import GithubLink from './GithubLink.vue'
import { ref } from 'vue'
import { CardTextDetails } from './General'

const props = defineProps<{
  data: Project
}>()

const baseUrl = window.location.origin
const imageUrl = new URL(baseUrl + '/' + props.data.photo, import.meta.url).href
// const imgPath = require('@/assets/' + props.data.photo)
</script>
<template>
  <PhotoCard :href="data.link">
    <template #title>{{ data.title }}</template>
    <template #preview>
      <div class="flex place-content-center">
        <div class="max-w-32 mb-3">
          <img :src="imageUrl" class="rounded-md border-2 border-accent-darker" />
        </div>
      </div>
    </template>
    <template #body>
      <CardTextDetails :data="data.description" />
      <TagList :tags="data.tags" />
      <div class="space-x-2.5">
        <FigmaLink v-if="data.figma" :href="data.figma" />
        <GithubLink v-if="data.github" :href="data.github" />
      </div>
    </template>
  </PhotoCard>
</template>

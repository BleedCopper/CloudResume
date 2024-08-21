<script setup lang="ts">
import type { BlogPost } from '@/models/resume'
import { CardTextDetails, PhotoCard } from './General'
import TagList from './TagList.vue'
const props = defineProps<{
  data: BlogPost
}>()

const baseUrl = window.location.origin
const imageUrl = new URL(baseUrl + '/' + props.data.photo, import.meta.url).href
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
    </template>
  </PhotoCard>
</template>

<script setup lang="ts">
import { BlogPostCard, BaseSection } from '@/components/index.js'
import type { BlogPost } from '@/models/resume'

defineProps<{
  data: BlogPost[]
}>()
</script>

<template>
  <BaseSection title="Blog">
    <BlogPostCard v-for="post in data" :data="post" />
  </BaseSection>
</template>

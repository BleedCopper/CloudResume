<script setup lang="ts">
import { BaseSection, ProjectCard } from '@/components/index.js'
import type { Project } from '../models/resume.ts'

defineProps<{
  data: Project[]
}>()
</script>

<template>
  <BaseSection title="Projects">
    <ProjectCard v-for="project in data" :data="project" />
  </BaseSection>
</template>

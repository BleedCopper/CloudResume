<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import type { Project } from '../models/resume.ts'
import SectionHeader from '@/components/General/SectionHeader.vue'

defineProps<{
  data: Project[]
}>()
</script>

<template>
  <div class="container flex-row space-y-1">
    <SectionHeader>Projects</SectionHeader>
    <div class="space-y-2">
      <ProjectCard v-for="project in data" :data="project" />
    </div>
  </div>
</template>

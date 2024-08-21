<script setup lang="ts">
import { EducationCard, BaseSection } from '@/components/index.js'
import type { Education, Project } from '../models/resume.ts'

defineProps<{
  data: Education[]
}>()
</script>

<template>
  <BaseSection title="Education">
    <EducationCard v-for="education in data" :data="education" />
  </BaseSection>
</template>

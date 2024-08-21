<script setup lang="ts">
import { ExperienceCard, BaseSection } from '@/components/index.js'
import type { Experience } from '../models/resume.ts'

defineProps<{
  data: Experience[]
}>()
</script>

<template>
  <BaseSection title="Experience">
    <ExperienceCard v-for="experience in data" :data="experience" />
  </BaseSection>
</template>

<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue'
import type { Experience } from '../models/resume.ts'
import SectionHeader from '@/components/General/SectionHeader.vue'

defineProps<{
  data: Experience[]
}>()
</script>

<template>
  <div class="container flex-row space-y-1">
    <SectionHeader>Experience</SectionHeader>
    <div class="space-y-2">
      <ExperienceCard v-for="experience in data" :data="experience" />
    </div>
  </div>
</template>

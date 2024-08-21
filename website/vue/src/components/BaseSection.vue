<script setup lang="ts">
import { SectionHeader } from './General'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="container flex-row space-y-1">
    <SectionHeader>{{ title }}</SectionHeader>
    <div class="space-y-2">
      <slot></slot>
    </div>
  </div>
</template>

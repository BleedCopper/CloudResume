<script setup lang="ts">
import Link from './General/Link.vue'

defineProps<{
  href?: string
}>()
</script>

<template>
  <Link :href="href ?? ''" icon="fa-figma">Figma</Link>
</template>

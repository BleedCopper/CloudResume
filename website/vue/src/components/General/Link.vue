<script setup lang="ts">
defineProps<{
  href: string
  icon: string
}>()
</script>

<template>
  <div class="inline-block space-x-1 group/link">
    <div class="inline-block group-hover/link:text-accent">
      <i :class="'fa-brands ' + icon"></i>
    </div>
    <a :href="href" target="_blank" class="underline group-hover/link:text-accent"><slot></slot></a>
  </div>
</template>

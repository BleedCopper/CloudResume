<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a
    class="inline-block text-accent border-accent border rounded-md px-1.5 py-1 hover:bg-accent-darker"
    :href="href"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>

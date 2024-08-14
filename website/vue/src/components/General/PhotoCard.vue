<script setup lang="ts">
import { ref } from 'vue'
import Card from './Card.vue'
import CardItem from './CardItem.vue'
import TagList from '../TagList.vue'
defineProps<{
  href?: string
}>()
</script>

<template>
  <CardItem :href="href">
    <template #title> <slot name="title" /></template>
    <template #preview>
      <div class="flex place-content-center">
        <div class="max-w-32">
          <slot name="preview" />
        </div>
      </div>
    </template>
    <template #body>
      <slot name="body" />
    </template>
  </CardItem>
</template>

<style lang=""></style>

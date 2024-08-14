<script setup lang="ts">
import type { Resume } from '@/models/resume'

defineProps<{
  data: Resume
}>()
</script>

<template>
  <div class="space-x-4">
    <a v-show="data.social.mail" :href="'mailto:' + data.social.mail" class="hover:text-accent"
      ><i class="fa-regular fa-envelope fa-xl"></i
    ></a>
    <a
      v-show="data.social.github"
      :href="data.social.github"
      class="hover:text-accent"
      target="_blank"
      ><i class="fa-brands fa-github fa-xl"></i
    ></a>
    <a
      v-show="data.social.linkedin"
      :href="data.social.linkedin"
      class="hover:text-accent"
      target="_blank"
      ><i class="fa-brands fa-linkedin-in fa-xl"></i
    ></a>
  </div>
</template>

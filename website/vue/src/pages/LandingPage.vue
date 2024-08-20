<script setup lang="ts">
import type { Resume } from '@/models/resume'
import Button from '../components/General/Button.vue'
import Socials from '@/components/Socials.vue'
import { onMounted, ref } from 'vue'
import { fetchCounter } from '@/api/counter'
import { useCounterStore } from '@/stores/counter'
import mySettings from '../../public/settings.json'
import type { Settings } from '@/models/settings'

defineProps<{
  data: Resume
}>()

const settings: Settings = mySettings
const counter = useCounterStore()

const fetchData = async () => {
  fetchCounter().then((data) => {
    counter.set(data.count)
  })
}

fetchData()
</script>

<template>
  <div class="pt-24 md:flex md:pb-12 md:sticky md:top-0 md:left-12 lg:left-24 md:h-screen">
    <div class="space-y-7 md:flex md:flex-col md:content-between">
      <div class="space-y-10 md:flex-grow">
        <div class="space-y-3">
          <div class="space-y-1">
            <h1>{{ data.name }}</h1>
            <h2>{{ data.jobTitle }}</h2>
          </div>
          <h3 class="font-light opacity-80">I design solutions and develop experiences</h3>
        </div>
        <Button class="hidden md:inline-block" :href="'mailto:' + data.social.mail"
          >Contact Me</Button
        >
      </div>
      <div class="space-y-0.5">
        <Socials :data="data" />
        <div
          v-if="!settings.disableViewCount"
          class="flex w-full fixed bottom-0 left-0 py-3 justify-center bg-primary z-50 md:bg-opacity-0 md:justify-normal md:relative"
        >
          <span class="text-text-lighter">
            This site has been viewed
            <span class="font-semibold" data-testid="viewCount" v-if="counter.count">{{
              counter.count
            }}</span>
            times
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

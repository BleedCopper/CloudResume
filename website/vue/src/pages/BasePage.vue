<script setup lang="ts">
import LandingPage from './LandingPage.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import type { Resume } from '../models/resume.ts'
import myFile from '../assets/resume.json'

const myResume: Resume = myFile
</script>

<template>
  <div class="grid px-5 gap-12 md:px-8 lg:px-12 md:grid-cols-2 md:gap-5">
    <LandingPage :data="myResume" />
    <div class="container space-y-3 pt-3 pb-12 md:pt-12">
      <div class="container">
        <Experience :data="myResume.experience" />
      </div>
      <div class="container">
        <Projects :data="myResume.projects" />
      </div>
    </div>
  </div>
</template>

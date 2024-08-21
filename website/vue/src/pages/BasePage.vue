<script setup lang="ts">
import type { Resume } from '../models/resume.ts'
import myFile from '../../public/resume.json'
import { BlogPosts, Education, Experience, LandingPage, Projects } from './index.js'

const myResume: Resume = myFile
</script>

<template>
  <div class="grid px-5 gap-12 md:px-8 lg:px-12 md:grid-cols-2 md:gap-5">
    <LandingPage :data="myResume" />
    <div class="container space-y-5 pt-3 pb-12 md:pt-12">
      <div v:if="myResume.experience" class="container">
        <Experience :data="myResume.experience" />
      </div>
      <div v:if="myResume.education" class="container">
        <Education :data="myResume.education" />
      </div>
      <div v:if="myResume.projects" class="container">
        <Projects :data="myResume.projects" />
      </div>
      <div v:if="myResume.blogPosts" class="container">
        <BlogPosts :data="myResume.blogPosts" />
      </div>
    </div>
  </div>
</template>

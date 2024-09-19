import { Component } from '@angular/core';
import myFile from '../../../public/resume.json';
import { Resume } from '../models/resume';
import { BlogPosts } from './blog-posts.component';
import { Education } from './education.component';
import { Experience } from './experience.component';
import { LandingPage } from './landing-page.component';
import { Projects } from './projects.component';

@Component({
  standalone: true,
  selector: 'base-page',
  imports: [LandingPage, Experience, Education, Projects, BlogPosts],
  template: `
    <div class="grid px-5 gap-12 md:px-8 lg:px-12 md:grid-cols-2 md:gap-5">
      <landing-page [data]="myResume" />
      <div class="container space-y-5 pt-3 pb-12 md:pt-12">
        @if(myResume.experience){
        <div class="container">
          <experience [data]="myResume.experience" />
        </div>
        } @if(myResume.education ){
        <div class="container">
          <education [data]="myResume.education" />
        </div>
        } @if(myResume.projects ){
        <div class="container">
          <projects [data]="myResume.projects" />
        </div>
        } @if(myResume.blogPosts ){
        <div class="container">
          <blog-posts [data]="myResume.blogPosts" />
        </div>
        }
      </div>
    </div>
  `,
})
export class BasePage {
  myResume: Resume = myFile;
}

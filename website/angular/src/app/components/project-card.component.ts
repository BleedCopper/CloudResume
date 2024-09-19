import { Component, Input } from '@angular/core';
import { Project } from '../models/resume';
import { FigmaLink } from './figma-link.component';
import { CardTextDetails } from './general/card-text-details.component';
import { PhotoCard } from './general/photo-card.component';
import { GithubLink } from './github-link.component';
import { TagList } from './tag-list.component';

@Component({
  standalone: true,
  selector: 'project-card',
  imports: [PhotoCard, CardTextDetails, TagList, FigmaLink, GithubLink],
  template: `
    <photo-card [href]="data.link" [title]="data.title">
      <div ngProjectAs="preview" class="flex place-content-center">
        <div class="max-w-32 mb-3">
          <img
            [src]="imageUrl"
            class="rounded-md border-2 border-accent-darker"
          />
        </div>
      </div>
      <card-text-details [data]="data.description" />
      <div class="py-1">
        <tag-list [tags]="data.tags" />
      </div>
      <div class="space-x-2.5">
        @if(data.figma){
        <figma-link [href]="data.figma" />
        } @if(data.github){
        <github-link [href]="data.github" />
        }
      </div>
    </photo-card>
  `,
})
export class ProjectCard {
  @Input({ required: true }) data!: Project;
  baseUrl = '';
  imageUrl = '';

  ngOnInit() {
    this.baseUrl = window.location.origin;
    this.imageUrl = new URL(
      this.baseUrl + '/' + this.data.photo,
      import.meta.url
    ).href;
    console.log(this.baseUrl);
  }
}

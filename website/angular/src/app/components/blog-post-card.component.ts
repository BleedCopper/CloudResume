import { Component, Input } from '@angular/core';
import { BlogPost } from '../models/resume';
import { CardTextDetails } from './general/card-text-details.component';
import { PhotoCard } from './general/photo-card.component';
import { TagList } from './tag-list.component';

@Component({
  standalone: true,
  selector: 'blog-post-card',
  imports: [PhotoCard, CardTextDetails, TagList],
  template: `
    <photo-card [href]="data.link" [title]="data.title"
      ><div ngProjectAs="preview" class="flex place-content-center">
        <div class="max-w-32 mb-3">
          <img
            [src]="imageUrl"
            class="rounded-md border-2 border-accent-darker"
          />
        </div>
      </div>
      <card-text-details [data]="data.description" />
      <div class="pt-1">
        <tag-list [tags]="data.tags" />
      </div>
    </photo-card>
  `,
})
export class BlogPostCard {
  @Input({ required: true }) data!: BlogPost;
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

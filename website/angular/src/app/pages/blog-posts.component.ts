import { Component, Input } from '@angular/core';
import { BaseSection } from '../components/base-section.component';
import { BlogPostCard } from '../components/blog-post-card.component';
import { BlogPost } from '../models/resume';

@Component({
  standalone: true,
  selector: 'blog-posts',
  imports: [BaseSection, BlogPostCard],
  template: `
    <base-section title="Blog">
      @for(post of data; track $index){
      <div [class]="$index > 0 ? 'pt-1' : ''">
        <blog-post-card [data]="post" />
      </div>
      }
    </base-section>
  `,
})
export class BlogPosts {
  @Input({ required: true }) data!: BlogPost[];
}

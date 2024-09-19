import { Component, Input } from '@angular/core';
import { Tag } from './general/tag.component';

@Component({
  standalone: true,
  selector: 'tag-list',
  imports: [Tag],
  template: `
    @if(tags){
    <div class="inline-flex flex-wrap gap-1">
      @for(tag of tags; track tag){
      <tag>{{ tag }}</tag>
      }
    </div>
    }
  `,
})
export class TagList {
  @Input({ required: true }) tags: string[] | undefined = undefined;
}

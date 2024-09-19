import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'tag',
  imports: [],
  template: `
    <div class="bg-accent-darker rounded-full px-2.5 py-1 inline-block text-xs">
      <span class="text-accent text-xs font-medium"><ng-content /></span>
    </div>
  `,
})
export class Tag {}

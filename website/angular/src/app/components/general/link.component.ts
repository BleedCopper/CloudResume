import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'link-component',
  template: `
    <div class="inline-block space-x-1 group/link">
      <div class="inline-block text-text group-hover/link:text-accent">
        <i [class]="'fa-brands ' + icon"></i>
      </div>
      <a
        [href]="href"
        target="_blank"
        class="underline group-hover/link:text-accent"
      >
        <ng-content />
      </a>
    </div>
  `,
})
export class LinkComponent {
  @Input({ required: true }) icon = '';
  @Input({ required: true }) href = '';
}

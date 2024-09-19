import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'button',
  imports: [],
  template: `
    <a
      [class]="
        class +
        ' inline-block text-accent border-accent border rounded-md px-1.5 py-1 hover:bg-accent-darker'
      "
      [href]="href"
      target="_blank"
    >
      <ng-content />
    </a>
  `,
})
export class Button {
  @Input() class = '';
  @Input({ required: true }) href = '';
}

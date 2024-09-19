import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'card',
  template: `
    <div
      [class]="class + ' px-2.5 pt-2 pb-3 rounded-md hover:bg-primary-lighter'"
    >
      <ng-content />
    </div>
  `,
})
export class Card {
  @Input({ required: true }) class = '';
}

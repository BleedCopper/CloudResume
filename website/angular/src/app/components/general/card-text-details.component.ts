import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'card-text-details',
  imports: [],
  template: `
    @for (desc of data; track $index) {
    <p class="opacity-80">{{ desc }}</p>
    }
  `,
})
export class CardTextDetails {
  @Input({ required: true }) data: string[] = [];
}

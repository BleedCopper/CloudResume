import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'card-list-details',
  imports: [],
  template: `
    <ul class="list-disc pl-3.5 opacity-80">
      @for(desc of data; track desc){
      <li>{{ desc }}</li>
      }
    </ul>
  `,
})
export class CardListDetails {
  @Input({ required: true }) data: string[] = [];
}

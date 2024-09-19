import { Component, Input } from '@angular/core';
import { CardItem } from './card-item.component';

@Component({
  standalone: true,
  selector: 'date-card',
  imports: [CardItem],
  template: `
    <card-item [href]="href" [title]="title">
      <p
        ngProjectAs="preview"
        class="text-xs text-text opacity-50 uppercase font-semibold"
      >
        {{ preview }}
      </p>
      <ng-content />
    </card-item>
  `,
})
export class DateCard {
  @Input({ required: true }) title = '';
  @Input({ required: true }) href = '';
  @Input({ required: true }) preview = '';
}

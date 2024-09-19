import { Component, Input } from '@angular/core';
import { CardItem } from './card-item.component';

@Component({
  standalone: true,
  selector: 'photo-card',
  imports: [CardItem],
  template: `
    <card-item [href]="href" [title]="title">
      <ng-content ngProjectAs="preview" select="preview" />
      <ng-content />
    </card-item>
  `,
})
export class PhotoCard {
  @Input({ required: true }) title = '';
  @Input({ required: true }) href = '';
}

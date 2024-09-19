import { Component, Input } from '@angular/core';
import { Education } from '../models/resume';
import { CardListDetails } from './general/card-list-details.component';
import { DateCard } from './general/date-card.component';

@Component({
  standalone: true,
  selector: 'education-card',
  imports: [DateCard, CardListDetails],
  template: `
    <date-card
      [href]="data.link"
      [title]="data.title + ' · ' + data.school"
      [preview]="data.duration"
    >
      <card-list-details [data]="data.description" />
    </date-card>
  `,
})
export class EducationCard {
  @Input({ required: true }) data!: Education;
}

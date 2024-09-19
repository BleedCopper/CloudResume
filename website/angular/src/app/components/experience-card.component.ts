import { Component, Input } from '@angular/core';
import { Experience } from '../models/resume';
import { CardListDetails } from './general/card-list-details.component';
import { DateCard } from './general/date-card.component';
import { TagList } from './tag-list.component';

@Component({
  standalone: true,
  selector: 'experience-card',
  imports: [DateCard, CardListDetails, TagList],
  template: `
    <date-card
      [href]="data.link"
      [title]="data.title + ' · ' + data.company"
      [preview]="data.duration"
    >
      <card-list-details [data]="data.description" />
      <div class="pt-1">
        <tag-list [tags]="data.tags" />
      </div>
    </date-card>
  `,
})
export class ExperienceCard {
  @Input({ required: true }) data!: Experience;
}

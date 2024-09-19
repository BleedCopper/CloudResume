import { Component, Input } from '@angular/core';
import { BaseSection } from '../components/base-section.component';
import { EducationCard } from '../components/education-card.component';
import { Education as EducationItem } from '../models/resume';

@Component({
  standalone: true,
  selector: 'education',
  imports: [BaseSection, EducationCard],
  template: `
    <base-section title="Education">
      @for(education of data; track $index){
      <div [class]="$index > 0 ? 'pt-1' : ''">
        <education-card [data]="education" />
      </div>
      }
    </base-section>
  `,
})
export class Education {
  @Input({ required: true }) data!: EducationItem[];
}

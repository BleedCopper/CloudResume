import { Component, Input } from '@angular/core';
import { BaseSection } from '../components/base-section.component';
import { ExperienceCard } from '../components/experience-card.component';
import { Experience as ExperienceItem } from '../models/resume';

@Component({
  standalone: true,
  selector: 'experience',
  imports: [BaseSection, ExperienceCard],
  template: `
    <base-section title="Experience">
      @for(experience of data; track $index){
      <div [class]="$index > 0 ? 'pt-1' : ''">
        <experience-card [data]="experience" />
      </div>
      }
    </base-section>
  `,
})
export class Experience {
  @Input({ required: true }) data!: ExperienceItem[];
}

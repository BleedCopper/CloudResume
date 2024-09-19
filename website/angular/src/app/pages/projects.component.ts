import { Component, Input } from '@angular/core';
import { ProjectCard } from '../components/project-card.component';
import { Project } from '../models/resume';
import { BaseSection } from './../components/base-section.component';

@Component({
  standalone: true,
  selector: 'projects',
  imports: [BaseSection, ProjectCard],
  template: `
    <base-section title="Projects">
      @for(project of data; track $index){
      <div [class]="$index > 0 ? 'pt-1' : ''">
        <project-card [data]="project" />
      </div>
      }
    </base-section>
  `,
})
export class Projects {
  @Input({ required: true }) data!: Project[];
}

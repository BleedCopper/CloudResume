import { Component, Input } from '@angular/core';
import { SectionHeader } from './general/section-header.component';

@Component({
  standalone: true,
  selector: 'base-section',
  imports: [SectionHeader],
  template: `
    <div class="container flex-row space-y-1">
      <section-header>{{ title }}</section-header>
      <div class="space-y-2"><ng-content /></div>
    </div>
  `,
})
export class BaseSection {
  @Input({ required: true }) title = '';
}

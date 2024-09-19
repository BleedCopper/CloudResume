import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'section-header',
  imports: [],
  template: `
    <div
      class="z-50 -mx-5 px-5 sticky top-0 left-0 backdrop-blur py-3 md:relative md:py-0"
    >
      <h4 class="uppercase"><ng-content /></h4>
    </div>
  `,
})
export class SectionHeader {}

import { Component, Input } from '@angular/core';
import { LinkComponent } from './general/link.component';

@Component({
  standalone: true,
  selector: 'figma-link',
  imports: [LinkComponent],
  template: `
    <link-component [href]="href ?? ''" icon="fa-figma">Figma</link-component>
  `,
})
export class FigmaLink {
  @Input() href = '';
}

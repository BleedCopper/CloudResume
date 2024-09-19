import { Component, Input } from '@angular/core';
import { LinkComponent } from './general/link.component';

@Component({
  standalone: true,
  selector: 'github-link',
  imports: [LinkComponent],
  template: `
    <link-component [href]="href ?? ''" icon="fa-github"
      >Github
    </link-component>
  `,
})
export class GithubLink {
  @Input() href = '';
}

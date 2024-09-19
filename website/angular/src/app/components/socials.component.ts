import { Component, Input } from '@angular/core';
import { Resume } from '../models/resume';

@Component({
  standalone: true,
  selector: 'socials',
  imports: [],
  template: `
    <div class="space-x-4">
      @if(data && data.social.mail){
      <a [href]="'mailto:' + data.social.mail" class="hover:text-accent">
        <i class="fa-regular fa-envelope fa-xl"></i>
      </a>
      } @if(data && data.social.github){
      <a [href]="data.social.github" class="hover:text-accent" target="_blank">
        <i class="fa-brands fa-github fa-xl"></i>
      </a>
      } @if(data && data.social.linkedin){
      <a
        [href]="data.social.linkedin"
        class="hover:text-accent"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin-in fa-xl"></i>
      </a>
      }
    </div>
  `,
})
export class Socials {
  @Input({ required: true }) data: Resume | undefined = undefined;
}

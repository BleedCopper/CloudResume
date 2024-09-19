import { Component, Input } from '@angular/core';
import { Card } from './card.component';

@Component({
  standalone: true,
  selector: 'card-item',
  imports: [Card],
  template: `
    <card class="group/card">
      <a [href]="href" target="__blank">
        <div class="grid sm:grid-cols-5 sm:gap-4">
          <div class="mt-1"><ng-content select="preview" /></div>
          <div class="sm:col-span-4">
            <h3 class="group-hover/card:text-accent font-medium">
              {{ title }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/card:-translate-y-1 group-hover/card:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </h3>
            <div class="pt-1 pb-0.5 space-y-3">
              <ng-content />
            </div>
          </div>
        </div>
      </a>
    </card>
  `,
})
export class CardItem {
  @Input({ required: true }) title = '';
  @Input({ required: true }) href = '';
}

import { Component, Input } from '@angular/core';
import mySettings from '../../../public/settings.json';
import { fetchCounter } from '../api/counter';
import { Button } from '../components/general/button.component';
import { Socials } from '../components/socials.component';
import { Resume } from '../models/resume';
import { Settings } from '../models/settings';

@Component({
  standalone: true,
  selector: 'landing-page',
  imports: [Socials, Button],
  template: `
    <div
      class="pt-24 md:flex md:pb-12 md:sticky md:top-0 md:left-12 lg:left-24 md:h-screen"
    >
      <div class="space-y-7 md:flex md:flex-col md:content-between">
        <div class="space-y-10 md:flex-grow">
          <div class="space-y-3">
            <div class="space-y-1">
              <h1>{{ data.name }}</h1>
              <h2>{{ data.jobTitle }}</h2>
            </div>
            <h3 class="font-light opacity-80">
              I design solutions and develop experiences
            </h3>
          </div>
          <button
            class="hidden md:inline-block"
            [href]="'mailto:' + data.social.mail"
          >
            Contact Me
          </button>
        </div>
        <div class="space-y-0.5">
          <socials [data]="data" />
          @if(!settings.disableViewCount){
          <div
            class="flex w-full fixed bottom-0 left-0 py-3 justify-center bg-primary z-50 md:bg-opacity-0 md:justify-normal md:relative"
          >
            <span class="text-text-lighter">
              This site has been viewed{{ ' ' }}
              @if(counter){
              <span class="font-semibold" data-testid="viewCount">
                {{ counter }}
              </span>
              }{{ ' ' }}
              times
            </span>
          </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class LandingPage {
  @Input({ required: true }) data!: Resume;
  settings: Settings = mySettings;
  counter: number | undefined = undefined;

  ngOnInit() {
    const fetchData = async () => {
      fetchCounter().then((resp) => {
        this.counter = resp.count;
      });
    };
    fetchData();
  }
}

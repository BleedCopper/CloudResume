import { bootstrapApplication } from '@angular/platform-browser';
import '@fortawesome/fontawesome-free/js/all.js';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "./polyfills";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

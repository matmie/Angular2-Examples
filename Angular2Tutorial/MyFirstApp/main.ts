import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './App.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
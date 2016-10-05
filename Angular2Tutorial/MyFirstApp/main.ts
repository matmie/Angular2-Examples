import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyFirstAppModule } from './MyFirstApp.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MyFirstAppModule);
// import for browser use
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//  On a mobile device, we might load a module with Apache Cordova or NativeScript, using a bootstrap function that's specific to that platform.

import { AppModule } from './app.module';
// init the application's platform then use it to bootstrap the AppModule
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

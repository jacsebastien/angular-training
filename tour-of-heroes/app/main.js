"use strict";
// import for browser use
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//  On a mobile device, we might load a module with Apache Cordova or NativeScript, using a bootstrap function that's specific to that platform.
var app_module_1 = require('./app.module');
// init the application's platform then use it to bootstrap the AppModule
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
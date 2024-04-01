import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
   .bootstrapModule(AppModule, {ngZone, 'noop'})
   .catch(arr => console.error(err));

   console.log('user');

   const originalConsoleLog = console.log;
   console.log = (...args) => {
      originalConsoleLog(...args);
};

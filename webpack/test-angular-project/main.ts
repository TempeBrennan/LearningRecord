import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyModule } from './app.module';
import './styles.css';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

platformBrowserDynamic().bootstrapModule(MyModule);
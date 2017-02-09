import { Component } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

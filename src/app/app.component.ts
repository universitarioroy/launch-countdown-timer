import { Component } from '@angular/core';
import { TimeComponent } from './time/time.component';
import { ValueTimeComponent } from './value-time/value-time.component';
import { RedesComponent } from './redes/redes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'launch-countdown-timer';
}

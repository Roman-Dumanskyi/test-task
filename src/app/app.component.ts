import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CurrentLocalTimeComponent} from './components/current-local-time/current-local-time.component';
import {SearchFormComponent} from './components/search-form/search-form.component';

@Component({
  selector: 'app-root',
  imports: [CurrentLocalTimeComponent, SearchFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-task';
}

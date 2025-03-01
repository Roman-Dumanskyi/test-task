import {Component, inject, OnInit} from '@angular/core';
import {TimeService} from '../../services/time.service';
import {AsyncPipe, DatePipe, JsonPipe} from '@angular/common';
import {BehaviorSubject, catchError, of} from 'rxjs';

@Component({
  selector: 'app-current-local-time',
  imports: [
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './current-local-time.component.html',
  styleUrl: './current-local-time.component.scss'
})
export class CurrentLocalTimeComponent implements OnInit {

  readonly timeService = inject(TimeService);

  dateTimeData$ = new BehaviorSubject<string | null>(null);
  dateTimeLoading$ = new BehaviorSubject<boolean>(false);
  dateTimeError$ = new BehaviorSubject<string | null>(null);

  ngOnInit() {
    this.updateDate();
  }

  updateDate() {
    this.dateTimeLoading$.next(true);
    this.dateTimeError$.next(null);

    this.timeService.getLocalTime().pipe(
      catchError(err => {
        this.dateTimeError$.next('An error occurred, please try again.');
        return of(null);
      })
    ).subscribe(res => {
      this.dateTimeData$.next(res?.currentLocalTime);
      this.dateTimeLoading$.next(false);
    });
  }
}

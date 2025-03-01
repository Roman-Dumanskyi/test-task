import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BaseHttpService} from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService extends BaseHttpService {

  private readonly apiUrl: string = 'https://timeapi.io/api/';

  constructor(http: HttpClient) {
    super(http);
  }

  getLocalTime(): Observable<any> {
    const endpoint = `${this.apiUrl}timezone/zone`;
    const params = new HttpParams().set('timeZone', 'Europe/Kiev');
    return this.get<any>(endpoint, params);
  }
}




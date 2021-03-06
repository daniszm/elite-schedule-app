import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteApi {
  private baseUrl = 'https://elite-schedule-app-i2-ad6b8.firebaseio.com/';
  private currentTourney: any = {};

  constructor(public http: Http) {

  }

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
      .subscribe(res => resolve(
        res.json()
      ))
    })
  }

  getTournamentData(tourneyId): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    .map(res => {
      this.currentTourney = res.json();
      return this.currentTourney;
    })
  }

  getCurrentTourney() {
    return this.currentTourney;
  }
}

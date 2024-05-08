import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activityURL ="api/activity/create"

  constructor(private http: HttpClient) { }

  createNewActivity(newActivity:Activity) {
    return this.http.post<Activity> (this.activityURL, newActivity, {responseType: 'json'});
  }
}

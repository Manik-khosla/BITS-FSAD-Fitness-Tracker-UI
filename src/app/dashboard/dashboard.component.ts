import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from '../activity/activity.component';
import { LocalStorageService } from '../session/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,ActivityComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

weeks: number[] = [1,2,3,4];
static selectedDay: number;

 constructor(private localStorage : LocalStorageService, private router: Router) {}

 ngOnInit() {
 if(!this.localStorage.getJWTToken()) {
  this.router.navigate(['home']);
 }
 }

  @ViewChild(ActivityComponent)
  activityComponent!: ActivityComponent;

   setSelectedWeek(week: number) {
   this.activityComponent.setSelectedWeek(week)
  }

  setSelectedDay(day: number) {
  DashboardComponent.selectedDay = day
  }

  getSelectedDay(){
    return DashboardComponent.selectedDay
  }

}


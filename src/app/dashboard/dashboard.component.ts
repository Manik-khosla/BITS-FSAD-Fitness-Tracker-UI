import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from '../activity/activity.component';

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


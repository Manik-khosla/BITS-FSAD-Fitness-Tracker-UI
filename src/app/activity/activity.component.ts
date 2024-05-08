import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap'
import { ActivityService } from './activity.service';
import { Activity } from '../activity/activity';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css',
})
export class ActivityComponent {

  numberOfDays: number[] = [1, 2, 3, 4, 5, 6, 7];
  selectedDay!: number; 
  selectedWeek!: number;
  @Output()
  setselectedDay = new EventEmitter<number>();
  activityModal : any
  activity: Activity = new Activity;
  activities : Activity[] = []


  constructor(private activityService: ActivityService) { 
  }

  setSelectedWeek(selectedWeek: number) {
    this.selectedWeek = selectedWeek
    this.activity.ScheduleWeek = selectedWeek;
    console.log("selected week " + this.selectedWeek)
  }

  setSelectedDay(Day: number) {
    this.selectedDay = Day
    console.log("selected day " + this.selectedDay)
    this.updateDay(Day)
    this.openActivityModal()

  }

  openActivityModal() {
    this.activity = new Activity;
    const activityModal = new bootstrap.Modal('#activityModal')
    this.activityModal = activityModal
    this.activityModal.show()
  }

  createActivity(activity: Activity) {
  console.log(" activity name " + activity.Name + " duration " + activity.Duration)
  this.activity.ScheduleDay = DashboardComponent.selectedDay
  this.activities.push(activity)
  this.activityModal.hide();  
  }

  updateDay(day:number) {
    this.setselectedDay.emit(day);
  }

}

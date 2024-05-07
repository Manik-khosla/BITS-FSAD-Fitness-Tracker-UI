import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Activity } from './activity';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

  numberOfDays: number[] = [1, 2, 3, 4, 5, 6, 7];
  selectedDay!: number;
  @Input()
  selectedWeek!: number;
  activity: Activity = new Activity;

  setSelectedWeek(selectedWeek: number) {
    this.selectedWeek = selectedWeek
    console.log("selected week " + this.selectedWeek)
  }

  setSelectedDay(selectedDay: number) {
    this.selectedDay = selectedDay
    console.log("selected day " + this.selectedDay)
    this.openActivityModal()
  }

  openActivityModal() {
    const activityModal = new bootstrap.Modal('#activityModal')
    activityModal.show()
  }

}

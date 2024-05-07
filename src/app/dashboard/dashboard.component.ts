import { Component, ViewChild } from '@angular/core';
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

  @ViewChild(ActivityComponent)
  private activityComponent!: ActivityComponent;

   selectedWeek(week: number) {
   this.activityComponent.setSelectedWeek(week)

  }

}


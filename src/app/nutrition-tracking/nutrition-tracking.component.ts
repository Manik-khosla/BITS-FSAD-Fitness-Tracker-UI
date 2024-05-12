import { Component } from '@angular/core';
import { NutritionData } from './nutritionData';
import { CommonModule } from '@angular/common';
import { NutritionService } from './nutrition.service';
import { AppComponent } from '../app.component';
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-nutrition-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nutrition-tracking.component.html',
  styleUrl: './nutrition-tracking.component.css'
})
export class NutritionTrackingComponent {

  NutritionData = NutritionData.Items
  NutritionAdded: NutritionData = new NutritionData;
  AddedToDietMessage: any;

  CalorieRequirement = 2500;
  ProteinRequirement = 60;
  FatRequirement = 50;
  CarbsRequirement = 250;

  Calorie: number[] = [];
  Protein: number[] = [];
  Carbs: number[] = [];
  Fat: number[] = [];

  TotalCalorieIntake!: number;
  TotalProteinIntake!: number;
  TotalCarbsIntake!: number;
  TotalFatIntake!: number;

  caloriePercent!: number;
  proteinPercent!: number;
  carbsPercent!: number;
  fatPercent!: number;

  constructor(private nutritionService: NutritionService, private appComponent: AppComponent) { }

   async ngOnInit() {

   this.nutritionService.GetNutritionDietPlan(await this.appComponent.GetUserDetails()).subscribe(response => {
    if(response.body.data) {
      this.NutritionAdded = response.body.data; 
      this.calculateNutritionalIntakeAndUpdateProgress()
    }
   })
    }

  async AddNutritonToDietPlan(nutrition: NutritionData) {
    this.nutritionService.AddNutritionToDietPlan(nutrition, await this.appComponent.GetUserDetails()).subscribe(response => {
      if (response.body.message) {
        this.NutritionAdded = response.body.response;    
        this.calculateNutritionalIntakeAndUpdateProgress()
        this.AddedToDietMessage = response.body.message
        this.showToasterMessage();
      }
    })
  }

calculateNutritionalIntakeAndUpdateProgress() {
  this.Calorie.push(Number(this.NutritionAdded.calories))
  this.calculateTotalNutritionalValue(this.Calorie, "Calorie")
  this.Protein.push(Number(this.NutritionAdded.protein.toString().split(" ")[0]))
  this.calculateTotalNutritionalValue(this.Protein, "Protein")
  this.Carbs.push(Number(this.NutritionAdded.carbs.toString().split(" ")[0]))
  this.calculateTotalNutritionalValue(this.Carbs, "Carbs")
  this.Fat.push(Number(this.NutritionAdded.fat.toString().split(" ")[0]))
  this.calculateTotalNutritionalValue(this.Fat, "Fat")
}


  calculateTotalNutritionalValue(nutrition: number[], type: String) {

    let total: number = 0
    let i: number = 0
    for (i; i < nutrition.length; i++) {
      total = total + nutrition[i];
    }

    switch (type) {

      case "Calorie": this.TotalCalorieIntake = total
        this.CalculatePercent(type)
        break
      case "Protein": this.TotalProteinIntake = total
        this.CalculatePercent(type)
        break
      case "Carbs": this.TotalCarbsIntake = total
        this.CalculatePercent(type)
        break
      case "Fat": this.TotalFatIntake = total
        this.CalculatePercent(type)
        break
    }
  }

  CalculatePercent(type: String) {

    switch (type) {

      case "Calorie": this.caloriePercent = (100 * this.TotalCalorieIntake) / this.CalorieRequirement
        break
      case "Protein": this.proteinPercent = (100 * this.TotalProteinIntake) / this.ProteinRequirement
        break
      case "Carbs": this.carbsPercent = (100 * this.TotalCarbsIntake) / this.CarbsRequirement
        break
      case "Fat": this.fatPercent = (100 * this.TotalFatIntake) / this.FatRequirement
        break
    }
  }

  showToasterMessage() {
    const myToast = bootstrap.Toast.getOrCreateInstance('#NutritionAddMsg')
    myToast.show()
  }

}

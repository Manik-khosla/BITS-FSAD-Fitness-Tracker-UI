import { Injectable } from '@angular/core';
import { NutritionData } from './nutritionData';
import { User } from '../signup/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URLGenerator } from '../URLGenerator';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  constructor(private http: HttpClient,) { }

  AddNutritionToDietPlan(data: NutritionData, user: User) {

    var nutrition = {
      "name" : data.name,
      "date": Date.now(),
      "calories": data.calories,
      "protein": data.protein,
      "carbs": data.carbs,
      "fat": data.fat,
      "userId": user.id
    }

    return this.http.post<any>(URLGenerator.CreateNutritionData, nutrition, { responseType: 'json', observe: 'response'})
  }


  GetNutritionDietPlan(user: User) {
    const params = new HttpParams().set('id', user.id)
    return this.http.get<any>(URLGenerator.GetNutritionData, { responseType: 'json', observe: 'response',  params})
  }


}

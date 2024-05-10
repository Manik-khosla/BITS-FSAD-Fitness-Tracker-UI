import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setJWTToken(token: string) {
  localStorage.setItem('FitnessTrackerAuth', token);
  console.log("JWT Token set Successfully")
  }


  getJWTToken() {
  return localStorage.getItem('FitnessTrackerAuth')
  }

  DeleteJWTToken() {
    localStorage.removeItem('FitnessTrackerAuth')
  }
}

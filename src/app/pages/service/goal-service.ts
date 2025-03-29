import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GoalService {
  loggedUserData: any;

  constructor(private http: HttpClient) {
    const localData = localStorage.getItem('goalUser');
    if (localData) {
      const loggedData: any = JSON.parse(localData);
      this.loggedUserData = loggedData;
    }
  }

  saveGoal(obj: any) {
    return this.http.post(
      'https://api.freeprojectapi.com/api/GoalTracker/createGoalWithMilestones',
      obj
    );
  }

  updateGoal(id: any, obj: any) {
    return this.http.put(
      'https://api.freeprojectapi.com/api/GoalTracker/updateGoalWithMilestones/' +
        id,
      obj
    );
  }

  allUserGoals(id: any) {
    return this.http.get(
      'https://api.freeprojectapi.com/api/GoalTracker/getAllGoalsByUser?userId=' +
        id
    );
  }

  ByIdGoals(id: any) {
    return this.http.get(
      'https://api.freeprojectapi.com/api/GoalTracker/getGoal/' + id
    );
  }

  deleteGoal(id: any) {
    return this.http.get(
      'https://api.freeprojectapi.com/api/GoalTracker/deleteGoal/' + id
    );
  }
}

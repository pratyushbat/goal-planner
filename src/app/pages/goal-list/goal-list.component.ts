import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GoalService } from '../service/goal-service';
import { IGoalList } from '../model/goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss'],
})
export class GoalListComponent {
  router = inject(Router);
  goalService = inject(GoalService);
  goalList: IGoalList[] = [];
  navigateToNewGoal() {
    this.router.navigateByUrl('new-goal');
  }

  constructor() {
    this.allGoals();
  }

  allGoals() {
    this.goalService
      .allUserGoals(this.goalService.loggedUserData.userId)
      .subscribe((res: IGoalList[]) => {
        this.goalList = res;
      });
  }
}

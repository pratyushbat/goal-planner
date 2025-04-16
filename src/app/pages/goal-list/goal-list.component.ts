import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from '../service/goal-service';
import { IGoalList } from '../model/goal';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss'],
  animations: [
    trigger('lightsOnOff', [
      state('off', style({ backgroundColor: 'black' })),
      state('on', style({ backgroundColor: 'white' })),
      transition('off=>on', [animate('2000ms 2s ease-in' , style({transform:'rotate(90deg)'})),]),
      transition('on=>off', [animate('2s ease-out', style({transform:'rotate(180deg)'}))]),
    ]),
  ],
})
export class GoalListComponent {

  router = inject(Router);
  goalService = inject(GoalService);
  route = inject(ActivatedRoute);

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

  onSelectGoal(goalData: IGoalList) {
    // hard coded
    // this.router.navigate(['goals',goalData.goalId])
    // dynamic
    this.router.navigate([goalData.goalId],{relativeTo:this.route})

  
  }
  roomState: string = 'on';
  toggleLight() {
    this.roomState = this.roomState === 'off' ? 'on' : 'off';
  }
  
  listFilter=0;

  filteChanged(event: any) {
    console.log(event)
    }
}

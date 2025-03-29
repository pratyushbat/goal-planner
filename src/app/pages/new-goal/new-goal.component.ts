import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { GoalService } from '../service/goal-service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss'],
})
export class NewGoalComponent {
  goalForm: FormGroup = new FormGroup({});

  constructor(private goalService: GoalService) {
    this.initializeForm();
    this.createNewMilestoneForm();
    // const localData= localStorage.getItem('goalUser');
    // if(localData){
    //   const loggedData :any =JSON.parse(localData);
    //   this.goalForm.get("userId").setValue(loggedData.userId)
    // }
    this.goalForm.get("userId").setValue(goalService.loggedUserData.userId)
  }
  initializeForm() {
    this.goalForm = new FormGroup({
      goalId: new FormControl(0),
      goalName: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      isAchieved: new FormControl(false),
      userId: new FormControl(''),
      milestones: new FormArray([]),
    });
  }

  get milestoneList(): FormArray {
    return this.goalForm.get('milestones') as FormArray;
  }
  get milestoneListControls() {
    const milestoneFormArray = this.goalForm.get('milestones') as FormArray;
    console.log(milestoneFormArray.controls);
    return milestoneFormArray.controls;
  }

  createNewMilestoneForm() {
    const newForm = new FormGroup({
      milestoneId: new FormControl(0),
      milestoneName: new FormControl(''),
      description: new FormControl(''),
      targetDate: new FormControl(''),
      isCompleted: new FormControl(false),
    });
    // console.log(this.goalForm, this.milestoneList);
    this.milestoneList.push(newForm);
  }

  onSaveGoal() {
    const formValue = this.goalForm.value;
    this.goalService.saveGoal(formValue).subscribe((res) => console.log(res));
  }

  getAllGoals(){

  }
}

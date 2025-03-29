import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proacedemyform',
  templateUrl: './proacedemyform.component.html',
  styleUrls: ['./proacedemyform.component.scss']
})
export class ProacedemyformComponent {

  constructor(){
    this.initializeForm()
  }
  reactiveForm!:FormGroup;
  initializeForm() {
      this.reactiveForm = new FormGroup({
        goalId: new FormControl(''),
        goalName: new FormControl(''),
        description: new FormControl(''),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        isAchieved: new FormControl(''),
        userId: new FormControl(''),
        address:  new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          postal: new FormControl(''),
          streetstartDate: new FormControl('')
        })
        ,
        skills: new FormArray([
          new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            postal: new FormControl(''),

          }),
          new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            postal: new FormControl(''),
          })
          
        ]),
        test_skills: new FormArray([
          new FormControl(''),
          new FormControl(''),
          
        ]),
      });
    }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  _userName: string = '';

  get userName() {
    return this._userName;
  }

  set userName(value) {
    this._userName = value;
    if (value === 'sham') alert('value set');
  }

  
  onSubmit(formvalue: any) {
    console.log(formvalue);
  }
}

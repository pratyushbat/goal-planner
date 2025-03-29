import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { loginUser } from './model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a routerLink="home">home</a>
            </li>
            <ng-template [ngIf]="!!loggedUserData">

            <li class="nav-item">
              <a routerLink="/dashboard">dashboard</a>
            </li>
            <li class="nav-item">
              <a routerLink="/goals">goals</a>
            </li>
            <li class="nav-item">
              <a routerLink="/tasks">tasks</a>
            </li>
            <li class="nav-item">
              <a routerLink="/reminders">reminders</a>
            </li>
            <li class="nav-item">
              <a routerLink="/acedemy">acedemy</a>
            </li>
  
            </ng-template>
          </ul>


          <button  *ngIf="!loggedUserData; else signupModalTemp" class="btn btn-outline-success" (click)="openModal()">
            Login
          </button>
          <ng-template #signupModalTemp>
          <button  class="btn btn-outline-success" (click)="openModal()">
            <i class="fa fa-user me-2"></i>{{loggedUserData.emailId}}
          </button>
          <button   class="btn btn-secondary"  (click)="onLogOff()">
            LogOut
          </button>
        </ng-template>
        </div>
      </div>
    </nav>

    <!-- Login Modal -->

    <div class="modal " #loginSignupModal id="login-modal">
      <form *ngIf="isLoginFormVisible(); else signupModalTemp" id="goal-form">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Login</h3>
            <button (click)="closeModal()" class="close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="goal-title">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter email"
                [(ngModel)]="loginUser.emailId"
                required
              />
            </div>
            <div class="form-group">
              <label for="goal-description">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                [(ngModel)]="loginUser.password"
                placeholder="Enter Password"
                ngModel
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary close-modal"
              (click)="closeModal()"
            >
              Cancel
            </button>
            <button class="btn btn-primary"   type="button"
            (click)="onLogin()" id="save-goal-btn">
              Login
            </button>
            <button
              class="btn btn-secondary"
              (click)="toggleForm()"
              type="button"
              id="signup-btn"
            >
              Signup
            </button>
          </div>
        </div>
      </form>
    </div>

    <ng-template #signupModalTemp>
      <form id="goal-form" #signUpForm="ngForm">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Signup</h3>
            <button (click)="closeModal()" class="close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="goal-title">Full Name</label>
              <input
                [(ngModel)]="registerObject.fullName"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter FullName"
                ngModel
                required
              />
            </div>

            <div class="form-group">
              <label for="goal-title">Email</label>
              <input
                [(ngModel)]="registerObject.emailId"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                ngModel
                required
              />
            </div>
            <div class="form-group">
              <label for="goal-description">Password</label>
              <input
                [(ngModel)]="registerObject.password"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                ngModel
                required
              />
            </div>
            <div class="form-group">
              <label for="goal-description">Mobile No</label>
              <input
                [(ngModel)]="registerObject.mobileNo"
                type="text"
                id="mobileNo"
                name="mobileNo"
                placeholder="Enter Confirm Password"
                ngModel
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary close-modal"
              (click)="closeModal()"
            >
              Cancel
            </button>
            <button
              class="btn btn-primary"
              type="button"
              (click)="onRegister()"
              id="save-goal-btn"
            >
              Signup
            </button>
            <button
              class="btn btn-primary"
              (click)="toggleForm()"
              type="button"
              id="login-btn"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </ng-template>
  `,

  styles: [
    ' .role{ display :flex; flex-direction:row;   }  li{padding: 10px 10px;}',
  ],
})
export class HeaderComponent implements OnInit {

  http = inject(HttpClient);
  route = inject(Router);

  showHello: boolean = true;
  isLoginFormVisible = signal<boolean>(true);
  @ViewChild('loginSignupModal') loginModal!: ElementRef;

  registerObject: any = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: '',
  };

  loginUser: loginUser = new loginUser();
  loggedUserData: any;


  ngOnInit(): void {

    const localData=localStorage.getItem('goalUser');
    if(localData)
      this.loggedUserData=JSON.parse(localData)
  }

  toggleForm() {
    console.log(this.isLoginFormVisible());
    this.isLoginFormVisible.set(!this.isLoginFormVisible());
  }

  openModal() {
    if (this.loginModal) this.loginModal.nativeElement.style.display = 'flex';
  }

  closeModal() {
    if (this.loginModal) this.loginModal.nativeElement.style.display = 'none';
  }

  onLogin() {
    this.http
      .post(
        'https://api.freeprojectapi.com/api/GoalTracker/login',
        this.loginUser
      )
      .subscribe(
        (res) => {console.log(res);
          localStorage.setItem('goalUser',JSON.stringify(res))
          this.loggedUserData=res;
          this.closeModal()},
        (err) => console.log(err)
      );
  }


  onLogOff() {
    localStorage.clear()
    this.loggedUserData=null;
    this.route.navigate(['home'])
  }

  onRegister() {
    // chetan11@gmail.com
    // 112233

    this.http
      .post(
        'https://api.freeprojectapi.com/api/GoalTracker/register',
        this.registerObject
      )
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}

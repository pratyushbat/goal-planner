import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewGoalComponent } from './pages/new-goal/new-goal.component';
import { GoalListComponent } from './pages/goal-list/goal-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { RemidersComponent } from './pages/remiders/remiders.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './pages/header.component.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AuthGuardService } from './pages/guards/auth-guard';
import { ProacedemyformComponent } from './pages/proacedemyform/proacedemyform.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGoalComponent,
    GoalListComponent,
    TaskListComponent,
    RemidersComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    ProacedemyformComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    BrowserAnimationsModule,  FormsModule   ,ReactiveFormsModule
    ,HttpClientModule      
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

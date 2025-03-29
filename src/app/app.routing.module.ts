import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GoalListComponent } from './pages/goal-list/goal-list.component';
import { RemidersComponent } from './pages/remiders/remiders.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { AuthGuardService } from './pages/guards/auth-guard';
import { NewGoalComponent } from './pages/new-goal/new-goal.component';
import { ProacedemyformComponent } from './pages/proacedemyform/proacedemyform.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuardService]  },
      { path: 'goals', component: GoalListComponent , canActivate: [AuthGuardService] },
      { path: 'new-goal', component: NewGoalComponent , canActivate: [AuthGuardService] },
      { path: 'tasks', component: TaskListComponent, canActivate: [AuthGuardService]  },
      { path: 'reminders', component: RemidersComponent , canActivate: [AuthGuardService] },
      { path: 'acedemy', component: ProacedemyformComponent , canActivate: [AuthGuardService] },
      
      // { path: '**', component: NotFoundComponent },s
    ],{
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

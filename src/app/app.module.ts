import { APP_INITIALIZER, NgModule } from '@angular/core';
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

import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './pages/guards/auth-guard';
import { ProacedemyformComponent } from './pages/proacedemyform/proacedemyform.component';
import { GoaldetailComponent } from './goaldetail/goaldetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ConfigService } from './pages/service/config.service';
import { intializeApp } from './app-initializer';
import { DropDownDirective } from './directive/drop-down.directive';
import { IfDirective } from './directive/ifdirective';
import { HighlightDirective } from './directive/highligh.directive';
import { BorderDirective } from './directive/border.directive';
import { HighlightAndBorderDirective } from './directive/highlightborderdirective';
import { HighlightandborderComponent } from './highlightandborder/highlightandborder.component';
import { RootComponent } from './pages/root/root.component';
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
    GoaldetailComponent,
    PagenotfoundComponent,
    DropDownDirective,IfDirective, HighlightandborderComponent,
    // HighlightDirective,BorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightDirective,BorderDirective,
    HighlightAndBorderDirective,
    RootComponent
  ],
  providers: [
    AuthGuardService,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: intializeApp,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

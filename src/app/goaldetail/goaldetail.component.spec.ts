import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaldetailComponent } from './goaldetail.component';

describe('GoaldetailComponent', () => {
  let component: GoaldetailComponent;
  let fixture: ComponentFixture<GoaldetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoaldetailComponent]
    });
    fixture = TestBed.createComponent(GoaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

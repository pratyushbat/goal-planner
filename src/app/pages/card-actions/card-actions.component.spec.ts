import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActionsComponent } from './card-actions.component';

describe('CardActionsComponent', () => {
  let component: CardActionsComponent;
  let fixture: ComponentFixture<CardActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardActionsComponent]
    });
    fixture = TestBed.createComponent(CardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

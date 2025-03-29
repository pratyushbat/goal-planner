import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProacedemyformComponent } from './proacedemyform.component';

describe('ProacedemyformComponent', () => {
  let component: ProacedemyformComponent;
  let fixture: ComponentFixture<ProacedemyformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProacedemyformComponent]
    });
    fixture = TestBed.createComponent(ProacedemyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemidersComponent } from './remiders.component';

describe('RemidersComponent', () => {
  let component: RemidersComponent;
  let fixture: ComponentFixture<RemidersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemidersComponent]
    });
    fixture = TestBed.createComponent(RemidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

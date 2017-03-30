import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthActivatePasswordComponent } from './auth-activate-password.component';

describe('AuthActivatePasswordComponent', () => {
  let component: AuthActivatePasswordComponent;
  let fixture: ComponentFixture<AuthActivatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthActivatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthActivatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

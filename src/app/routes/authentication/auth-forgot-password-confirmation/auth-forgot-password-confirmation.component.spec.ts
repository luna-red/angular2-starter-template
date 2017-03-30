import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordConfirmationComponent } from './auth-forgot-password-confirmation.component';

describe('AuthForgotPasswordConfirmationComponent', () => {
  let component: AuthForgotPasswordConfirmationComponent;
  let fixture: ComponentFixture<AuthForgotPasswordConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthForgotPasswordConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthForgotPasswordConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

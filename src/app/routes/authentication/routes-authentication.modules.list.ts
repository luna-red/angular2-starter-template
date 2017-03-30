import { Authentication } from './auth.component';
import { AuthActivatePasswordComponent } from './auth-activate-password/auth-activate-password.component';
import { AuthForgotPasswordComponent } from './auth-forgot-password/auth-forgot-password.component';
import { AuthForgotPasswordConfirmationComponent } from './auth-forgot-password-confirmation/auth-forgot-password-confirmation.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';

export const AuthenticationRoutesModuleList = [
  Authentication,
  AuthActivatePasswordComponent,
  AuthForgotPasswordComponent,
  AuthForgotPasswordConfirmationComponent,
  AuthLoginComponent
];

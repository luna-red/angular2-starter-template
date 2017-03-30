import { Routes } from '@angular/router';
import { Authentication } from './auth.component';
import { AuthForgotPasswordComponent } from './auth-forgot-password/auth-forgot-password.component';
import { AuthForgotPasswordConfirmationComponent } from './auth-forgot-password-confirmation/auth-forgot-password-confirmation.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthActivatePasswordComponent } from './auth-activate-password/auth-activate-password.component';

export const AuthRoutes: Routes = [
  {
    path: 'auth',
    component: Authentication,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: AuthLoginComponent
      },
      {
        path: 'forgot-password',
        component: AuthForgotPasswordComponent,
      },
      {
        path: 'reset-success',
        component: AuthForgotPasswordConfirmationComponent,
      },
      {
        path: 'reset-password/:token',
        component: AuthActivatePasswordComponent,
      }
    ]
  }
];

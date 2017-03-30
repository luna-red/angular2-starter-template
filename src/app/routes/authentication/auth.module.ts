import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routes';
import {
  AuthenticationRoutesModuleList
} from './routes-authentication.modules.list';

import { ForgotPasswordComponent } from '../../components/authentication/forgot-password/forgot-password.component';
import { LoginComponent } from '../../components/authentication/login/login.component';
import { ResetPasswordComponent } from '../../components/authentication/reset-password/reset-password.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(AuthRoutes),
  ],
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    AuthenticationRoutesModuleList
  ]
})

export class AuthenticationModule {}

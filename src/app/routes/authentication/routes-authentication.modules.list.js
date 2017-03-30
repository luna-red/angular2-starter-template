"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_component_1 = require("./auth.component");
var auth_activate_password_component_1 = require("./auth-activate-password/auth-activate-password.component");
var auth_activation_success_component_1 = require("./auth-activation-success/auth-activation-success.component");
var auth_forgot_password_component_1 = require("./auth-forgot-password/auth-forgot-password.component");
var auth_forgot_password_confirmation_component_1 = require("./auth-forgot-password-confirmation/auth-forgot-password-confirmation.component");
var auth_login_component_1 = require("./auth-login/auth-login.component");
exports.AuthenticationRoutesModuleList = [
    auth_component_1.RouteAuthentication,
    auth_activate_password_component_1.AuthActivatePasswordComponent,
    auth_activation_success_component_1.AuthActivationSuccessComponent,
    auth_forgot_password_component_1.AuthForgotPasswordComponent,
    auth_forgot_password_confirmation_component_1.AuthForgotPasswordConfirmationComponent,
    auth_login_component_1.AuthLoginComponent
];

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var auth_routes_1 = require("./auth.routes");
var routes_authentication_modules_list_1 = require("./routes-authentication.modules.list");
var forgot_password_component_1 = require("../../components/authentication/forgot-password/forgot-password.component");
var login_component_1 = require("../../components/authentication/login/login.component");
var reset_password_component_1 = require("../../components/authentication/reset-password/reset-password.component");
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild(auth_routes_1.AuthRoutes)
        ],
        declarations: [
            forgot_password_component_1.ForgotPasswordComponent,
            login_component_1.LoginComponent,
            reset_password_component_1.ResetPasswordComponent
        ],
        exports: [
            routes_authentication_modules_list_1.AuthenticationRoutesModuleList,
        ]
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;

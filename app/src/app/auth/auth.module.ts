import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';



@NgModule({
  declarations: [
    LoginPage,
    SignupPage
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }

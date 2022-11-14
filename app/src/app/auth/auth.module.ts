import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [LoginPage, SignupPage],
  imports: [CommonModule, HttpClientModule, FormsModule, NgbModule, RouterLink],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';

import { AuthGuard } from './../guards/auth.guard';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],
  providers: [AuthGuard]
})
export class AuthModule { }

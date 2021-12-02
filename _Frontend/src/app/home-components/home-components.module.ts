import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    LoginComponent,
    AboutComponent,
    HomeComponent,
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  exports:[
    LoginComponent,
    AboutComponent,
    HomeComponent
  ]
})
export class HomeComponentsModule { }

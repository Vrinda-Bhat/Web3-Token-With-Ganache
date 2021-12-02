import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedResourcesModule } from './shared-resources/shared-resources.module';
import { FormsModule } from '@angular/forms';
import { HomeComponentsModule } from './home-components/home-components.module';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './home-components/login/login.component';
import { UserComponentsModule } from './user-components/user-components.module';
import { AdminComponentsModule } from './admin-components/admin-components.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedResourcesModule,
    HomeComponentsModule,
    UserComponentsModule,
    AdminComponentsModule
    
  ],
  providers: [CookieService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartsModule} from 'ng2-charts';
import {ChartModule} from 'angular2-chartjs';
import {CustomFormsModule} from 'ng2-validation';
import {ButtonsModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {MaterialModule} from './material/material.module';
import { UserComponent } from './components/user/user/user.component';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { RegisterComponent } from './components/register/register/register.component';
import {AdminComponent} from './components/admin/admin/admin.component';
import {NavbarComponent} from './components/navbar/navbar/navbar.component';
import {AdminModule} from './components/admin/admin.module';
import {HomeModule} from './components/home/home.module';
import {LoginModule} from './components/login/login.module';
import {NavbarModule} from './components/navbar/navbar.module';
import {RegisterModule} from './components/register/register.module';
import {UserModule} from './components/user/user.module';
import {DatepickerModule} from 'ngx-bootstrap';
import {AuthService} from './services/auth.service';
import {TokenStorageService} from './services/token-storage.service';
import {UserService} from './services/user.service';
import {AuthInterceptor} from './services/auth-interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    ReactiveFormsModule,
    ChartModule,
    CustomFormsModule,
    // Ng2BootstrapModule,
    DatepickerModule,
    NgbModule,

    // NgTemplateDirective,
    // AdminModule,
    // HomeModule,
    // LoginModule,
    // NavbarModule,
    // RegisterModule,
    // UserModule,
    ButtonsModule, WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  entryComponents: [],
  providers: [
    AuthService,
    TokenStorageService,
    UserService,
    AuthInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarRoutingModule} from './navbar-routing.module';
import {MaterialModule} from '../../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})


export class NavbarModule {

}

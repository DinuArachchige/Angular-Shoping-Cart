import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MaterialModule

  ]
})

export class AdminModule {

}

import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {MaterialModule} from '../../material/material.module';
import {ChartsModule} from 'ng2-charts';
import {ChartModule} from 'angular2-chartjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ChartsModule,
    ChartModule,
    NgbModule
  ]
})


export class HomeModule {

}

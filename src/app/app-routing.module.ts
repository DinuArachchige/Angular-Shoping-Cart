import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home/home.component';
import {UserComponent} from './components/user/user/user.component';
import {AdminComponent} from './components/admin/admin/admin.component';
import {LoginComponent} from './components/login/login/login.component';
import {RegisterComponent} from './components/register/register/register.component';
import {NavbarComponent} from './components/navbar/navbar/navbar.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'user',
    component: UserComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: 'auth/login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: RegisterComponent
  },

  {
    path: 'nav',
    component: NavbarComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

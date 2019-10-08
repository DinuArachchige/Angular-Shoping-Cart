import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {TokenStorageService} from './services/token-storage.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cartfrontend';

  info: any;
  private roles: string[];
  private authority: string;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  small: boolean;
  private today: number;

  constructor(private tokenStorage: TokenStorageService, private breakpointObserver: BreakpointObserver, private router: Router) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.small = true;
          console.log(
            'Matches small viewport or handset in portrait mode'
          );
        } else {
          this.small = false;
        }
      });

    // this.today = Date.now();
    this.today = new Date().getTime();
    this.getAllItem();
    // fixedTimezone = this.today;

  }


  logout() {
    this.tokenStorage.signOut();
    if (this.router.url === '/user') {
      return this.router.navigate(['/home']);
    }
  }


  private getAllItem() {
    // this.cartList = new Array();

  }

  ngOnInit() {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}

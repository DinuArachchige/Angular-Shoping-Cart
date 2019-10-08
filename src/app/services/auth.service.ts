import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthloginInfo} from '../dtos/authlogin-info';
import {Observable} from 'rxjs';
import {JwtResponse} from '../dtos/jwt-response';
import {SignupInfo} from '../dtos/signup-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loginUrl = 'http://localhost:8097/api/auth/signin';
  private signupUrl = 'http://localhost:8097/api/auth/signup';

  constructor(private http: HttpClient) {}

  attemptAuth(credentials: AuthloginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignupInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

}

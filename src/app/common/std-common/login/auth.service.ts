import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthResponse } from './auth-response.payload';
import { LocalStorageService } from 'ngx-webstorage';

interface SignUpRequest {
  username: string;
  password: string;
}

interface RefreshTokenRequest {
  refreshToken: string;
  username: string;
}

interface AuthRequest {
  username: string;
  password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  private _username?: string;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {
  }

  signUp(signUpRequest: SignUpRequest): Observable<any> {
      return this.http.post('/api/auth/register', signUpRequest);
  }

  login(loginReq: AuthRequest) {
      return this.http.post<AuthResponse>('/api/auth/login', loginReq)
          .pipe(
              map(data => {
                  this._username = data.username;
                  this.localStorage.store('authToken', data.authToken);
                  this.localStorage.store('username', data.username);
                  this.localStorage.store('refreshToken', data.refreshToken);
                  this.localStorage.store('expiresAt', data.expiresAt);

                  return true;
              }));
  }

  refreshToken() {
      return this.http.post<AuthResponse>('/api/auth/refreshToken', {
          refreshToken: this.localStorage.retrieve('refreshToken'),
          username: this.localStorage.retrieve('username')
      }).pipe(
          tap(resp => {
              this.localStorage.clear('authToken');
              this.localStorage.clear('expiresAt');
              this.localStorage.store('authToken', resp.authToken);
              this.localStorage.store('expiresAt', resp.expiresAt);
          })
      );
  }

  get username() {
      return this._username || this.localStorage.retrieve('username');
  }

  getAuthToken() {
      return this.localStorage.retrieve('authToken');
  }

  isAuthenticated(): boolean {
      return !!this.getAuthToken;
  }

  logout() {
      const refreshTokenReq: RefreshTokenRequest = {
          refreshToken: this.localStorage.retrieve("refreshToken"),
          username: this.localStorage.retrieve("username")
      };
      this.http.post('/api/auth/signoff', refreshTokenReq)
          .subscribe(resp => {

          }, error => {
              throwError(error);
          });

      this.localStorage.clear('authToken');
      this.localStorage.clear('username');
      this.localStorage.clear('refreshToken');
      this.localStorage.clear('expiresAt');
  }

}

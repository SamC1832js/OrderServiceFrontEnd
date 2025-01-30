import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthTokenService } from './authToken.service';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }
  apiHeader: string = 'users';
  private readonly authStatus = new BehaviorSubject<boolean>(false);
  readonly isAuthenticated$ = this.authStatus.asObservable();

  constructor(
    private http: HttpClient,
    private authTokenService: AuthTokenService
  ) {
    this.initializeAuthStatus();
  }

  private async initializeAuthStatus(): Promise<void> {
    const isAuth = await this.isAuthenticated();
    this.authStatus.next(isAuth);
  }

  login(email: string, password: string) {
    const body = { email, password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<{ Authorization: string; message: string }>(
        `${environment.apiBaseUrl + this.apiHeader}/login`,
        body,
        { headers }
      )
      .pipe(
        tap((response: { Authorization: string; message: string }) => {
          // Store the token using AuthTokenService
          this.authTokenService.setToken(response.Authorization);
          this.authStatus.next(true);
        }),
        catchError((error) => {
          this.authStatus.next(false);
          throw error;
        })
      );
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const body = { firstName, lastName, email, password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post(
      `${environment.apiBaseUrl + this.apiHeader}/register`,
      body,
      { headers }
    );
    return this.login(email, password);
  }

  logout(): void {
    this.authTokenService.clearToken();
    this.authStatus.next(false);
  }

  getProfile(): Promise<User> {
    return this.isAuthenticated().then((isAuth) => {
      if (!isAuth) {
        return Promise.reject('User is not authenticated');
      }
      const token = this.authTokenService.getToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      });
      return this.http
        .get<User>(`${environment.apiBaseUrl + this.apiHeader}/profile`, {
          headers,
        })
        .toPromise();
    });
  }

  async isAuthenticated(): Promise<boolean> {
    const token = this.authTokenService.getToken();
    console.log('Token:', token);
    if (!token) {
      console.error('No token found');
      return false;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    });

    try {
      const response = await this.http
        .get(`${environment.apiBaseUrl}${this.apiHeader}/validateToken`, {
          headers,
          responseType: 'text', // Handle plain text response
        })
        .toPromise();

      console.log('Token validation response:', response);

      // Check if the response indicates a valid token
      if (response === 'Token is valid') {
        console.log('Token is valid');
        return true;
      } else {
        console.log('Token is invalid or expired');
        return false;
      }
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthTokenService } from './authToken.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiHeader: string = 'users';
  private authStatus = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.authStatus.asObservable();

  constructor(
    private http: HttpClient,
    private authTokenService: AuthTokenService
  ) {}

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
    this.http.post(`${environment.apiBaseUrl + this.apiHeader}/register`, body);
    return this.login(email, password);
  }

  logout() {
    this.authTokenService.clearToken();
    this.authStatus.next(false);
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

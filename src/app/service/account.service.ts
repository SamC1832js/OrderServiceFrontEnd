import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthTokenService } from './authToken.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiHeader: string = 'users';
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
  }

  async isAuthenticated(): Promise<boolean> {
    const token = this.authTokenService.getToken();
    if (!token) {
      console.error('No token found');
      return false;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    try {
      const response = await this.http
        .get<{ message: string }>(
          `${environment.apiBaseUrl}${this.apiHeader}/validateToken`,
          { headers }
        )
        .toPromise();

      console.log('Token validation response:', response);
      if (response.message === 'Token is valid') {
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

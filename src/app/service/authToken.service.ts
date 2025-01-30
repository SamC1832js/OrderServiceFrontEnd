import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  // Store the token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve the token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Clear the token (e.g., on logout)
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getToken() || '',
    });
  }
}

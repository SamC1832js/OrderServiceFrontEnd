import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { HttpClient } from '@angular/common/http';

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
}

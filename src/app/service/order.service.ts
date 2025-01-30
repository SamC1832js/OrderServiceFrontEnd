import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthTokenService } from './authToken.service';
import { environment } from 'src/environments/environment';
import { Order } from '../model/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiHeader: string = 'orders';

  constructor(
    private http: HttpClient,
    private authTokenService: AuthTokenService
  ) {}

  getOrders() {
    const headers = this.authTokenService.getAuthHeaders();
    return this.http.get<Order[]>(
      `${environment.apiBaseUrl}${this.apiHeader}`,
      { headers }
    );
  }

  getOrderById(orderId: number): Observable<Order> {
    const headers = this.authTokenService.getAuthHeaders();
    return this.http.get<Order>(
      `${environment.apiBaseUrl}${this.apiHeader}/${orderId}`,
      { headers }
    );
  }

  createOrder() {
    const headers = this.authTokenService.getAuthHeaders();
    return this.http.post<Order>(
      `${environment.apiBaseUrl}${this.apiHeader}`,
      null, // No body needed for the POST based on your backend
      { headers }
    );
  }
}

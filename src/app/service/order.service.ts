import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthTokenService } from './authToken.service';
import { environment } from 'src/environments/environment';
import { Order, OrderItem, Product } from '../model/models';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
    return this.http
      .get<any>(`${environment.apiBaseUrl}${this.apiHeader}/${orderId}`, {
        headers,
      })
      .pipe(
        map((raw) => this.transformProductData(raw)),
        catchError((error) => {
          console.error('Error fetching orders:', error);
          return throwError(() => new Error('Failed to fetch orders'));
        })
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

  private parseProductString(productStr: string): Product {
    // Extract values using regex
    const matches = productStr.match(
      /id=(\d+), name=(.*?), description=(.*?), price=([\d.]+), Category=(.*?), Brand=(.*?), imgUrl=(.*?)\)/
    );

    if (!matches) throw new Error('Invalid product string format');

    return {
      id: parseInt(matches[1]),
      name: matches[2],
      description: matches[3],
      price: parseFloat(matches[4]),
      category: matches[5],
      brand: matches[6],
      imgUrl: matches[7],
    };
  }

  private transformProductData(raw: any): Order {
    const transformedProducts: OrderItem[] = Object.entries(raw.products).map(
      ([productStr, quantity]) => ({
        product: this.parseProductString(productStr),
        quantity: quantity as number,
      })
    );

    return {
      id: raw.id,
      products: transformedProducts,
      totalPrice: raw.totalPrice,
      date: new Date(raw.date),
    };
  }
}

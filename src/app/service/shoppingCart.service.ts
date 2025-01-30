import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ShoppingCart, CartItem, Product, OrderItem } from '../model/models';
import { environment } from 'src/environments/environment';
import { AuthTokenService } from './authToken.service';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  apiHeader: string = 'shoppingcart';
  private cartSubject = new BehaviorSubject<ShoppingCart | null>(null);
  public cart$ = this.cartSubject.asObservable();

  constructor(
    private http: HttpClient,
    private authTokenService: AuthTokenService
  ) {}

  private updateCartState(cart: ShoppingCart | null) {
    this.cartSubject.next(cart);
  }

  // Get the current user's shopping cart
  getShoppingCart(): Observable<ShoppingCart> {
    const headers = this.authTokenService.getAuthHeaders();
    return this.http
      .get<any>(`${environment.apiBaseUrl}${this.apiHeader}`, { headers })
      .pipe(
        map((raw) => {
          const transformed = this.transformProductData(raw);
          this.updateCartState(transformed);
          return transformed;
        }),
        catchError((error) => {
          console.error('Error fetching shopping cart:', error);
          return throwError(() => new Error('Failed to fetch shopping cart'));
        })
      );
  }
  // Add a product to the shopping cart
  addToCart(
    productName: string,
    quantity: number = 1
  ): Observable<ShoppingCart> {
    const headers = this.authTokenService.getAuthHeaders();
    const body: CartItem = { productName, quantity };

    return this.http
      .post<ShoppingCart>(`${environment.apiBaseUrl}${this.apiHeader}`, body, {
        headers,
      })
      .pipe(tap((cart) => this.updateCartState(cart)));
  }

  // Update the quantity of a product in the shopping cart
  updateCart(productName: string, quantity: number): Observable<ShoppingCart> {
    const headers = this.authTokenService.getAuthHeaders();
    const body: CartItem = {
      productName,
      quantity,
    };
    return this.http.put<ShoppingCart>(
      `${environment.apiBaseUrl}${this.apiHeader}`,
      body,
      {
        headers,
      }
    );
  }

  // Remove a product from the shopping cart
  removeFromCart(productName: string): Observable<string> {
    const headers = this.authTokenService.getAuthHeaders();
    const params = new HttpParams().set('productName', productName);

    return this.http.delete(`${environment.apiBaseUrl}${this.apiHeader}`, {
      headers,
      params,
      responseType: 'text',
    });
  }

  // Clear the entire shopping cart
  clearCart(): Observable<string> {
    const headers = this.authTokenService.getAuthHeaders();
    return this.http.delete(
      `${environment.apiBaseUrl}${this.apiHeader}/clear`,
      {
        headers,
        responseType: 'text',
      }
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

  private transformProductData(raw: any): ShoppingCart {
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
    };
  }
}

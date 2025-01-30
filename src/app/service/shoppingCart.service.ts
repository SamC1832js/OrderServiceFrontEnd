import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ShoppingCart, CartItem, Product, OrderItem } from '../model/models';
import { environment } from 'src/environments/environment';
import { AuthTokenService } from './authToken.service';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  apiHeader: string = 'shoppingcart';
  private itemCountSubject = new BehaviorSubject<number>(0);
  public itemCount$ = this.itemCountSubject.asObservable();

  constructor(
    private http: HttpClient,
    private authTokenService: AuthTokenService,
    private accountService: AccountService
  ) {
    this.accountService.isAuthenticated$
      .pipe(filter((isAuthenticated) => !isAuthenticated))
      .subscribe(() => {
        this.itemCountSubject.next(0); // Immediate count reset
      });
  }

  // Get the current user's shopping cart
  getShoppingCart(): Observable<ShoppingCart> {
    const headers = this.authTokenService.getAuthHeaders();
    return this.http
      .get<any>(`${environment.apiBaseUrl}${this.apiHeader}`, { headers })
      .pipe(
        map((rawCart) => this.transformCartData(rawCart)),
        tap((cart) => this.updateItemCount(cart)),
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
      .post<any>(`${environment.apiBaseUrl}${this.apiHeader}`, body, {
        headers,
      })
      .pipe(
        map((rawCart) => this.transformCartData(rawCart)),
        tap((cart) => this.updateItemCount(cart))
      );
  }

  // Update the quantity of a product in the shopping cart
  updateCart(productName: string, quantity: number): Observable<ShoppingCart> {
    const headers = this.authTokenService.getAuthHeaders();
    const body: CartItem = { productName, quantity };

    return this.http
      .put<any>(`${environment.apiBaseUrl}${this.apiHeader}`, body, { headers })
      .pipe(
        map((rawCart) => this.transformCartData(rawCart)),
        tap((cart) => this.updateItemCount(cart))
      );
  }

  // Remove a product from the shopping cart
  removeFromCart(productName: string): Observable<ShoppingCart> {
    const headers = this.authTokenService.getAuthHeaders();
    const params = new HttpParams().set('productName', productName);

    return this.http
      .delete<any>(`${environment.apiBaseUrl}${this.apiHeader}`, {
        headers,
        params,
      })
      .pipe(
        map((rawCart) => this.transformCartData(rawCart)),
        tap((cart) => this.updateItemCount(cart))
      );
  }

  // Clear the entire shopping cart
  clearCart(): Observable<ShoppingCart> {
    const headers = this.authTokenService.getAuthHeaders();
    return this.http
      .delete<any>(`${environment.apiBaseUrl}${this.apiHeader}/clear`, {
        headers,
      })
      .pipe(
        map((rawCart) => this.transformCartData(rawCart)),
        tap((cart) => this.updateItemCount(cart))
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

  private transformCartData(raw: any): ShoppingCart {
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

  private updateItemCount(cart: ShoppingCart): void {
    this.itemCountSubject.next(cart.products.length);
  }
}

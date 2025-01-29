import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Promise<Product[]> {
    return this.http
      .get<Product[]>(environment.apiBaseUrl + 'products')
      .toPromise();
  }

  addProduct(product: Product) {
    return this.http.post<Product>(
      environment.apiBaseUrl + 'products',
      product
    );
  }

  addProductToCart(product: Product) {
    return this.http.post<Product>(
      environment.apiBaseUrl + 'shoppingcart/',
      product
    );
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(
      environment.apiBaseUrl + 'products?productName=' + product.name,
      product
    );
  }

  deleteProduct(productName: string) {
    return this.http.delete<Product>(
      environment.apiBaseUrl + 'products?productName=' + productName
    );
  }
}

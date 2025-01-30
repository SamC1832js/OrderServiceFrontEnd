import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../model/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiHeader: string = 'products';
  constructor(private http: HttpClient) {}

  getProducts(): Promise<Product[]> {
    return this.http
      .get<Product[]>(`${environment.apiBaseUrl}${this.apiHeader}`)
      .toPromise();
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(
      `${environment.apiBaseUrl}${this.apiHeader}/${id}`
    );
  }

  addProduct(product: Product) {
    return this.http.post<Product>(
      `${environment.apiBaseUrl}${this.apiHeader}`,
      product
    );
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(
      `${environment.apiBaseUrl}${this.apiHeader}?productName=${product.name}`,
      product
    );
  }

  deleteProduct(productName: string) {
    return this.http.delete<Product>(
      `${environment.apiBaseUrl}${this.apiHeader}?productName=${productName}`
    );
  }
}

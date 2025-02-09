import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/models';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .then((products) => {
        this.products = products;
        this.filteredProducts = products;
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  updateFilteredProducts(filteredProducts: Product[]): void {
    this.filteredProducts = filteredProducts;
  }
}

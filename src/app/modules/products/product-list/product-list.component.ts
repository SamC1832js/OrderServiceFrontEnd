import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/models';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }
}

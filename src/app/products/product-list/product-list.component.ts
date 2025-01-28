import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/models';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor() {}

  ngOnInit() {}

  fetchProducts() {
    // fetch products from server and set it to products array
  }
}

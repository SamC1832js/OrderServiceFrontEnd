import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../model/models';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product!: Product;

  @Output()
  addToCart = new EventEmitter<Product>();

  @Output()
  removeFromCart = new EventEmitter<Product>();

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  OnAddToCart() {}
}

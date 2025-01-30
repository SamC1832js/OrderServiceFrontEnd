import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../model/models';
import { ProductService } from 'src/app/service/product.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';

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

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {}

  OnAddToCart() {
    if (this.product) {
      this.shoppingCartService.addToCart(this.product.name, 1).subscribe({
        next: (response) => {
          console.log('Product added to cart:', response);
        },
        error: (error) => {
          console.error('Failed to add product to cart:', error);
        },
      });
    }
  }
}

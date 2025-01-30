import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ShoppingCart } from 'src/app/model/models';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})
export class ShoppingCartComponent implements OnInit, AfterViewInit {
  cart!: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.fetchShoppingCart();
  }

  ngAfterViewInit() {}

  fetchShoppingCart() {
    this.shoppingCartService.getShoppingCart().subscribe({
      next: (response) => {
        this.cart = response;
        console.log('Shopping cart:', this.cart);
      },
      error: (error) => {
        console.error('Failed to fetch shopping cart:', error);
      },
    });
  }

  updateQuantity(productName: string, quantity: number) {
    this.shoppingCartService.updateCart(productName, quantity).subscribe({
      next: (response) => {
        console.log('Quantity updated:', response);
        this.fetchShoppingCart(); // Refresh the cart
      },
      error: (error) => {
        console.error('Failed to update quantity:', error);
      },
    });
  }

  removeProduct(productName: string) {
    this.shoppingCartService.removeFromCart(productName).subscribe({
      next: (response) => {
        console.log('Product removed:', response);
        this.fetchShoppingCart(); // Refresh the cart on success
      },
      error: (error) => {
        console.error('Failed to remove product:', error);
        // Handle actual errors here (e.g., network issues)
      },
    });
  }

  clearCart() {
    this.shoppingCartService.clearCart().subscribe({
      next: (response) => {
        console.log('Cart cleared:', response);
        this.fetchShoppingCart(); // Refresh the cart
      },
      error: (error) => {
        console.error('Failed to clear cart:', error);
      },
    });
  }

  checkoutCart() {}
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/app/model/models';
import { OrderService } from 'src/app/service/order.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})
export class ShoppingCartComponent implements OnInit, AfterViewInit {
  cart!: ShoppingCart;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.fetchShoppingCart();
  }

  ngAfterViewInit() {}

  fetchShoppingCart() {
    this.shoppingCartService.getShoppingCart().subscribe({
      next: (cart) => {
        this.cart = cart;
        console.log('Shopping cart:', this.cart);
      },
      error: (error) => {
        console.error('Failed to fetch shopping cart:', error);
      },
    });
  }

  updateQuantity(productName: string, quantity: number) {
    this.shoppingCartService.updateCart(productName, quantity).subscribe({
      next: (updatedCart) => {
        this.cart = updatedCart;
        this.notificationService.show('Cart updated successfully', 'success');
      },
      error: (error) => {
        console.error('Failed to update quantity:', error);
        this.notificationService.show('Failed to update cart', 'error');
      },
    });
  }

  removeProduct(productName: string) {
    this.shoppingCartService.removeFromCart(productName).subscribe({
      next: (updatedCart) => {
        this.cart = updatedCart;
        this.notificationService.show('Product removed from cart', 'success');
      },
      error: (error) => {
        console.error('Failed to remove product:', error);
        this.notificationService.show('Failed to remove product', 'error');
      },
    });
  }

  clearCart(isCheckout: boolean = false) {
    let confirmClear = false;
    if (!isCheckout) {
      confirmClear = window.confirm(
        'Are you sure you want to clear your cart?'
      );
    } else {
      confirmClear = true;
    }
    if (confirmClear) {
      this.shoppingCartService.clearCart().subscribe({
        next: (updatedCart) => {
          this.cart = updatedCart;
          if (!isCheckout) {
            this.notificationService.show(
              'Cart cleared successfully',
              'success'
            );
          }
        },
        error: (error) => {
          console.error('Failed to clear cart:', error);
          this.notificationService.show('Failed to clear cart', 'error');
        },
      });
    }
  }

  checkoutCart() {
    this.orderService.createOrder().subscribe({
      next: (order) => {
        console.log('Order created:', order);
        this.clearCart(true);
        this.notificationService.show('Order placed successfully!', 'success');
        this.router.navigate(['/account/orders', order.id]);
      },
      error: (error) => {
        console.error('Checkout failed:', error);
        this.notificationService.show('Failed to place order', 'error');
      },
    });
  }

  increment(item: any): void {
    item.quantity++;
    this.updateQuantity(item.product.name, item.quantity);
  }

  decrement(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateQuantity(item.product.name, item.quantity);
    }
  }
}

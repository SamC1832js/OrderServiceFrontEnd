import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCart } from 'src/app/model/models';
import { AccountService } from 'src/app/service/account.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
  showDropdown = false;
  cartItemCount = 0;
  private cartSubscription?: Subscription;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private accountService: AccountService
  ) {
    this.shoppingCartService.cart$.subscribe((cart) => {
      this.cartItemCount = cart?.products?.length || 0;
    });
  }

  ngOnInit() {
    this.cartSubscription = this.shoppingCartService.cart$.subscribe(
      (cart: ShoppingCart | null) => {
        this.cartItemCount = cart?.products?.length || 0;
      }
    );
    //Initial fetch
    this.shoppingCartService.getShoppingCart().subscribe();
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }

  get isAuthenticated(): Promise<boolean> {
    return this.accountService.isAuthenticated();
  }

  get user(): any {
    return this.accountService.getProfile();
  }

  logOut() {
    this.accountService.logout();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ShoppingCart, User } from 'src/app/model/models';
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
  isAuthenticated$: Observable<boolean>;
  private destroy$ = new Subject<void>();
  constructor(
    private shoppingCartService: ShoppingCartService,
    private accountService: AccountService
  ) {
    this.isAuthenticated$ = this.accountService.isAuthenticated$;
  }
  ngOnInit() {
    this.shoppingCartService.cart$
      .pipe(takeUntil(this.destroy$))
      .subscribe((cart) => {
        this.cartItemCount = cart?.products?.length || 0;
      });
    // Load initial cart state only if not already loaded
    // if (!this.shoppingCartService.currentCart$) {
    //   this.shoppingCartService.getShoppingCart().pipe(take(1)).subscribe();
    // }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  get isAuthenticated(): Promise<boolean> {
    return this.accountService.isAuthenticated();
  }
  get user(): Observable<User> {
    return this.accountService.getProfile() as Observable<User>;
  }
  logOut() {
    this.accountService.logout();
  }
}

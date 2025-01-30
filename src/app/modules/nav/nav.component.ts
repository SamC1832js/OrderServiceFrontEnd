import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ShoppingCart } from 'src/app/model/models';
import { AccountService } from 'src/app/service/account.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  itemCount$ = this.shoppingCartService.itemCount$;
  private destroy$ = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {
    this.isAuthenticated$ = this.accountService.isAuthenticated$;
  }

  ngOnInit() {
    this.accountService.isAuthenticated$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.shoppingCartService.getShoppingCart().subscribe();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigate(['/account/login']);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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

  constructor(
    private accountService: AccountService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {
    this.isAuthenticated$ = this.accountService.isAuthenticated$;
  }

  ngOnInit() {}

  logout(): void {
    this.accountService.logout();
    this.router.navigate(['/account/login']);
  }
}

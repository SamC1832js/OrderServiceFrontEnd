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
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

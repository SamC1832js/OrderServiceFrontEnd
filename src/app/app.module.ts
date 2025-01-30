import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './modules/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountModule } from './modules/account/account.module';
import { ShoppingCartService } from './service/shoppingCart.service';
import { ShoppingCartComponent } from './modules/shoppingcart/shoppingcart.component';
import { OrdersModule } from './modules/orders/orders.module';
import { AuthTokenService } from './service/authToken.service';
import { OrderService } from './service/order.service';
import { AccountService } from './service/account.service';
import { ProfileComponent } from './modules/account/profile/profile.component';
import { AccountComponent } from './modules/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShoppingCartComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AccountModule,
    ProductsModule,
    AccountModule,
    OrdersModule,
  ],
  providers: [
    ProductService,
    ShoppingCartService,
    AuthTokenService,
    OrderService,
    AccountService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

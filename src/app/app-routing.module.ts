import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/account/login/login.component';
import { RegisterComponent } from './modules/account/register/register.component';
import { OrderDetailComponent } from './modules/orders/order-detail/order-detail.component';
import { OrderListComponent } from './modules/orders/order-list/order-list.component';
import { AccountComponent } from './modules/account/account.component';
import { ProfileComponent } from './modules/account/profile/profile.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { ShoppingCartComponent } from './modules/shoppingcart/shoppingcart.component';

const routes: Routes = [
  // Product routes - moved before account routes
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },

  // Shopping cart
  { path: 'cart', component: ShoppingCartComponent },

  // Account routes
  {
    path: 'account',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'orders', component: OrderListComponent },
      { path: 'orders/:id', component: OrderDetailComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },

  // Wildcard route (should always be last)
  { path: '**', redirectTo: '/account/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

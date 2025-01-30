import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
    ],
  },
];
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [AccountComponent, LoginComponent, RegisterComponent],
  exports: [AccountComponent, LoginComponent, RegisterComponent],
  providers: [],
})
export class AccountModule {}

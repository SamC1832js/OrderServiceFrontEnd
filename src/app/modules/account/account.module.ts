import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    OrdersModule,
  ],
  declarations: [AccountComponent, LoginComponent, RegisterComponent],
  exports: [AccountComponent, LoginComponent, RegisterComponent],
  providers: [AccountService],
})
export class AccountModule {}

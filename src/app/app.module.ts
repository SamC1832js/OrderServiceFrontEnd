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

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    AccountModule,
    ProductsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

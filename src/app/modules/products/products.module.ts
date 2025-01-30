import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterComponent,
  ],
  exports: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterComponent,
    RouterModule,
  ],
})
export class ProductsModule {}

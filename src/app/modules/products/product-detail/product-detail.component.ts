import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from '../../../model/models';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() removeFromCart = new EventEmitter<Product>();
  @HostBinding('class.product-detail-page') isProductDetailPage = false;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isProductDetailPage = this.router.url.includes('/products/');

    if (!this.product) {
      // Get product ID from route
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          const productId = parseInt(id, 10); // Convert id to a number
          this.productService.getProductById(id).subscribe({
            next: (product) => {
              this.product = product;
            },
            error: (error) => {
              console.error('Failed to fetch product:', error);
            },
          });
        }
      });
    }
  }

  OnAddToCart() {
    if (this.product) {
      this.shoppingCartService.addToCart(this.product.name, 1).subscribe({
        next: (response) => {
          console.log('Product added to cart:', response);
        },
        error: (error) => {
          console.error('Failed to add product to cart:', error);
        },
      });
    }
  }

  viewProductDetail(id: string): void {
    this.router.navigate(['/products', id]);
  }

  goBackToProducts(): void {
    this.router.navigate(['/products']);
  }
}

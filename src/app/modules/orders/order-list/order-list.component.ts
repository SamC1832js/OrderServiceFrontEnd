import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/models';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders!: Order[];
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe({
      next: (orders) => (this.orders = orders),
      error: (error) => console.error('Failed to load orders:', error),
    });
  }
}

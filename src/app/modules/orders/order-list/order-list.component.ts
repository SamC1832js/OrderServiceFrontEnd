import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/models';
import { OrderService } from 'src/app/service/order.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders!: Order[];

  constructor(
    private orderService: OrderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (error) => {
        console.error('Failed to load orders:', error);
        this.notificationService.show('Failed to load orders', 'error');
      },
    });
  }
}

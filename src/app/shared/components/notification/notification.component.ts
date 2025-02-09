import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-notification',
  template: `
    <div class="notifications-container">
      <div
        class="notification"
        *ngFor="let notification of activeNotifications"
        [ngClass]="notification.type"
        [@slideInOut]
      >
        {{ notification.message }}
      </div>
    </div>
  `,
  styles: [
    `
      .notifications-container {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        pointer-events: none;
      }

      .notification {
        padding: 15px 25px;
        border-radius: 4px;
        color: white;
        margin-bottom: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        min-width: 300px;
        text-align: center;
        transform-origin: top center;
      }

      .success {
        background-color: #2c7a2c;
      }

      .error {
        background-color: #d32f2f;
      }

      .info {
        background-color: #1976d2;
      }
    `,
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        }),
        animate(
          '300ms ease-in-out',
          style({
            transform: 'translateY(0)',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({
          transform: 'translateY(0)',
          opacity: 1,
        }),
        animate(
          '300ms ease-in-out',
          style({
            transform: 'translateY(-100%)',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class NotificationComponent implements OnInit {
  activeNotifications: Array<{ message: string; type: string }> = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifications$.subscribe((notification) => {
      this.activeNotifications.push(notification);
      setTimeout(() => {
        this.activeNotifications = this.activeNotifications.filter(
          (n) => n !== notification
        );
      }, 1000); // Fixed duration for testing
    });
  }
}

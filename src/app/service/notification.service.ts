import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  notifications$ = this.notificationSubject.asObservable();

  show(
    message: string,
    type: 'success' | 'error' | 'info' = 'info',
    duration: number = 800
  ) {
    this.notificationSubject.next({ message, type, duration });
  }
}

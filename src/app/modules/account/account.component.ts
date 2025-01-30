import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to authentication status changes
    this.accountService.isAuthenticated$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;

        // Optional: Redirect based on auth status
        if (!isAuthenticated) {
          this.router.navigate(['/account/login']);
        }
      });
  }

  onLogout(): void {
    this.accountService.logout();
    this.router.navigate(['/account/login']);
  }

  ngOnDestroy(): void {
    // Clean up subscription when component is destroyed
    this.destroy$.next();
    this.destroy$.complete();
  }
}

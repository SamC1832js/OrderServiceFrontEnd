import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  constructor(
    private accountService: AccountService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  onLoginSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.accountService.login(email, password).subscribe({
      next: (response) => {
        this.notificationService.show('Login successful!', 'success');
        this.router.navigate(['/account/profile']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.notificationService.show(
          'Login failed. Please check your email and password.',
          'error'
        );
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage!: string;
  successMessage: any;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  onRegisterSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Register Form Submitted', form.value);

      this.accountService
        .register(
          form.value.firstName,
          form.value.lastName,
          form.value.email,
          form.value.password
        )
        .subscribe({
          next: (response) => {
            console.log('Registration successful:', response);
            this.notificationService.show(
              'Registration successful!',
              'success'
            );

            // Auto-login after registration
            this.accountService
              .login(form.value.email, form.value.password)
              .subscribe({
                next: (loginResponse) => {
                  console.log('Login successful:', loginResponse);
                  this.notificationService.show(
                    'Logged in successfully!',
                    'success'
                  );
                  this.router.navigate(['/account/profile']);
                },
                error: (loginError) => {
                  console.error('Login failed:', loginError);
                  this.notificationService.show(
                    'Registration successful, but automatic login failed. Please log in manually.',
                    'error'
                  );
                  this.router.navigate(['/account/login']);
                },
              });
          },
          error: (error) => {
            console.error('Registration failed:', error);
            this.notificationService.show(
              error.error?.message || 'Registration failed. Please try again.',
              'error'
            );
          },
        });
    } else {
      console.error('Form is invalid');
      this.notificationService.show(
        'Please fill out all fields correctly.',
        'error'
      );
    }
  }
}

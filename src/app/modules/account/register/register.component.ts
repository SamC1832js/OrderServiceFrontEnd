import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage!: string;
  successMessage: any;
  constructor(private accountService: AccountService, private router: Router) {}

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
            // Handle successful registration (e.g., show a success message)
            this.successMessage = response; // Display the plain text response

            // Optionally, automatically log the user in after successful registration
            this.accountService
              .login(form.value.email, form.value.password)
              .subscribe({
                next: (loginResponse) => {
                  console.log('Login successful:', loginResponse);
                  // Redirect or update UI as needed
                  this.router.navigate(['/dashboard']); // Redirect to dashboard
                },
                error: (loginError) => {
                  console.error('Login failed:', loginError);
                  this.errorMessage =
                    'Registration successful, but login failed. Please log in manually.';
                },
              });
          },
          error: (error) => {
            console.error('Registration failed:', error);
            this.errorMessage = 'Registration failed. Please try again.';
          },
        });
    } else {
      console.error('Form is invalid');
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }
}

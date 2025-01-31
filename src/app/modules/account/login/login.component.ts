import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {}

  onLoginSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.accountService.login(email, password).subscribe({
      next: (response) => {
        this.router.navigate(['/account/profile']);
        console.log('Login successful', response);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage =
          'Login failed. Please check your email and password.';
      },
    });
  }
}

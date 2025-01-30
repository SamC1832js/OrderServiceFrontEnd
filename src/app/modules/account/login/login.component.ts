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
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {}

  onLoginSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.accountService.login(email, password).subscribe({
      next: (response) => {
        this.router.navigate(['/account/profile']);
        console.log('Login successful', response);
        // Handle successful login (e.g., navigate to another page)
      },
      error: (error) => {
        console.error('Login failed', error);
        // Handle login error (e.g., show an error message)
      },
    });
  }
}

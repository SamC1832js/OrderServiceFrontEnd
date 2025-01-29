import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onLoginSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Login Form Submitted', form.value);
      // Add your login logic here
    }
  }
}

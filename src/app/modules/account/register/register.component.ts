import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onRegisterSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Register Form Submitted', form.value);
      // Add your registration logic here
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private accountService: AccountService, private router: Router) {}

  async ngOnInit() {
    this.isAuthenticated = await this.accountService.isAuthenticated();
  }

  async checkAuthentication() {
    this.isAuthenticated = await this.accountService.isAuthenticated();
  }

  async onLogout() {
    this.accountService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/account/login']);
  }
}

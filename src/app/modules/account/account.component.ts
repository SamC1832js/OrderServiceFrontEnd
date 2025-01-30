import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private accountService: AccountService) {}

  async ngOnInit() {
    this.isAuthenticated = await this.accountService.isAuthenticated();
  }
}

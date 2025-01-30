import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { User } from 'src/app/model/models';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user!: User;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.accountService
      .getProfile()
      .then((user) => {
        this.user = user;
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
        // 处理错误，例如显示错误信息给用户
      });
  }
}

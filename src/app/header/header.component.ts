import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/interfaces/user';
import {FakeLoginService} from '../shared/fake-login-service/fake-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _fakeLoginService: FakeLoginService) {
  }

  ngOnInit() {
  }

  get user(): User {
    return this._fakeLoginService.getUserLoggedIn();
  }
}

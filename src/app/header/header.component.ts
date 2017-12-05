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

  private _user: User;

  constructor(private _fakeLoginService: FakeLoginService) {
  }

  ngOnInit() {
  }

  get userLog(): User {
    return this._fakeLoginService.getUserLoggedIn();
  }

}

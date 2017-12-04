import {Component, Input, OnInit} from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  // private property to store user value
  private _user: User;

  constructor() { }

  get user(): User {
    return this._user;
  }

  @Input()
  set user(user: User) {
    this._user = user;
  }

  ngOnInit() {
  }
}

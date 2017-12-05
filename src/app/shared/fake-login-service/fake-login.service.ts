import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../user-service/user.service';

/**
 * (In french for explanations)
 * Service simulant une connexion côté frontend en renvoyant une entité User
 * supposé correspondante avec l'utilisateur connecté.
 */
@Injectable()
export class FakeLoginService {

  // Property value to store the supposed logged in user
  private _user: User;

  constructor(private _userService : UserService) {
    this._userService.fetch()
      .subscribe((users: User[]) =>
        this._user = users[Math.floor(Math.random() * users.length)]);
  }

  /**
   * Returns the supposed logged in user
   * @returns {User}
   */
  getUserLoggedIn(): User {
    return this._user;
  }

}

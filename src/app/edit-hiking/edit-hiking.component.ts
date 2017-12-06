import { Component, OnInit } from '@angular/core';
import {User} from '../shared/interfaces/user';
import {Hiking} from '../shared/interfaces/hiking';
import {HikingService} from '../shared/hiking-service/hiking.service';
import {Router} from "@angular/router/src";
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../shared/user-service/user.service';
import {FakeLoginService} from '../shared/fake-login-service/fake-login.service';

@Component({
  selector: 'app-edit-hiking',
  templateUrl: './edit-hiking.component.html',
  styleUrls: ['./edit-hiking.component.css']
})
export class EditHikingComponent implements OnInit {

  // Property to store a hiking value
  private _hiking: Hiking ;

  // Indicates if the current user is the guide for this hiking
  // therefore if he has the rights to modify it or not
  private _isGuide: boolean;

  constructor(private _hikingService: HikingService,
              private _route: ActivatedRoute,
              private _userService: UserService,
              private _fakeLoginService: FakeLoginService) {
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._hikingService.fetchOne(params['id']))
      .subscribe((hiking: Hiking) => {
        this._hiking = hiking;
        // set guide from hiking
        this._userService.fetchOne(this._hiking.guide_id)
          .subscribe((guide: User) =>
            this._isGuide = this._fakeLoginService.getUserLoggedIn().id === guide.id);
      });
  }

  get hiking(): Hiking {
    return this._hiking;
  }

  set hiking(value: Hiking) {
    this._hiking = value;
  }

  get isGuide(): boolean {
    return this._isGuide;
  }

  /**
   * Function to update the hiking
   *
   * @param hiking
   */
  update(hiking: Hiking) {
    console.log(hiking);
    this._hikingService.update(hiking)
      .subscribe((hik: Hiking) => this._hiking = hik);
  }
}

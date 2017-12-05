import { Component, OnInit } from '@angular/core';
import {Hiking} from '../shared/interfaces/hiking';
import {HikingService} from '../shared/hiking-service/hiking.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import {User} from '../shared/interfaces/user';
import {UserService} from '../shared/user-service/user.service';
import {FakeLoginService} from '../shared/fake-login-service/fake-login.service';

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.css']
})
export class HikingComponent implements OnInit {

  // Property to store a hiking value
  private _hiking: Hiking ;

  // Property to store the guide of the hiking value
  private _guide: User;

  // The number of remaining spot for this hiking
  private _nbRemainingSpot: number;

  // Indicates if the current logged in user is the guide of this hiking
  private _isGuide: boolean;

  // Indicates if the current logged in user is already signed in for this hiking
  private _isAlreadySignIn: boolean;

  constructor(private _hikingService: HikingService,
              private _route: ActivatedRoute,
              private _router: Router,
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
          .subscribe((guide: User) => this._guide = guide);
        this.updateHiking();
      });
  }

  /**
   * Updates the hiking values for the html
   */
  private updateHiking() {
    // calculating the number of remaining spots for this hiking
    this._nbRemainingSpot = this._hiking.personMaxNumber - this._hiking.hikers_id.length;

    const user_id = this._fakeLoginService.getUserLoggedIn().id;
    this._isAlreadySignIn = this._hiking.hikers_id.indexOf(user_id) > -1;
    this._isGuide = this._hiking.guide_id === user_id;
  }

  get hiking(): any {
    return this._hiking;
  }

  get guide(): User {
    return this._guide;
  }

  get nbRemainingSpot(): number {
    return this._nbRemainingSpot;
  }

  get isAlreadySignIn(): boolean {
    return this._isAlreadySignIn;
  }

  get isGuide(): boolean {
    return this._isGuide;
  }

  /**
   * Subscribe the user to this hiking
   * Refresh the hiking page after
   */
  subscribe() {
    const user_id = this._fakeLoginService.getUserLoggedIn().id;
    // if user isn't already sign in for this hiking and isn't the guide
    if (!this._isAlreadySignIn && !this._isGuide) {
      this._hiking.hikers_id.push(user_id);
      this._hikingService.update(this._hiking)
        .subscribe((hiking: Hiking) => this._hiking = this._hiking);
      this.updateHiking();
    }
  }

  /**
   * Unsubscribe the user to this hiking
   * Refresh the hiking page after
   */
  unsubscribe() {
    const user_id = this._fakeLoginService.getUserLoggedIn().id;
    // if user is already sign in for this hiking and isn't the guide
    if (this._isAlreadySignIn && !this._isGuide) {
      this._hiking.hikers_id = this._hiking.hikers_id
        .filter(hiker_id => hiker_id !== user_id);
      this._hikingService.update(this._hiking)
        .subscribe((hiking: Hiking) => this._hiking = this._hiking);
      this.updateHiking();
    }
  }

  /**
   * Route to the edit route of this hiking
   */
  goToEditRoute() {
    this._router.navigate(['/edit/hiking', this._hiking.id]);
  }
}

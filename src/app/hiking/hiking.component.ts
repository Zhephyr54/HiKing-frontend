import { Component, OnInit } from '@angular/core';
import {Hiking} from '../shared/interfaces/hiking';
import {HikingService} from '../shared/hiking-service/hiking.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import {User} from '../shared/interfaces/user';
import {UserService} from '../shared/user-service/user.service';

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

  constructor(private _hikingService: HikingService,
              private _route: ActivatedRoute,
              private _userService: UserService) {
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._hikingService.fetchOne(params['id']))
      .subscribe((hiking: Hiking) => {
        this._hiking = hiking;
        // calculating the number of remaining spots for this hiking
        this._nbRemainingSpot = this._hiking.personMaxNumber - this._hiking.hikers_id.length;
        // set guide from hiking
        this._userService.fetchOne(this._hiking.guide_id)
          .subscribe((guide: User) => this._guide = guide);
      });
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


  /**
   * Sign up the user to this hiking
   * Refresh the hiking page after
   */
  signUp() {
    // TODO
  }
}

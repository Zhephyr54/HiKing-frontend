import { Component, OnInit } from '@angular/core';
import {Hiking} from '../shared/interfaces/hiking';
import {HikingService} from '../shared/hiking-service/hiking.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.css']
})
export class HikingComponent implements OnInit {

  // Property to store a hiking value
  private _hiking: Hiking ;

  // The number of remaining spot for this hiking
  private _nbRemainingSpot: number;

  constructor(private _hikingService: HikingService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._hikingService.fetchOne(params['id']))
      .subscribe((hiking: Hiking) => {
        this._hiking = hiking;
        // calculating the number of remaining spots for this hiking
        this._nbRemainingSpot = this._hiking.personMaxNumber - this._hiking.persons.length;
      });
  }

  get hiking(): any {
    return this._hiking;
  }

  set hiking(value: any) {
    this._hiking = value;
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

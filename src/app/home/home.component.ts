import {Component, Input, OnInit} from '@angular/core';
import { Hiking } from '../shared/interfaces/hiking';
import {User} from '../shared/interfaces/user';
import {HikingService} from '../shared/hiking-service/hiking.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _hikings: Hiking[];

  private _model: any;

  constructor(private _hikingService: HikingService, private _route: ActivatedRoute, private _router: Router) {
  }

  get hikings(): Hiking[] {
    return this._hikings;
  }


  @Input()
  set model(model: any) {
    this._model = model;
  }

  /**
   * Returns private property _model
   *
   * @returns {Hiking}
   */
  get model(): any {
    return this._model;
  }


  ngOnInit() {
    this._hikingService
      .fetch()
      .subscribe((hiking: Hiking[]) => this._hikings = hiking.slice(0, 6) );
  }

  /**
   *
   * this._peopleService
   .fetch()
   .subscribe((people: any[]) => this._people = people);
   */

}

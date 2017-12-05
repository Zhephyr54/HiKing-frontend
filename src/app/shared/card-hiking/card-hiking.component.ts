import {Component, Input, OnInit} from '@angular/core';
import {Hiking} from '../interfaces/hiking';
import {ActivatedRoute, Router} from '@angular/router';
import {HikingService} from '../hiking-service/hiking.service';

@Component({
  selector: 'app-card-hiking',
  templateUrl: './card-hiking.component.html',
  styleUrls: ['./card-hiking.component.css']
})
export class CardHikingComponent implements OnInit {

  // private property to store hiking value
  private _hiking: Hiking;

  constructor(private _hikingService: HikingService, private _route: ActivatedRoute, private _router: Router) {  }

  get hiking(): Hiking {
    return this._hiking;
  }

  @Input()
  set hiking(hiking: Hiking) {
    this._hiking = hiking;
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._hikingService.fetchOne(params['id']))
      .subscribe((hiking: Hiking) => {
        this._hiking = hiking;
      });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Hiking} from '../interfaces/hiking';


@Component({
  selector: 'app-card-hiking',
  templateUrl: './card-hiking.component.html',
  styleUrls: ['./card-hiking.component.css']
})
export class CardHikingComponent implements OnInit {

  // private property to store hiking value
  private _hiking: Hiking;

  constructor() { }

  get hiking(): Hiking {
    return this._hiking;
  }

  @Input()
  set hiking(hiking: Hiking) {
    this._hiking = hiking;
  }

  ngOnInit() {
  }

  showHiking() {}

}

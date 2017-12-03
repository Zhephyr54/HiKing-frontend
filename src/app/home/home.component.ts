import {Component, Input, OnInit} from '@angular/core';
import {Hiking} from '../../interfaces/hiking';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _hikings: Hiking[];

  private _model: any;

  constructor() {
    const user: User = {
      email: 'osef',
      firstname: 'osef',
      lastname: 'osef'
    };
    this._hikings = [{
      date: '01-12-17',
      guide: user,
      startLocalization: 'Nancy',
      endLocalization: 'Nancy',
      duration: '2h',
      distance: 15,
      complexity: 'Facile',
      description: 'On va s\'éclater ! Super rando en prévision :p.',
      personMinNumber: 5,
      personMaxNumber: 10,
      persons: [user, user, user],
      price: 20
    },
      {
        date: '02-12-17',
        guide: user,
        startLocalization: 'Lyon',
        endLocalization: 'Lyon',
        duration: '2h',
        distance: 30,
        complexity: 'Facile',
        description: 'On va s\'éclater ! Super rando en prévision :p.',
        personMinNumber: 5,
        personMaxNumber: 10,
        persons: [user, user, user],
        price: 30
      }, {
        date: '03-12-17',
        guide: user,
        startLocalization: 'Metz',
        endLocalization: 'Metz',
        duration: '2h',
        distance: 25,
        complexity: 'Facile',
        description: 'On va s\'éclater ! Super rando en prévision :p.',
        personMinNumber: 5,
        personMaxNumber: 10,
        persons: [user, user, user],
        price: 10
      }
    ];
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
   * @returns {any}
   */
  get model(): any {
    return this._model;
  }


  ngOnInit() {
  }

}

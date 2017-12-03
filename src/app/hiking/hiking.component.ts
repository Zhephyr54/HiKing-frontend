import { Component, OnInit } from '@angular/core';
import {Hiking} from '../shared/interfaces/hiking';
import {User} from '../shared/interfaces/user';

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.css']
})
export class HikingComponent implements OnInit {

  // Property to store a hiking value
  private _hiking: Hiking;

  // The number of remaining spot for this hiking
  private _nbRemainingSpot: number;

  constructor() {
    // test
    const user: User = {
      email: 'osef',
      firstname: 'osef',
      lastname: 'osef'
    };
    this._hiking = {
      date: '02-08-17',
      guide: user,
      startLocalization: 'Nancy',
      endLocalization: 'Nancy',
      duration: '2h',
      distance: 20,
      complexity: 'Facile',
      description: 'On va s\'éclater ! Super rando en prévision :p.',
      personMinNumber: 5,
      personMaxNumber: 10,
      persons: [user, user, user],
      priceType: 'Fixe',
      price: 15
    };

    // calculating the number of remaining spots for this hiking
    this._nbRemainingSpot = this._hiking.personMaxNumber - this._hiking.persons.length;
    // default photo if not specified
    this._hiking.photo = this._hiking.photo ? this._hiking.photo : 'https://randomuser.me/api/portraits/lego/6.jpg';
  }

  ngOnInit() {
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

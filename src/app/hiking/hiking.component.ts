import { Component, OnInit } from '@angular/core';
import {Hiking} from '../../interfaces/hiking';
import {User} from '../../interfaces/user';

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
      price: 15
    };

    this._nbRemainingSpot = this._hiking.personMaxNumber - this._hiking.persons.length;

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

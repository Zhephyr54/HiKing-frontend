import { Component, OnInit } from '@angular/core';
import {User} from '../shared/interfaces/user';
import {Hiking} from '../shared/interfaces/hiking';
import {HikingService} from '../shared/hiking-service/hiking.service';

@Component({
  selector: 'app-edit-hiking',
  templateUrl: './edit-hiking.component.html',
  styleUrls: ['./edit-hiking.component.css']
})
export class EditHikingComponent implements OnInit {

  private _hiking: Hiking;

  constructor(private _hikingService: HikingService) {
    const user: User = {
      email: 'osef',
      firstname: 'osef',
      lastname: 'osef',
      address: 'osef'
    };
    this._hiking = {
        id: '1',
        date: '02-08-17',
        guide: user,
        startLocalization: 'Nancy',
        endLocalization: 'Paris',
        duration: '2 heures',
        distance: 20,
        complexity: 'Expert',
        description: 'On va s\'éclater ! Super rando en prévision :p.',
        personMinNumber: 5,
        personMaxNumber: 10,
        persons: [user, user, user],
        price: 15
      };
  }

  ngOnInit() {
  }

  get hiking(): Hiking {
    return this._hiking;
  }

  set hiking(value: Hiking) {
    this._hiking = value;
  }

  /**
   * Function to update the hiking
   *
   * @param hiking
   */
  update(hiking: Hiking) {
    console.log(hiking);
    this._hikingService.update(hiking)
      .subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import {Hiking} from '../shared/interfaces/hiking';
import {HikingService} from '../shared/hiking-service/hiking.service';

@Component({
  selector: 'app-create-hiking',
  templateUrl: './create-hiking.component.html',
  styleUrls: ['./create-hiking.component.css']
})
export class CreateHikingComponent implements OnInit {

  constructor(private _hikingService: HikingService) { }

  ngOnInit() {
  }

  create(hiking: Hiking) {
    this._hikingService.create(hiking)
      .subscribe();
  }

}

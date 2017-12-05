import { Component, OnInit } from '@angular/core';
import {Hiking} from '../shared/interfaces/hiking';
import {HikingService} from '../shared/hiking-service/hiking.service';
import {Router} from '@angular/router';
import {FakeLoginService} from "../shared/fake-login-service/fake-login.service";

@Component({
  selector: 'app-create-hiking',
  templateUrl: './create-hiking.component.html',
  styleUrls: ['./create-hiking.component.css']
})
export class CreateHikingComponent implements OnInit {

  constructor(private _hikingService: HikingService,
              private _router: Router,
              private _fakeLoginService: FakeLoginService) { }

  ngOnInit() {
  }

  create(hiking: Hiking) {
    delete hiking.id; // clean id as we are creating a new hiking
    hiking.guide_id = this._fakeLoginService.getUserLoggedIn().id;
    this._hikingService.create(hiking)
      .subscribe((hik: Hiking) =>
        this._router.navigate(['/hiking', hik.id]));
  }

}

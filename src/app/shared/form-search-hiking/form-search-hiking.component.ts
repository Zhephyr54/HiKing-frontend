import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-search-hiking',
  templateUrl: './form-search-hiking.component.html',
  styleUrls: ['./form-search-hiking.component.css']
})
export class FormSearchHikingComponent implements OnInit {
  form;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      localisation: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      datestart: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
  }

  onSubmit = function (data) {
    console.log(data);
  };
}

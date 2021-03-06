import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Hiking} from '../interfaces/hiking';
import {CustomValidators} from './custom-validators';
import {isUndefined} from 'util';

@Component({
  selector: 'app-form-hiking',
  templateUrl: './form-hiking.component.html',
  styleUrls: ['./form-hiking.component.css']
})
export class FormHikingComponent implements OnInit, OnChanges {

  // property to store update mode flag
  private _isUpdateMode: boolean;

  // property to store model value
  private _model: Hiking;

  // property to store cancel$ value
  private _cancel$: EventEmitter<any>;

  // property to store submit$ value
  private _submit$: EventEmitter<any>;

  // property to store form value
  private _form: FormGroup;

  // array containing the different possible values for complexity
  private _complexityValues: string[] = [
    'Débutant',
    'Confirmé',
    'Expert'
  ];

  // array containing the different possible values for priceType
  private _priceTypeValues: string[] = [
    'Libre',
    'Fixe'
  ];

  constructor() {
    this._submit$ = new EventEmitter();
    this._cancel$ = new EventEmitter();
    this._form = this._buildForm();
  }

  @Input()
  set model(hikingModel: any) {
    this._model = hikingModel;
  }

  get model(): any {
    return this._model;
  }

  get form(): FormGroup {
    return this._form;
  }

  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  get priceTypeValues(): string[] {
    return this._priceTypeValues;
  }

  get complexityValues(): string[] {
    return this._complexityValues;
  }


  /**
   * Returns private property _submit$
   *
   * @returns {EventEmitter<Hiking>}
   */
  @Output('submit')
  get submit$(): EventEmitter<any> {
    return this._submit$;
  }

  ngOnInit() {
  }

  /**
   * Function to handle component update
   *
   * @param record
   */
  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
      this._model = record.model.currentValue;
      // if the price is set to nothing then the price typing is free
      this._model['priceType'] = this._model.price ? 'Fixe' : 'Libre';
      this._isUpdateMode = true;
      this._form.patchValue(this._model);
    } else {
      this._isUpdateMode = false;
    }
  }

  /**
   * Function to emit event to submit form and hiking
   */
  submit(form: any) {
    // if the price typing is set at free then clean the price
    if (form.priceType === 'Libre') {
      delete form.price;
    }
    delete form.priceType;
    this._submit$.emit(form);
  }

  /**
   * Function to build our form
   *
   * @returns {FormGroup}
   *
   * @private
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      guide_id: new FormControl(''),
      title: new FormControl(''),
      photo: new FormControl('https://media.deseretdigital.com/file/2187773984.jpeg'),
      date: new FormControl('', Validators.required),
      startLocalization: new FormControl('', Validators.required),
      endLocalization: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      distance: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1), Validators.pattern('[0-9]+')
      ])),
      complexity: new FormControl('', Validators.required),
      description: new FormControl(''),
      personMinNumber: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1), Validators.pattern('[0-9]+')
      ])),
      personMaxNumber: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1)
      ])),
      priceType: new FormControl('', Validators.required),
      price: new FormControl('')
    }, Validators.compose([
      CustomValidators.priceConformToPriceType, CustomValidators.personNumbersCoherent
    ]));
  }

}

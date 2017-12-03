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
export class FormHikingComponent implements OnInit, OnChanges{

  // TODO Revoir le binding + message d'erreurs html

  // property to store update mode flag
  private _isUpdateMode: boolean;

  // property to store model value
  private _hikingModel: Hiking;

  // property to store cancel$ value
  private _cancel$: EventEmitter<any>;

  // property to store submit$ value
  private _submit$: EventEmitter<any>;

  // property to store form value
  private _form: FormGroup;

  // property binded to the choice of user concerning the hiking pricing (free or fixed)
  private _priceType;

  constructor() {
    this._submit$ = new EventEmitter();
    this._cancel$ = new EventEmitter();
    this._form = this._buildForm();
  }

  get priceType() {
    return this._priceType;
  }

  set priceType(value) {
    this._priceType = value;
  }

  @Input()
  set hikingModel(hikingModel: Hiking) {
    this._hikingModel = hikingModel;
  }

  get hikingModel(): Hiking {
    return this._hikingModel;
  }

  get form(): FormGroup {
    return this._form;
  }

  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  /**
   * Returns private property _cancel$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('cancel')
  get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  /**
   * Returns private property _submit$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('submit')
  get submit$(): EventEmitter<any> {
    return this._submit$;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  /**
   * Function to emit event to cancel process
   */
  cancel() {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and person
   */
  submit(person: any) {
    this._submit$.emit(person);
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
      title: new FormControl(''),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
      startLocalization: new FormControl('', Validators.required),
      endLocalization: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1), Validators.pattern('\\d+')
      ])),
      distance: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1), Validators.pattern('\\d+')
      ])),
      complexity: new FormControl('', Validators.required),
      description: new FormControl(''),
      minPerson: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1), Validators.pattern('\\d+')
      ])),
      maxPerson: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1), Validators.pattern('\\d+')
      ])),
      priceType: new FormControl('', Validators.required),
      price: new FormControl('', CustomValidators.priceConformToPriceType(isUndefined(this.priceType) ? ' ' : this.priceType))
    });
  }

}

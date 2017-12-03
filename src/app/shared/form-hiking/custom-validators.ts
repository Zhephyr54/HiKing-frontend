import {FormControl, Validators} from '@angular/forms';
import {isUndefined} from 'util';

export class CustomValidators {


  // TODO Revoir le validateur custom

  /**
   * Function to control the price
   *
   * @param control
   *
   * @returns {{googleEmail: boolean}}
   */
  /*static priceConformToPriceType(control: FormControl) {
    const group = control.parent;

    // price regex
    const regex = /^[1-9][0-9]*(,[0-9]{2})?$/

    return isUndefined(group) || (group.controls['priceType'].value === 'fixed' && !regex.test(control.value))
      ? { priceConformToPriceType: true } : null;
  }*/

  static priceConformToPriceType = (priceType: string) => {
    return (control: FormControl) => {
      // price regex
      const regex = /^[1-9][0-9]*(,[0-9]{2})?$/;

      console.log(priceType);
      return priceType !== 'fixed' || (priceType === 'fixed' && regex.test(control.value)) ?
        { priceConformToPriceType: false } : {
        priceConformToPriceType: true
      };
    };
  }
}

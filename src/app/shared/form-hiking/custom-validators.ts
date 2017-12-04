import {FormControl} from '@angular/forms';

export class CustomValidators {


  // TODO Revoir le validateur custom

  /**
   * Function to control that the price is conform to the priceType
   *
   * @param control
   *
   * @returns {{priceConformToPriceType: boolean}}
   */
  static priceConformToPriceType(control: FormControl) {
    // price regex
    const regex = /^[1-9][0-9]*(,[0-9]{2})?$/

    return control.value.priceType === 'Libre' || (control.value.priceType === 'Fixe' && regex.test(control.value.price)) ? null : {
      priceConformToPriceType: true
    };
  }

  /**
   * Function to control that the maximum number of persons is superior or equal
   * to the minimum number of persons
   *
   * @param {FormControl} control
   * @returns {{personNumbersCoherent: boolean}}
   */
  static personNumbersCoherent(control: FormControl) {
    return control.value.personMaxNumber >= control.value.personMinNumber ? null : {
      personNumbersCoherent: true
    };
  }
}

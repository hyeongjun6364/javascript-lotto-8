import { LOTTO_CONSTANTS } from '../constants.js';

class Validator {
  static isDuplicated(array) {
    return new Set(array).size !== array.length;
  }

  static isOutOfRange(
    number,
    min = LOTTO_CONSTANTS.minLottoNumber,
    max = LOTTO_CONSTANTS.maxLottoNumber,
  ) {
    return Number(number) < min || Number(number) > max;
  }

  static isNotNumber(value) {
    return Number.isNaN(Number(value));
  }

  static isValidLength(array) {
    return array.length === LOTTO_CONSTANTS.length;
  }

  static isEmpty(value) {
    return value.trim() === '';
  }
}

export default Validator;

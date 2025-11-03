import { ERROR_MESSAGES } from '../constants.js';
import Validator from '../util/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validator.isValidLength(numbers)) throw new Error(ERROR_MESSAGES.lotto.notLength6);
    if (Validator.isDuplicated(numbers)) throw new Error(ERROR_MESSAGES.lotto.notDuplicate);
    if (numbers.some((num) => Validator.isOutOfRange(num)))
      throw new Error(ERROR_MESSAGES.lotto.notInRange);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;

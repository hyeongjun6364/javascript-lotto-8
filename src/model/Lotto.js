import { ERROR_MESSAGES } from '../constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.lotto.notLength6);
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.lotto.notDuplicate);
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error(ERROR_MESSAGES.lotto.notInRange);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;

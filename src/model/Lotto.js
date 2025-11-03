import { ERROR_MESSAGES, LOTTO_CONSTANTS } from '../constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numberSet = new Set(numbers);
    if (numbers.length !== LOTTO_CONSTANTS.length) throw new Error(ERROR_MESSAGES.lotto.notLength6);
    if (numberSet.size !== numbers.length) throw new Error(ERROR_MESSAGES.lotto.notDuplicate);
    if (
      numbers.some(
        (num) => num < LOTTO_CONSTANTS.minLottoNumber || num > LOTTO_CONSTANTS.maxLottoNumber,
      )
    )
      throw new Error(ERROR_MESSAGES.lotto.notInRange);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;

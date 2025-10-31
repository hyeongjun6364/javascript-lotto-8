import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES, INPUT_MESSAGES } from './constants.js';
class InputView {
  static async userInput(message) {
    return await Console.readLineAsync(message);
  }

  static async requestMoneyInput() {
    try {
      const money = await this.userInput(INPUT_MESSAGES.purchaseInput);
      this.validateMoneyInput(money);
      return money;
    } catch (error) {
      Console.print(error.message);
      return this.requestMoneyInput();
    }
  }

  static validateMoneyInput(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error(ERROR_MESSAGES.invalidMoneyNumber);
    }
    if (money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.invalidMoneyUnit);
    }
    if (money.length === 0) {
      throw new Error(ERROR_MESSAGES.emptyMoneyInput);
    }
    if (money.trim() === '') {
      throw new Error(ERROR_MESSAGES.blankMoneyInput);
    }
  }
}

export default InputView;

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

  static async requestWinningNumbersInput() {
    try {
      const numbers = await this.userInput(INPUT_MESSAGES.winningNumbersInput);
      this.validateWinningNumbersInput(numbers);
      return numbers;
    } catch (error) {
      Console.print(error.message);
      return this.requestWinningNumbersInput();
    }
  }

  static validateMoneyInput(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error(ERROR_MESSAGES.money.invalidMoneyNumber);
    }
    if (money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.money.invalidMoneyUnit);
    }
    if (money.length === 0) {
      throw new Error(ERROR_MESSAGES.money.emptyMoneyInput);
    }
    if (money.trim() === '') {
      throw new Error(ERROR_MESSAGES.money.blankMoneyInput);
    }
  }

  static validateWinningNumbersInput(numbers) {
    const parsedNumbers = numbers.split(',').map((num) => num.trim());
    const isdueplicated = new Set(parsedNumbers).size !== parsedNumbers.length;
    const isInvalidRange = parsedNumbers.some(
      (number) => Number(number) < 1 || Number(number) > 45,
    );
    const hasEmpty = parsedNumbers.some((number) => number.trim() === '');
    const hasOtherString = !/^[\d,\s]+$/.test(numbers);
    if (parsedNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.winningNumbers.invalidCount);
    }
    if (parsedNumbers.some((num) => Number.isNaN(Number(num)))) {
      throw new Error(ERROR_MESSAGES.winningNumbers.notNumber);
    }
    if (isdueplicated) {
      throw new Error(ERROR_MESSAGES.winningNumbers.notDuplicated);
    }
    if (isInvalidRange) {
      throw new Error(ERROR_MESSAGES.winningNumbers.invalidRange);
    }
    if (hasEmpty) {
      throw new Error(ERROR_MESSAGES.winningNumbers.notEmpty);
    }
    if (hasOtherString) {
      throw new Error(ERROR_MESSAGES.winningNumbers.invalidInput);
    }
  }
}

export default InputView;

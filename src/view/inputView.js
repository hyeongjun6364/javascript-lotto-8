import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES, LOTTO_CONSTANTS } from '../constants.js';
import Parser from '../util/parser.js';

const INPUT_MESSAGES = Object.freeze({
  purchaseInput: '구입금액을 입력해 주세요.\n',
  winningNumbersInput: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumberInput: '\n보너스 번호를 입력해 주세요.\n',
});

class InputView {
  winningNumbers;

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
      this.winningNumbers = numbers;
      return numbers;
    } catch (error) {
      Console.print(error.message);
      return this.requestWinningNumbersInput();
    }
  }

  static async requestBonusNumberInput() {
    try {
      const number = await this.userInput(INPUT_MESSAGES.bonusNumberInput);
      this.validateBonusNumberInput(number, this.winningNumbers);
      return number;
    } catch (error) {
      Console.print(error.message);
      return this.requestBonusNumberInput();
    }
  }

  static validateMoneyInput(money) {
    if (Number.isNaN(Number(money))) throw new Error(ERROR_MESSAGES.money.invalidMoneyNumber);

    if (money % LOTTO_CONSTANTS.price !== 0) throw new Error(ERROR_MESSAGES.money.invalidMoneyUnit);

    if (money.length === 0) throw new Error(ERROR_MESSAGES.money.emptyMoneyInput);

    if (money.trim() === '') throw new Error(ERROR_MESSAGES.money.blankMoneyInput);
  }

  static validateWinningNumbersInput(numbers) {
    const parsedNumbers = Parser(numbers);
    const isdueplicated = new Set(parsedNumbers).size !== parsedNumbers.length;
    const isInvalidRange = parsedNumbers.some(
      (number) =>
        Number(number) < LOTTO_CONSTANTS.minLottoNumber ||
        Number(number) > LOTTO_CONSTANTS.maxLottoNumber,
    );
    const hasEmpty = parsedNumbers.some((number) => number.trim() === '');
    const hasOtherString = !/^[\d,\s]+$/.test(numbers);
    if (parsedNumbers.length !== LOTTO_CONSTANTS.length)
      throw new Error(ERROR_MESSAGES.winningNumbers.invalidCount);
    if (parsedNumbers.some((num) => Number.isNaN(Number(num))))
      throw new Error(ERROR_MESSAGES.winningNumbers.notNumber);
    if (isdueplicated) throw new Error(ERROR_MESSAGES.winningNumbers.notDuplicated);
    if (isInvalidRange) throw new Error(ERROR_MESSAGES.winningNumbers.invalidRange);
    if (hasEmpty) throw new Error(ERROR_MESSAGES.winningNumbers.notEmpty);
    if (hasOtherString) throw new Error(ERROR_MESSAGES.winningNumbers.invalidInput);
  }

  static validateBonusNumberInput(number) {
    const parsedNumbers = Parser(this.winningNumbers);
    const isdueplicated = parsedNumbers.includes(number.trim());
    if (Number.isNaN(Number(number))) throw new Error(ERROR_MESSAGES.bonusNumber.notNumber);

    if (
      Number(number) < LOTTO_CONSTANTS.minLottoNumber ||
      Number(number) > LOTTO_CONSTANTS.maxLottoNumber
    )
      throw new Error(ERROR_MESSAGES.bonusNumber.invalidRange);

    if (number.trim() === '') throw new Error(ERROR_MESSAGES.bonusNumber.notEmpty);

    if (isdueplicated) throw new Error(ERROR_MESSAGES.bonusNumber.notDuplicated);
  }
}

export default InputView;

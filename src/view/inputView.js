import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES, LOTTO_CONSTANTS } from '../constants.js';
import Parser from '../util/parser.js';
import Validator from '../util/validator.js';

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
    if (Validator.isNotNumber(money)) throw new Error(ERROR_MESSAGES.money.invalidMoneyNumber);
    if (money % LOTTO_CONSTANTS.price !== 0) throw new Error(ERROR_MESSAGES.money.invalidMoneyUnit);
    if (money.length === 0) throw new Error(ERROR_MESSAGES.money.emptyMoneyInput);
    if (Validator.isEmpty(money)) throw new Error(ERROR_MESSAGES.money.blankMoneyInput);
  }

  static validateWinningNumbersInput(numbers) {
    const parsedNumbers = Parser(numbers);
    const isInvalidRange = parsedNumbers.some((number) => Validator.isOutOfRange(number));
    const hasEmpty = parsedNumbers.some((number) => Validator.isEmpty(number));
    const hasOtherString = !/^[\d,\s]+$/.test(numbers);

    if (!Validator.isValidLength(parsedNumbers))
      throw new Error(ERROR_MESSAGES.winningNumbers.invalidCount);
    if (parsedNumbers.some((num) => Validator.isNotNumber(num)))
      throw new Error(ERROR_MESSAGES.winningNumbers.notNumber);
    if (Validator.isDuplicated(parsedNumbers))
      throw new Error(ERROR_MESSAGES.winningNumbers.notDuplicated);
    if (isInvalidRange) throw new Error(ERROR_MESSAGES.winningNumbers.invalidRange);
    if (hasEmpty) throw new Error(ERROR_MESSAGES.winningNumbers.notEmpty);
    if (hasOtherString) throw new Error(ERROR_MESSAGES.winningNumbers.invalidInput);
  }

  static validateBonusNumberInput(number) {
    const parsedNumbers = Parser(this.winningNumbers);
    const isduplicated = parsedNumbers.includes(number.trim());

    if (Validator.isNotNumber(number)) throw new Error(ERROR_MESSAGES.bonusNumber.notNumber);
    if (Validator.isOutOfRange(number)) throw new Error(ERROR_MESSAGES.bonusNumber.invalidRange);
    if (Validator.isEmpty(number)) throw new Error(ERROR_MESSAGES.bonusNumber.notEmpty);
    if (isduplicated) throw new Error(ERROR_MESSAGES.bonusNumber.notDuplicated);
  }
}

export default InputView;

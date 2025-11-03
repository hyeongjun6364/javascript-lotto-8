import Parser from '../util/parser.js';

class WinningNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#winningNumbers = this.parseWinningNumbers(numbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  parseWinningNumbers(numbers) {
    const parsedNumbers = Parser(numbers);
    return parsedNumbers.map(Number);
  }

  getNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}
export default WinningNumbers;

class WinningNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#winningNumbers = this.parseWinningNumbers(numbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  parseWinningNumbers(numbers) {
    return numbers.split(',').map((num) => Number(num.trim()));
  }

  getNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}
export default WinningNumbers;

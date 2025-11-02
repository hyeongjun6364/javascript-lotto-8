import { LOTTO_CONSTANTS, RANK_INFO } from '../constants.js';

class LottoResult {
  #rankCounts;
  #winningNumbers;
  #lottos;
  #bonusNumber;
  #income;

  constructor(lottos, winningNumbers) {
    this.#winningNumbers = winningNumbers.getNumbers();
    this.#lottos = lottos;
    this.#bonusNumber = winningNumbers.getBonusNumber();
    this.#setRankCounts();
    this.#income = 0;
  }

  #setRankCounts() {
    let rankCountMap = new Map();
    for (let i = 0; i < LOTTO_CONSTANTS.rank; i++) {
      rankCountMap.set(i + 1, 0);
    }
    this.#rankCounts = rankCountMap;
  }

  updateRank() {
    this.#lottos.forEach((lotto) => {
      const matchedWinningNumbers = this.getMatchedWinningNumbers(lotto);
      const matchBonusNumber = this.getMatchedBonusNumber(lotto);
      const matchCount = matchedWinningNumbers.length;

      if (matchCount === LOTTO_CONSTANTS.length)
        this.#rankCounts.set(1, this.#rankCounts.get(1) + 1);
      else if (matchCount === 5 && matchBonusNumber)
        this.#rankCounts.set(2, this.#rankCounts.get(2) + 1);
      else if (matchCount >= 3 && matchCount <= 5)
        this.#rankCounts.set(8 - matchCount, this.#rankCounts.get(8 - matchCount) + 1);
    });
  }

  getMatchedWinningNumbers(lotto) {
    return this.#winningNumbers.filter((winningNumber) =>
      lotto.getNumbers().includes(winningNumber),
    );
  }

  getMatchedBonusNumber(lotto) {
    return lotto.getNumbers().includes(this.#bonusNumber);
  }

  getRankCounts() {
    return this.#rankCounts;
  }

  calculateIncome() {
    this.getRankCounts().forEach((count, rank) => {
      RANK_INFO.find((rankInfo) => {
        if (rankInfo.rank === rank) this.#income += count * rankInfo.prize;
      });
    });
  }

  calculateIncomeRate(money) {
    this.calculateIncome();
    const incomeRate = ((this.#income / money) * 100).toFixed(1);
    return incomeRate;
  }

  getIncomeRate() {
    return this.#income;
  }
}

export default LottoResult;

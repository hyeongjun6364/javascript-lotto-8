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

  calculateRank() {
    this.#lottos.forEach((lotto) => {
      const matchedNumbers = this.#winningNumbers.filter((winningNumber) =>
        lotto.getNumbers().includes(winningNumber),
      );
      const matchBonusNumber = lotto.getNumbers().includes(this.#bonusNumber);
      const matchCount = matchedNumbers.length;

      if (matchCount === LOTTO_CONSTANTS.length)
        this.#rankCounts.set(1, this.#rankCounts.get(1) + 1);
      else if (matchCount === 5 && matchBonusNumber)
        this.#rankCounts.set(2, this.#rankCounts.get(2) + 1);
      else if (matchCount >= 3 && matchCount <= 5)
        this.#rankCounts.set(8 - matchCount, this.#rankCounts.get(8 - matchCount) + 1);
    });
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

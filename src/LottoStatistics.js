class LottoStatistics {
  #rankCounts;
  #winningNumbers;
  #lottos;
  #bonusNumber;

  constructor(lottos, winningNumbers) {
    this.#winningNumbers = winningNumbers.getNumbers();
    this.#lottos = lottos;
    this.#bonusNumber = winningNumbers.getBonusNumber();
    this.#setRankCounts();
  }

  #setRankCounts() {
    let rankCountMap = new Map();
    for (let i = 0; i < 5; i++) {
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
      if (matchCount === 6) this.#rankCounts.set(1, this.#rankCounts.get(1) + 1);
      else if (matchCount === 5 && matchBonusNumber)
        this.#rankCounts.set(2, this.#rankCounts.get(2) + 1);
      else if (matchCount >= 3 && matchCount <= 5)
        this.#rankCounts.set(8 - matchCount, this.#rankCounts.get(8 - matchCount) + 1);
    });
  }

  getRankCounts() {
    return this.#rankCounts;
  }
}

export default LottoStatistics;

class LottoStatistics {
  #rankCounts;
  #winningNumbers;
  #lottos;
  #bonusNumber;

  constructor(lottos, winningNumbers, lottos) {
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

  getRankCounts() {
    return this.#rankCounts;
  }
}

export default LottoStatistics;

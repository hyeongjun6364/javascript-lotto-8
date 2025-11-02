import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES, RANK_INFO } from '../constants.js';

class OutputView {
  static printMessage(message) {
    Console.print(message);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static printWinningResult(rankCounts) {
    Console.print(OUTPUT_MESSAGES.winningStatisticsTitle);

    const sortedKey = Array.from(rankCounts.keys()).sort((a, b) => b - a);
    sortedKey.forEach((rank) => {
      const { text, prizeText } = RANK_INFO.find((rankInfo) => rankInfo.rank === rank);
      Console.print(OUTPUT_MESSAGES.winningResultMessage(text, rankCounts.get(rank), prizeText));
    });
  }

  static printIncomeRate(rate) {
    Console.print(OUTPUT_MESSAGES.totalIncomeRate(rate));
  }
}

export default OutputView;

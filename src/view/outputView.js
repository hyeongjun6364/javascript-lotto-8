import { Console } from '@woowacourse/mission-utils';
import { RANK_INFO } from '../constants.js';

const OUTPUT_MESSAGES = Object.freeze({
  purchaseLottoCount: (count) => `\n${count}개를 구매했습니다.`,
  winningStatisticsTitle: '\n당첨 통계\n---',
  winningResultMessage: (rank, count, prize) => `${rank} (${prize}원) - ${count}개`,
  totalIncomeRate: (rate) => `총 수익률은 ${rate}%입니다.`,
});
class OutputView {
  static printLottoCount(lottoCount) {
    Console.print(OUTPUT_MESSAGES.purchaseLottoCount(lottoCount));
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

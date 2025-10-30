export const INPUT_MESSAGES = Object.freeze({
  purchaseInput: '구입금액을 입력해 주세요.\n',
  winningNumbersInput: '당첨 번호를 입력해 주세요.\n',
  bonusNumberInput: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  purchaseLottoCount: (count) => `\n${count}개를 구매했습니다.`,
  winningStatistics: '\n당첨 통계\n---',
  winningResultMessage: (rank, count, prize) => `${rank}개 일치 (${prize}원) - ${count}개`,
  totalEarningRate: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const LOTTO_PRICE = 1000;

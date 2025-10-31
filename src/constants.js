export const INPUT_MESSAGES = Object.freeze({
  purchaseInput: '구입금액을 입력해 주세요.\n',
  winningNumbersInput: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumberInput: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  purchaseLottoCount: (count) => `\n${count}개를 구매했습니다.`,
  winningStatisticsTitle: '\n당첨 통계\n---',
  winningResultMessage: (rank, count, prize) => `${rank} (${prize}원) - ${count}개`,
  totalIncomeRate: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const LOTTO_PRICE = 1000;

export const RANK_INFO = Object.freeze([
  { rank: 1, text: '6개 일치', prize: 2000000000, prizeText: '2,000,000,000' },
  { rank: 2, text: '5개 일치, 보너스 볼 일치', prize: 30000000, prizeText: '30,000,000' },
  { rank: 3, text: '5개 일치', prize: 1500000, prizeText: '1,500,000' },
  { rank: 4, text: '4개 일치', prize: 50000, prizeText: '50,000' },
  { rank: 5, text: '3개 일치', prize: 5000, prizeText: '5,000' },
]);

export const ERROR_MESSAGES = Object.freeze({
  invalidMoneyNumber: `${ERROR_PREFIX} 구입금액은 숫자여야 합니다.`,
  invalidMoneyUnit: `${ERROR_PREFIX} 구입금액은 1000원 단위의 숫자여야 합니다.`,
  emptyMoneyInput: `${ERROR_PREFIX} 구입금액을 입력해주세요.`,
  blankMoneyInput: `${ERROR_PREFIX} 구입금액은 공백만으로 이루어질 수 없습니다.`,
});

export const ERROR_PREFIX = '[ERROR] ';

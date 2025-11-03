export const LOTTO_CONSTANTS = Object.freeze({
  price: 1000,
  minLottoNumber: 1,
  maxLottoNumber: 45,
  length: 6,
  rank: 5,
});

export const RANK_INFO = Object.freeze([
  { rank: 1, text: '6개 일치', prize: 2000000000, prizeText: '2,000,000,000' },
  { rank: 2, text: '5개 일치, 보너스 볼 일치', prize: 30000000, prizeText: '30,000,000' },
  { rank: 3, text: '5개 일치', prize: 1500000, prizeText: '1,500,000' },
  { rank: 4, text: '4개 일치', prize: 50000, prizeText: '50,000' },
  { rank: 5, text: '3개 일치', prize: 5000, prizeText: '5,000' },
]);

export const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = Object.freeze({
  money: {
    invalidMoneyNumber: `${ERROR_PREFIX} 구입금액은 숫자여야 합니다.`,
    invalidMoneyUnit: `${ERROR_PREFIX} 구입금액은 1000원 단위의 숫자여야 합니다.`,
    emptyMoneyInput: `${ERROR_PREFIX} 구입금액을 입력해주세요.`,
    blankMoneyInput: `${ERROR_PREFIX} 구입금액은 공백만으로 이루어질 수 없습니다.`,
  },
  winningNumbers: {
    invalidRange: `${ERROR_PREFIX} 당첨 번호는 1부터 45 사이의 숫자여야 합니다.`,
    invalidCount: `${ERROR_PREFIX} 당첨 번호는 6개여야 합니다.`,
    notNumber: `${ERROR_PREFIX} 당첨 번호는 숫자여야 합니다.`,
    notDuplicated: `${ERROR_PREFIX} 당첨 번호는 중복될 수 없습니다.`,
    notEmpty: `${ERROR_PREFIX} 당첨 번호는 빈 문자열일 수 없습니다.`,
    invalidInput: `${ERROR_PREFIX} 당첨 번호는 숫자와 쉼표만 입력해야 합니다.`,
  },
  bonusNumber: {
    notNumber: `${ERROR_PREFIX} 보너스 번호는 숫자여야 합니다.`,
    invalidRange: `${ERROR_PREFIX} 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`,
    notEmpty: `${ERROR_PREFIX} 보너스 번호는 빈 문자열일 수 없습니다.`,
    notDuplicated: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
  },
  lotto: {
    notDuplicate: `${ERROR_PREFIX} 로또 번호에 중복된 값이 있으면 안됩니다.`,
    notInRange: `${ERROR_PREFIX} 로또 번호에 범위는 1~45이어야 합니다.`,
    notLength6: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  },
});

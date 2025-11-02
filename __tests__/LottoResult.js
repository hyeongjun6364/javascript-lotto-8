import Lotto from '../src/model/Lotto.js';
import LottoResult from '../src/model/LottoResult.js';
import WinningNumbers from '../src/model/WinningNumbers.js';

describe('LottoResult 테스트', () => {
  test('당첨번호와 로또 번호가 제대로 매칭되는지 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = new WinningNumbers('1, 2, 3, 4, 31, 42', '7');

    const lottoResult = new LottoResult(lotto, winningNumbers);
    const matchedNumbers = lottoResult.getMatchedWinningNumbers(lotto);

    expect(matchedNumbers).toEqual([1, 2, 3, 4]);
  });

  test('보너스 번호 매칭 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    const winningNumbers = new WinningNumbers('1, 2, 3, 4, 5, 6', '7');
    const lottoResult = new LottoResult(lotto, winningNumbers);

    const isBonusMatched = lottoResult.getMatchedBonusNumber(lotto);
    expect(isBonusMatched).toBe(true);
  });

  test('보너스 번호 미매칭 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
    const winningNumbers = new WinningNumbers('1, 2, 3, 4, 5, 6', '7');
    const lottoResult = new LottoResult(lotto, winningNumbers);
    const isBonusMatched = lottoResult.getMatchedBonusNumber(lotto);
    expect(isBonusMatched).toBe(false);
  });

  test('여러 로또에 대한 당첨 결과 집계 테스트', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 31, 32]),
    ];
    const winningNumbers = new WinningNumbers('1, 2, 3, 4, 5, 6', '7');
    const lottoResult = new LottoResult(lottos, winningNumbers);
    lottoResult.updateRank();
    expect(lottoResult.getRankCounts()).toEqual(
      new Map([
        [1, 1],
        [2, 1],
        [3, 0],
        [4, 1],
        [5, 0],
      ]),
    );
  });

  test('수익 계산 테스트', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 31, 32]),
    ];
    const winningNumbers = new WinningNumbers('1, 2, 3, 4, 5, 6', '7');
    const lottoResult = new LottoResult(lottos, winningNumbers);
    lottoResult.updateRank();
    lottoResult.calculateIncome();

    expect(lottoResult.getIncome()).toBe(2030050000);
  });

  test('수익률 계산 테스트', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 31, 32]),
    ];
    const winningNumbers = new WinningNumbers('1, 2, 3, 4, 5, 6', '7');
    const lottoResult = new LottoResult(lottos, winningNumbers);
    lottoResult.updateRank();
    const incomeRate = lottoResult.calculateIncomeRate(3000);

    expect(incomeRate).toBe('67668333.3');
  });
});

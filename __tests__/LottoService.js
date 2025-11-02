import LottoService from '../src/model/LottoService.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoService 테스트', () => {
  test('로또 생성 테스트', () => {
    const lottos = new LottoService(5);
    expect(lottos.getLottos().length).toBe(5);
  });

  test('구입 금액에 따른 로또 갯수 계산 테스트', () => {
    const lottoCount = LottoService.countLottos(1000);
    expect(lottoCount).toBe(1);
  });

  test('로또 번호는 오름차순으로 정렬되어 있는지 테스트', () => {
    mockRandoms([
      [10, 3, 5, 1, 2, 4],
      [20, 15, 25, 30, 28, 27],
      [40, 35, 32, 31, 33, 34],
    ]);

    const output = [
      [1, 2, 3, 4, 5, 10],
      [15, 20, 25, 27, 28, 30],
      [31, 32, 33, 34, 35, 40],
    ];
    const lottos = new LottoService(3).getLottos();
    lottos.forEach((lotto, index) => {
      expect(lotto.getNumbers()).toEqual(output[index]);
    });
  });
});

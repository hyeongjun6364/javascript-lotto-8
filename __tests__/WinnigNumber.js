import WinningNumbers from '../src/model/WinningNumbers.js';

describe('WinningNumbers 클래스 테스트', () => {
  test('당첨번호가 제대로 파싱되는지 테스트', () => {
    const winningNumbers = new WinningNumbers('1, 2, 3, 4, 5, 6', '7');
    expect(winningNumbers.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(winningNumbers.getBonusNumber()).toBe(7);
  });
});

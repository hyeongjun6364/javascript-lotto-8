import InputView from '../src/inputView';

describe('구입 금액 유효성 테스트', () => {
  test.each([1500, 20100, 3100])('구입 금액이 %d 원일 때, 예외가 발생한다.', (input) => {
    expect(() => {
      InputView.validateMoneyInput(input);
    }).toThrow('[ERROR]');
  });

  test.each(['abc', '12ab', '!@#$', ' '])('구입 금액이 숫자가 아닐 때: %s', (input) => {
    expect(() => {
      InputView.validateMoneyInput(input);
    }).toThrow('[ERROR]');
  });

  test.each(['', '   '])('빈 문자열 또는 공백이 들어올 때: "%s"', (input) => {
    expect(() => {
      InputView.validateMoneyInput(input);
    }).toThrow('[ERROR]');
  });

  test.each(['1000', '5000', '20000'])('유효한 구입 금액: %s', (input) => {
    expect(() => {
      InputView.validateMoneyInput(input);
    }).not.toThrow();
  });
});

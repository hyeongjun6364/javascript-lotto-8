import InputView from '../src/inputView';

describe('구입 금액 유효성 테스트', () => {
  test.each([1500, 20100, 3100])('구입 금액이 1000원단위가 아니라면, 예외가 발생한다.', (input) => {
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

describe('당첨 번호 유효성 테스트', () => {
  test.each(['1,2,3,4,5', '1,2,3,4,5,6,7'])('당첨번호는 6개 숫자로 이루어져야 한다.', (input) => {
    expect(() => {
      InputView.validateWinningNumbersInput(input);
    }).toThrow('[ERROR]');
  });

  test.each(['1,2,3,4,5,5', '10,20,30,40,45,45'])(
    '당첨번호에 중복된 숫자가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        InputView.validateWinningNumbersInput(input);
      }).toThrow('[ERROR]');
    },
  );

  test.each(['0,2,3,4,5,6', '1,2,3,4,5,46', '1,2,3,4,5,-1'])(
    '당첨번호가 1~45 범위를 벗어나면 예외가 발생한다.',
    (input) => {
      expect(() => {
        InputView.validateWinningNumbersInput(input);
      }).toThrow('[ERROR]');
    },
  );

  test.each(['1,2,three,4,5,6', '1,2,3,4,5,@'])('당첨번호가 숫자가 아닐 때: %s', (input) => {
    expect(() => {
      InputView.validateWinningNumbersInput(input);
    }).toThrow('[ERROR]');
  });

  test.each(['', '   '])('빈 문자열 또는 공백이 들어올 때: "%s"', (input) => {
    expect(() => {
      InputView.validateWinningNumbersInput(input);
    }).toThrow('[ERROR]');
  });

  test.each(['1,a,b,4,5,6', '!,@,#,$,%,^'])(
    '당첨번호에 숫자,쉼표(,) 아닌 값이 포함될 때: %s',
    (input) => {
      expect(() => {
        InputView.validateWinningNumbersInput(input);
      }).toThrow('[ERROR]');
    },
  );

  test.each(['1,2,3,4,5,6', '10,20,30,40,41,42', '5,15,25,35,45,1'])(
    '유효한 당첨 번호: %s',
    (input) => {
      expect(() => {
        InputView.validateWinningNumbersInput(input);
      }).not.toThrow();
    },
  );
});

describe('보너스 번호 유효성 테스트', () => {
  test.each(['3', '4', '5'])('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', (input) => {
    InputView.winningNumbers = '1,2,3,4,5,6';
    expect(() => {
      InputView.validateBonusNumberInput(input);
    }).toThrow('[ERROR]');
  });
  test.each(['0', '46', '-1'])('보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다.', (input) => {
    expect(() => {
      InputView.validateBonusNumberInput(input);
    }).toThrow('[ERROR]');
  });
  test.each(['abc', '!@#$', ' '])('보너스 번호가 숫자가 아닐 때: %s', (input) => {
    expect(() => {
      InputView.validateBonusNumberInput(input);
    }).toThrow('[ERROR]');
  });
  test.each(['', '   '])('빈 문자열 또는 공백이 들어올 때: "%s"', (input) => {
    expect(() => {
      InputView.validateBonusNumberInput(input);
    }).toThrow('[ERROR]');
  });

  test.each(['7', '15', '30'])('유효한 보너스 번호: %s', (input) => {
    InputView.winningNumbers = '1,2,3,4,5,6';
    expect(() => {
      InputView.validateBonusNumberInput(input);
    }).not.toThrow();
  });
});

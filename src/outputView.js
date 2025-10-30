import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printMessage(message) {
    Console.print(message);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }
}

export default OutputView;

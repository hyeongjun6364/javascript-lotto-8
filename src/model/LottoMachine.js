import { LOTTO_CONSTANTS } from '../constants.js';
import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class LottoMachine {
  #lottos;

  constructor(count) {
    this.#setLottos(count);
  }

  static countLottos(money) {
    const numberOfLottos = Math.floor(money / LOTTO_CONSTANTS.price);
    return numberOfLottos;
  }

  #setLottos(count) {
    this.#lottos = new Array(count).fill().map(() => new Lotto(this.#sortRandomLottoNumbers()));
  }

  #sortRandomLottoNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANTS.minLottoNumber,
      LOTTO_CONSTANTS.maxLottoNumber,
      LOTTO_CONSTANTS.length,
    );
    return randomNumbers.sort((a, b) => a - b);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoMachine;

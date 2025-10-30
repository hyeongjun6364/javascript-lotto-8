import { LOTTO_PRICE } from './constants.js';
import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class LottoService {
  #lottos;

  constructor(count) {
    this.#setLottos(count);
  }

  static countLottos(money) {
    const numberOfLottos = Math.floor(money / LOTTO_PRICE);
    return numberOfLottos;
  }

  #setLottos(count) {
    this.#lottos = new Array(count).fill().map(() => new Lotto(this.#sortRandomLottoNumbers()));
  }

  #sortRandomLottoNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers.sort((a, b) => a - b);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoService;

import { LOTTO_PRICE } from './constants.js';
import Lotto from './Lotto.js';

class LottoService {
  #lottos;

  constructor(count) {}

  static countLottos(money) {
    const numberOfLottos = Math.floor(money / LOTTO_PRICE);
    return numberOfLottos;
  }
}

export default LottoService;

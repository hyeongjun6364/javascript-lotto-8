import { INPUT_MESSAGES } from './constants.js';
import InputView from './inputView.js';
import LottoService from './LottoService.js';

class App {
  async run() {
    const purchaseMoney = await InputView.userInput(INPUT_MESSAGES.purchaseInput);
    const lottoCount = LottoService.countLottos(purchaseMoney);
  }
}

export default App;

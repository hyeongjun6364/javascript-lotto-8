import { INPUT_MESSAGES, OUTPUT_MESSAGES } from './constants.js';
import InputView from './inputView.js';
import LottoService from './LottoService.js';
import OutputView from './outputView.js';

class App {
  async run() {
    const purchaseMoney = await InputView.userInput(INPUT_MESSAGES.purchaseInput);
    const lottoCount = LottoService.countLottos(purchaseMoney);
    OutputView.printMessage(OUTPUT_MESSAGES.purchaseLottoCount(lottoCount));

    const lottoService = new LottoService(lottoCount);
    const lottos = lottoService.getLottos();
    OutputView.printLottos(lottos);
  }
}

export default App;

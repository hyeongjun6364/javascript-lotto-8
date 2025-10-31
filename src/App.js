import { INPUT_MESSAGES, OUTPUT_MESSAGES } from './constants.js';
import InputView from './inputView.js';
import LottoService from './LottoService.js';
import OutputView from './outputView.js';
import WinningNumbers from './WinningNumbers.js';

class App {
  async run() {
    const purchaseMoney = await InputView.userInput(INPUT_MESSAGES.purchaseInput);
    const lottoCount = LottoService.countLottos(purchaseMoney);
    OutputView.printMessage(OUTPUT_MESSAGES.purchaseLottoCount(lottoCount));

    const lottoService = new LottoService(lottoCount);
    const lottos = lottoService.getLottos();
    OutputView.printLottos(lottos);

    const winningNumbersInput = await InputView.userInput(INPUT_MESSAGES.winningNumbersInput);
    const bonusNumberInput = await InputView.userInput(INPUT_MESSAGES.bonusNumberInput);
    const winningNumbers = new WinningNumbers(winningNumbersInput, bonusNumberInput);
  }
}

export default App;

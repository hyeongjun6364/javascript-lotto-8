import { INPUT_MESSAGES, OUTPUT_MESSAGES } from './constants.js';
import InputView from './inputView.js';
import LottoService from './model/LottoService.js';
import LottoResult from './model/LottoResult.js';
import OutputView from './outputView.js';
import WinningNumbers from './model/WinningNumbers.js';

class App {
  async run() {
    const money = await InputView.requestMoneyInput();
    const lottoCount = LottoService.countLottos(money);
    OutputView.printMessage(OUTPUT_MESSAGES.purchaseLottoCount(lottoCount));

    const lottoService = new LottoService(lottoCount);
    const lottos = lottoService.getLottos();
    OutputView.printLottos(lottos);

    const winningNumbersInput = await InputView.requestWinningNumbersInput();
    const bonusNumberInput = await InputView.userInput(INPUT_MESSAGES.bonusNumberInput);
    const winningNumbers = new WinningNumbers(winningNumbersInput, bonusNumberInput);

    const statistics = new LottoResult(lottos, winningNumbers);
    statistics.calculateRank();
    OutputView.printWinningResult(statistics.getRankCounts());

    const incomeRate = statistics.calculateIncomeRate(money);
    OutputView.printIncomeRate(incomeRate);
  }
}

export default App;

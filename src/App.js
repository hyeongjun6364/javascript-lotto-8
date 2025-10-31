import { INPUT_MESSAGES, OUTPUT_MESSAGES } from './constants.js';
import InputView from './inputView.js';
import LottoService from './model/LottoService.js';
import LottoStatistics from './model/LottoResult.js';
import OutputView from './outputView.js';
import WinningNumbers from './model/WinningNumbers.js';

class App {
  async run() {
    const money = await InputView.userInput(INPUT_MESSAGES.purchaseInput);
    const lottoCount = LottoService.countLottos(money);
    OutputView.printMessage(OUTPUT_MESSAGES.purchaseLottoCount(lottoCount));

    const lottoService = new LottoService(lottoCount);
    const lottos = lottoService.getLottos();
    OutputView.printLottos(lottos);

    const winningNumbersInput = await InputView.userInput(INPUT_MESSAGES.winningNumbersInput);
    const bonusNumberInput = await InputView.userInput(INPUT_MESSAGES.bonusNumberInput);
    const winningNumbers = new WinningNumbers(winningNumbersInput, bonusNumberInput);

    const statistics = new LottoStatistics(lottos, winningNumbers);
    statistics.calculateRank();
    OutputView.printWinningResult(statistics.getRankCounts());

    const incomeRate = statistics.calculateIncomeRate(money);
    OutputView.printIncomeRate(incomeRate);
  }
}

export default App;

import InputView from './view/inputView.js';
import LottoMachine from './model/LottoMachine.js';
import LottoResult from './model/LottoResult.js';
import OutputView from './view/outputView.js';
import WinningNumbers from './model/WinningNumbers.js';

class App {
  async run() {
    const money = await InputView.requestMoneyInput();
    const lottoCount = LottoMachine.countLottos(money);
    OutputView.printLottoCount(lottoCount);

    const lottoService = new LottoMachine(lottoCount);
    const lottos = lottoService.getLottos();
    OutputView.printLottos(lottos);

    const winningNumbersInput = await InputView.requestWinningNumbersInput();
    const bonusNumberInput = await InputView.requestBonusNumberInput(winningNumbersInput);
    const winningNumbers = new WinningNumbers(winningNumbersInput, bonusNumberInput);

    const statistics = new LottoResult(lottos, winningNumbers);
    statistics.updateRank();
    OutputView.printWinningResult(statistics.getRankCounts());

    const incomeRate = statistics.calculateIncomeRate(money);
    OutputView.printIncomeRate(incomeRate);
  }
}

export default App;

import InputView from './view/inputView.js';
import LottoMachine from './model/LottoMachine.js';
import LottoResult from './model/LottoResult.js';
import OutputView from './view/outputView.js';
import WinningNumbers from './model/WinningNumbers.js';

class App {
  async run() {
    const { money, lottoCount } = await this.#purchaseLottos();
    const { lottos } = await this.#createLottos(lottoCount);
    const winningNumbers = await this.#getWinningNumbers();
    this.#showResults(money, lottos, winningNumbers);
  }

  async #purchaseLottos() {
    const money = await InputView.requestMoneyInput();
    const lottoCount = LottoMachine.countLottos(money);
    OutputView.printLottoCount(lottoCount);

    return { money, lottoCount };
  }

  async #createLottos(lottoCount) {
    const lottoService = new LottoMachine(lottoCount);
    const lottos = lottoService.getLottos();
    OutputView.printLottos(lottos);
    return { lottoService, lottos };
  }

  async #getWinningNumbers() {
    const winningNumbersInput = await InputView.requestWinningNumbersInput();
    const bonusNumberInput = await InputView.requestBonusNumberInput(winningNumbersInput);
    return new WinningNumbers(winningNumbersInput, bonusNumberInput);
  }

  #showResults(money, lottos, winningNumbers) {
    const statistics = new LottoResult(lottos, winningNumbers);
    statistics.updateRank();
    OutputView.printWinningResult(statistics.getRankCounts());

    const incomeRate = statistics.calculateIncomeRate(money);
    OutputView.printIncomeRate(incomeRate);
  }
}

export default App;

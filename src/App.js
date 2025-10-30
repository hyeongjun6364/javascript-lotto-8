import { INPUT_MESSAGES } from './constants.js';
import InputView from './inputView.js';

class App {
  async run() {
    const purchaseMoney = await InputView.userInput(INPUT_MESSAGES.purchaseInput);
  }
}

export default App;

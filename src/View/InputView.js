import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  async readInput(string) {
    let inputValue = '';

    try {
      inputValue = await MissionUtils.Console.readLineAsync(string);
    } catch (err) {
      throw new Error(err);
    }

    return inputValue;
  }

  async readCarNames() {
    const carNames = await this.readInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    return carNames;
  }
}

export default InputView;
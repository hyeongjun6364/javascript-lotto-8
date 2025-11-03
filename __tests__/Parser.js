import Parser from '../src/util/parser.js';

describe('Parser클래스 테스트', () => {
  test('(쉼표)로 구분된 문자열을 배열로 변환', () => {
    const input = '1,2,3,4,5,6';
    const result = Parser(input);
    expect(result).toEqual(['1', '2', '3', '4', '5', '6']);
  });
});

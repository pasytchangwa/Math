import operate from '../logic/operator';

describe('operate', () => {
  test('1 + 3 to return 4', () => {
    expect(operate(1, 3, '+')).toBe('4');
  });

  test('3 - 1 should return 2', () => {
    expect(operate(3, 1, '-')).toBe('2');
  });

  test('6 ÷ 3 should return 2', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  test('3 x 2 should return 6', () => {
    expect(operate(3, 2, 'x')).toBe('6');
  });

  test('8 % 2 should return 0', () => {
    expect(operate(8, 2, '%')).toBe('0');
  });

  test('Should throw an error if a wrong operator is used', () => {
    expect(() => operate(1, 1, '++')).toThrowError(/Unknown operation/);
  });
});

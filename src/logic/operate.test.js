import operate from './operate';

test('Returns a number', () => {
  expect(operate(2, 3, '-')).toBe('-1');
  expect(operate(30, 15, '+')).toBe('45');
  expect(operate(8, 2, '÷')).toBe('4');
  expect(operate(10, 5, '%')).toBe('0');
  expect(operate(6, 3, 'x')).toBe('18');
});

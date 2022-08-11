import calculate from './calculate';

describe('calculate', () => {
  test('should return the sum of two numbers', () => {
    const result = calculate({
      total: 0,
      next: null,
      operation: null,
    }, 'AC');
    expect(result).toEqual({
      total: 0,
      operation: null,
      next: null,
    });
  });
  test('click on first number', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, '5');
    expect(result.next).toEqual('5');
  });
  test('click on operation', () => {
    const obj = {
      total: null,
      next: 5,
      operation: null,
    };
    const result = calculate(obj, '+');
    expect(result.operation).toEqual('+');
    expect(result.total).toEqual(5);
  });
  test('click on second number', () => {
    const obj = {
      total: 5,
      next: null,
      operation: '+',
    };
    const result = calculate(obj, '3');
    expect(result.next).toEqual('3');
  });
  test('calculate the total number', () => {
    const obj = {
      total: 5,
      next: 10,
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('15');
  });
});

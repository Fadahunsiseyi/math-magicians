import calculate from './calculate';

it('should return an object', () => {
  const calculateTest = calculate({ total: 0, next: null, operation: null }, 'AC');
  expect(calculateTest).toStrictEqual({ total: 0, next: null, operation: null });
});

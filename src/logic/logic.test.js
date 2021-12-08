import calculate from './calculate';
import operate from './operate';

describe('Test logic fuctions', () => {
  const object = {
    total: 8,
    next: null,
    operation: 'x',
  };
  test('when click AC, all values should be null', () => {
    expect(calculate(object, 'AC')).toEqual({ next: null, operation: null, total: null });
  });
  test('it should return right answer', () => {
    expect(calculate(object, '3').next).toEqual('3');
  });
  test('Multiplicaiton operation', () => {
    expect(operate(2, 2, 'x')).toEqual('4');
  });
  test('Addition operation', () => {
    expect(operate(2, 2, '+')).toEqual('4');
  });
  test('Diviion operation', () => {
    expect(operate(2, 2, '÷')).toEqual('1');
  });
});

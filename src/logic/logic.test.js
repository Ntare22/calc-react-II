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
  test('Division operation', () => {
    expect(operate(2, 2, '÷')).toEqual('1');
  });
  test('Subtraction', () => {
    expect(operate(3, 2, '-')).toEqual('1');
  });
  test('Modulus', () => {
    expect(operate(3, 2, '%')).toEqual('1');
  });
  test('Modulus', () => {
    expect(operate(3, 3, '%')).toEqual('0');
  });
});

describe('AC button should clear the object passed', () => {
  const object = {
    total: 10,
    next: null,
    operation: '+',
  };
  test('all values of the object should be null', () => {
    expect(calculate(object, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
});

describe('Any number button should append the number to next', () => {
  const object = {
    total: null,
    next: '1',
    operation: null,
  };
  test('all values of the object should be null', () => {
    expect(calculate(object, '5').next).toEqual('15');
  });
});

describe('Adding operation', () => {
  const object = {
    total: null,
    next: '15',
    operation: null,
  };
  test('all values of the object should be null', () => {
    expect(calculate(object, '+')).toEqual({ total: '15', next: null, operation: '+' });
  });
});

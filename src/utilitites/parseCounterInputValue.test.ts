import parseCounterInputValue from './parseCounterInputValue';

describe('parseCounterInputValue', () => {
  it('should return 0 if value is not a number', () => {
    expect(parseCounterInputValue('text')).toEqual(0);
  });

  it('should return 0 if value is negative number', () => {
    expect(parseCounterInputValue('-1')).toEqual(0);
  });

  it('should return value if value is a number', () => {
    expect(parseCounterInputValue('1')).toEqual(1);
  });
});

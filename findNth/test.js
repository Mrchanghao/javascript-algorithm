const nth = require('./index.js');

test('nth는 함수', () => {
    expect(typeof nth).toEqual('function');
  });
  
  test('nth([1, 2, 3, 4], 1)', () => {
    expect(nth([1, 2, 3, 4], 1)).toEqual(4);
  });
  
  test('nth([13, -3, -3, 12], 2)', () => {
    expect(nth([13, -3, -3, 12], 2)).toEqual(12);
  });
  
  test('nth([-1, 3, -3, 112], 3)', () => {
    expect(nth([-1, 3, -3, 112], 3)).toEqual(-1);
  });
  
  test('nth([1000, 23, -3333333, 112121212], 1)', () => {
    expect(nth([1000, 23, -3333333, 112121212], 1)).toEqual(112121212);
  });
  test('nth([-1, 3, -3, 112, 11], 4)', () => {
      expect(nth([-1, 3, -3, 112, 11], 4)).toEqual(-1)
  });

  test('nth([23, -1, 0, 56, 100, 101.112, 0.3], 5)', () => {
      expect(nth([23, -1, 0, 56, 100, 101.112, 0.3], 5)).toEqual(0.3)
  })
  
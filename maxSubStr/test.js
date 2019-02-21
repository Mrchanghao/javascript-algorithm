const maxSubStr = require('./index.js');

test('maxSubStr 함수가 존재한다', () => {
    expect(typeof maxSubStr).toEqual('function');
  });

  test('함수 예상 값들은', () => {
    expect(maxSubStr('aabb')).toEqual(2);
    expect(maxSubStr('vbvbaabb')).toEqual(3);
    expect(maxSubStr('1')).toEqual(1);
    expect(maxSubStr('12')).toEqual(2);
    expect(maxSubStr('aaaaaa')).toEqual(1);
  });
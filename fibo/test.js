const fib = require('./index');

test('Fib 은 함수', () => {
  expect(typeof fib).toEqual('function');
});

test('1에 계산 결과 값 ', () => {
  expect(fib(1)).toEqual(1);
});

test('2에 대한 수열계산 값 ', () => {
  expect(fib(2)).toEqual(1);
});

test('세번째 수열계산 값 ', () => {
  expect(fib(3)).toEqual(2);
});

test('4에 대한 수열계산 값 ', () => {
  expect(fib(4)).toEqual(3);
});
test('16에 대한 수열 계산 값', () => {
    expect(fib(16)).toEqual(987)
})
test('39에 대한수열계산 값 ', () => {
  expect(fib(39)).toEqual(63245986);
});

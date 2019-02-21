const fibo = require('./index');


describe('재귀함수의 테스트', () => {
    test('fibo function 이 선언되어 있다', () => {
        expect(fibo).toBeDefined();
    })
    test('재귀 함수 fibo(1111111)의 결과 값이 제대로 나온다', () => {
        expect(fibo(111)).toBe(6216);
    })
    test('재귀 함수 fibo(120)의 결과 값이 나옴', () => {
        expect(fibo(120)).toBe(7260)
    })
    test('재귀함수 fibo(250) 결과는', () => {
        expect(fibo(250)).toBe(31375)
    })
    test('재귀함수 fibo(8722) 결과는', () => {
        expect(fibo(8722)).toBe(38041003)
    })
    test('재귀함수 fibo(8712) 결과는', () => {
        expect(fibo(8712)).toBe(37953828)
    })
})

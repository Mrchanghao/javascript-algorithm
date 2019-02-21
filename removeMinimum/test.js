const removeItem = require('./index.js');

test('function exists', () => {
    expect(removeItem).toBeDefined();
});

test('removeItem reverses a string', () => {
    expect(removeItem([1, 2, 34, 658])).toEqual([2, 34, 658]);
});

test('removeItem ', ()=> {
    expect(removeItem([1, 23, 45, 99])).toEqual([23, 45, 99]);
})
test('removeItem removeItems a string', () => {
    expect(removeItem([34, 979, 9090, -1])).toEqual([34, 979, 9090]);
});

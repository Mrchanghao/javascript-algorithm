const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('reverse string', ()=> {
  expect(reverse('!dfdf')).toEqual('fdfd!');
})

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

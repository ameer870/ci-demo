const { add, multiply } = require('./calculator');

test('adds numbers correctly', () => {
  expect(add(2,3)).toBe(5);
});

test('multiply numbers correctly', () => {
  expect(multiply(2,3)).toBe(6);
});


const dummyFunc = require('../index');

test('adds 2+3 to equal to 5', () => {
  expect(dummyFunc(2, 3)).toBe(5);
});

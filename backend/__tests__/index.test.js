const dummyFunc = require('../src/index');

test('adds 2+3-1 to equal to 4', () => {
  expect(dummyFunc(2, 3, 1)).toBe(4);
});

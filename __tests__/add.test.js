// file: add.test.js

const add = require('../src/add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toEqual(4)
  });
});
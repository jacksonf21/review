const { user } = require('../tut');
const assert = require('assert');

describe('user', () => {
  it('user has properties "first" and "last"', () => {
    const keys = Object.keys(user());
    assert.equal(keys.includes('first', 'last'), true);
  });

  it('user has first and last name', () => {
    const values = Object.values(user());
    assert.equal(!values.includes(''), true);
  });

  it('user throws error with no first and last name', () => {
    
    assert.equal();
  });
});
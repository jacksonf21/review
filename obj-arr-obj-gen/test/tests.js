const { user } = require('../tut');
const assert = require('assert');

const testUser = {
  id: 1,
  first: 'jackson',
  last: 'fung',
  username: 'jacksonf21',
  isLoggedIn: true,
  sayHi() {
    if (this.isLoggedIn) {
      return `hi ${this.username}`;
    } else {
      return `Please login`;
    }
  },
};

const iterUser = user('jackson', 'fung', 'jacksonf21');

describe('user', () => {
  it('user has properties "first" and "last"', () => {
    const keys = Object.keys(iterUser);
    assert.equal(keys.includes('first', 'last'), true);
  });

  it('user has first and last name', () => {
    const values = Object.values(iterUser);
    assert.equal(!values.includes(''), true);
  });

  it('user throws error with no first and last name', () => {
    assert.throws(() => user(), Error);
  });

  it('invoke hi firstname lastname', () => {
    assert.equal(iterUser.sayHi(), 'Hi, jackson fung');
  });

  it('invoke hi username', () => {
    assert.equal(iterUser.sayHiWithThis(), 'Hi, jacksonf21');
  });

});

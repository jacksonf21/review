
const user = (first, last, username) => {
  const check = ([first, last, username].every(arg => arg !== undefined));

  if (!check) throw Error('!== Missing Key Argument ==!');

  const user = {
    id: 1,
    first: first,
    last: last,
    username: username,
    isLoggedIn: true,
    sayHi() {
      return `Hi, ${this.first} ${this.last}`;
    },
    sayHiWithThis() {
      if (this.isLoggedIn) {
        return `Hi, ${this.username}`;
      } else {
        return `Please login`;
      }
    },

  };
   
  return user;
};

user('jackson', 'fung', 'jacksonf21');

module.exports = { user };
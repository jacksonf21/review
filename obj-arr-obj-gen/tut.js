
const user = () => {

  const user = {
    id: 1,
    first: 'jackson',
    last: 'fung',
    username: 'jacksonf21',
    isLoggedIn: true,
    hi() {
      if (this.isLoggedIn) {
        return `hi ${this.username}`;
      } else {
        return `Please login`;
      }
    },
  };
  
  user.isLoggedIn = false;
  return user;
};



module.exports = { user };
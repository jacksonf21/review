
const students = {
  1: {
    name: 'janet',
    age: 14
  },
  2: {
    name: 'yui',
    age: 15
  },
  3: {
    name: 'joe',
    age: 14
  }
};

const studentsNested = {
  1: {
    name: 'janet',
    age: 14,
    courses: [
      {
        name: 'biology',
        grade: 3.7,
        teachers: [{
          name: 'husky',
          age: 38
        }]
      },
      {
        name: 'math',
        grade: 3.3
      },
    ],
    courses2: [
      {
        name: 'science',
        grade: 3.7
      },
      {
        name: 'english',
        grade: 3.3
      }
    ]},
  2: {
    name: 'yui',
    age: 15,
    courses: [
      {
        name: 'english',
        grade: 3.1
      },
      {
        name: 'geography',
        grade: 3.9
      },
    ]},
  3: {
    name: 'joe',
    age: 14,
    courses: [
      {
        name: 'biology',
        grade: 3.9
      },
      {
        name: 'math',
        grade: 3.1
      },
    ]}
};

module.exports = { students, studentsNested };
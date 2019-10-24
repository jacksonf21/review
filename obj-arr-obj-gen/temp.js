const { students, studentsNested } = require('./obj');

//CHECK ITS GOOD
// console.log(students);
// console.log(JSON.stringify(studentsNested, undefined, 2));


// #3 HIGHER ORDER FN returns key pair value of value with an object
//RETURN KEY PAIR, TO RETURN ALL THAT MATCH NOT JUST FIRST
const valueIsObject = (obj) => {
  const map = new Map();
  
  for (let item in obj) {
    map.set(item, obj[item]);
  }
  
  const pairs = Array.from(map.entries());
  return pairs.filter(pair => {
    if (typeof(pair[1]) === 'object') return pair;
  });
};

// #3 HIGHER ORDER FN
const studentMapNested = new Map();

for (let student in studentsNested) {
  studentMapNested.set(student, studentsNested[student]);
}

studentMapNested.forEach((v, k) => {
  console.log(JSON.stringify(valueIsObject(v), undefined, 2));
});


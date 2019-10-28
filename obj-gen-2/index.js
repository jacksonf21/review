//MULTIPLE OBJECT ASSIGNMENT WITH SIMILAR NUMBER OF FIELDS
const { bookCollection } = require('./objectCreation/bookCollection');
const { invertRelation } = require('./objectCreation/invertRelation');
const { objectAssign } = require('./objectCreation/objectAssign');
const { rawDataOne, rawDataTwo, booksToLibraries } = require('./objectCreation/data');

const books = objectAssign(rawDataOne, 'title', 'year', 'author');
const libraries = objectAssign(rawDataTwo, 'branch', 'year', 'staff_count');
const librariesToBooks = invertRelation(booksToLibraries);

// return bookCollection(librariesToBooks, libraries, books);

//DEBUG
console.log(JSON.stringify(bookCollection(librariesToBooks, libraries, books), undefined, 2));
const invertRelation = relations => {
  const tempObj = {};
  const collection = [];

  relations.forEach(r => {

    const data = r.split(',');
    const bookID = data[0];
    const libraryIDS = data.splice(1, data.length);

    libraryIDS.forEach(libraryID => {
      tempObj[libraryID] ?
        tempObj[libraryID].push(bookID) :
        tempObj[libraryID] = [bookID];
    });
  });

  for (let key in tempObj) {
    let txt = `${key},${tempObj[key]}`.trim();
    collection.push(txt);
  }

  return collection;
};

module.exports = { invertRelation };
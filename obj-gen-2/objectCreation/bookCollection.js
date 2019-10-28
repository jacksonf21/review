const bookCollection = (rawDataRelations, libraries, books) => {
  const API_OBJECT = {};

  const librariesCollection = () => {
    return relations => {
      const data = relations.split(',');

      const libraryID = data[0].trim();
      const booksID = data.splice(1, data.length);
      
      const booksSubObject = booksID.map(book => {
 
        return {
          [book]: {
            ...books[book]
          }
        };
        
      });

      const librarySubObject = {
        ...libraries[libraryID],
        books: booksSubObject
      };

      API_OBJECT[libraryID] = librarySubObject;
    };
  };

  rawDataRelations.forEach(librariesCollection());
  return API_OBJECT;
};

module.exports = { bookCollection };
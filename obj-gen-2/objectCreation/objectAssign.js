const objectAssign = (rawData, inputOne, inputTwo, inputThree) => {
  const tempObj = {};
  const transformToObject = () => {
  
    return tranformedObject => {
      const data = tranformedObject.split(',');
      const id = data[0];

      tempObj[id] = {
        [inputOne]:   data[1].trim(),
        [inputTwo]:   data[2].trim(),
        [inputThree]: data[3].trim()
      };
    };
  };

  rawData.forEach(transformToObject());
  return tempObj;
};

module.exports = { objectAssign };
const getData = require('./getData');
const { writeFile } = require('fs').promises;

const appendData = async (file, newObj) => {
  const data = await getData(file);
  data.push(newObj);
  await writeFile(`${__dirname}/../data/${file}.json`, JSON.stringify(data));
};

module.exports = appendData;

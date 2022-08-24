const { readFile } = require('fs').promises;

const getData = async (file) => {
  const data = await readFile(`${__dirname}/../data/${file}.json`, 'utf-8');
  return JSON.parse(data);
};

module.exports = getData;

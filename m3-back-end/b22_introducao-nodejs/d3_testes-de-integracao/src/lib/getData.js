const fs = require('fs').promises;

const getData = async () => {
  const chocolates = await fs.readFile(
    `${__dirname}/../data/chocolates.json`,
    'utf-8'
  );
  return JSON.parse(chocolates);
};

module.exports = getData;

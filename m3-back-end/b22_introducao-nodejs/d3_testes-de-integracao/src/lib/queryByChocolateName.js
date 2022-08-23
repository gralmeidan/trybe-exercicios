const fs = require('fs').promises;

const queryByChocolateName = async (query) => {
  const data = await fs.readFile(
    `${__dirname}/../data/chocolates.json`,
    'utf-8'
  );
  return JSON.parse(data).chocolates.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
};

module.exports = queryByChocolateName;

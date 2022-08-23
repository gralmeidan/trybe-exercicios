const getData = require('./getData');
const fs = require('fs').promises;

const updateChocolate = async (id, objInfo) => {
  const data = await getData();
  const oldObj = data.chocolates.find(({ id: cid }) => id == cid);
  if (!oldObj) throw new Error('ID não encontrado');

  const newObj = {
    id,
    ...objInfo,
  };

  data.chocolates = data.chocolates.map((choc) =>
    choc.id != id ? choc : newObj
  );

  await fs.writeFile(
    `${__dirname}/../data/chocolates.json`,
    JSON.stringify(data)
  );
  return newObj;
};

module.exports = updateChocolate;
